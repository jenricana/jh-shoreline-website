import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force Node.js runtime (required for nodemailer)
export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, address, state, city, message, service, squareFootage } = body;

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${fullName || 'Contact Form'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #0047AB; border-bottom: 3px solid #FFC107; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0a1628; margin-bottom: 15px;">Contact Information</h3>
            ${fullName ? `<p><strong>Name:</strong> ${fullName}</p>` : ''}
            ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
            ${state ? `<p><strong>State:</strong> ${state}</p>` : ''}
            ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
          </div>

          ${service ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #0a1628; margin-bottom: 15px;">Service Details</h3>
              <p><strong>Service Requested:</strong> ${service}</p>
              ${squareFootage ? `<p><strong>Property Size:</strong> ${squareFootage}</p>` : ''}
            </div>
          ` : ''}

          ${message ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #0a1628; margin-bottom: 15px;">Message</h3>
              <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This email was sent from the JH Shoreline website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: String(error) },
      { status: 500 }
    );
  }
}
