export default function AboutSection() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Title */}
        <div className="lg:col-span-5 xl:col-span-3">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#D2691E]">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="lg:col-span-7 xl:col-span-9 space-y-6">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-900">
            I&apos;m an influencer Marketer with over 5 years of experience in the fashion and lifestyle industry. I&apos;ve collaborated with multiple local and international brands through both paid and gifted partnerships. My focus is on creating high-quality, authentic content that connects with my audience and helps brands build trust and engagement.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 pt-4">
            Blending creativity with strategy, I create content that resonates deeply with my audience and reflects each brand&apos;s unique message. My collaborations are built on authenticity, engagement, and long-term brand growth.
          </p>
        </div>
      </div>
    </section>
  );
}
