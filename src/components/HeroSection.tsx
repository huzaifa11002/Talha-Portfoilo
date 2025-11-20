import Image from "next/image";
import Profile from "@/../public/images/profile.jpeg"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#1d262b]">
            <span className="block">Hi. I am a</span>
            <span className="block italic font-serif font-light">
              PR/Influencer Marketing Manager
            </span>
          </h1>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 rounded-full bg-[#7FA5B0] overflow-hidden">
              <Image
                src={Profile}
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
