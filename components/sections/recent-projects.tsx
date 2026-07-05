"use client";

import Image from "next/image";
import { DecorativeIcons } from "@/components/ui/decorative-icons";

const projectPhotos = [
  "/recent_projects/IMG_20260107_144648.jpg",
  "/recent_projects/IMG_20260120_142407.jpg",
  "/recent_projects/IMG_20260122_105322.jpg",
  "/recent_projects/20260527_131532.jpg",
  "/recent_projects/IMG_20260127_100529.jpg"
];

const projectVideos = [
  "/recent_projects/20260212_095401.mp4",
  "/recent_projects/20260216_172043.mp4",
  "/recent_projects/VID_20260604_041923_497.mp4",
  "/recent_projects/VID_20260619_160048_948 (1).mp4",
  "/recent_projects/video_20260113_150136.mp4",
  "/recent_projects/video_20260122_105403.mp4"
];

export function RecentProjects() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <DecorativeIcons />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#0047AB] text-sm font-semibold tracking-widest uppercase mb-3">
            RECENT PROJECTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">
            Our Latest <span className="text-[#FFC107]">Work</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            See our professional cleaning services in action through photos and videos of our recent projects
          </p>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#FFC107] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0a1628]">Project Photos</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {projectPhotos.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={image}
                  alt={`Project Photo ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#0047AB] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0a1628]">Project Videos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projectVideos.map((video, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow bg-black"
              >
                <video
                  src={video}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
                <div className="absolute top-3 right-3 bg-[#0047AB] text-white text-xs font-bold px-2 py-1 rounded-full">
                  VIDEO
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
