export default function ContactSection() {
  return (
    <section className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Title */}
        <div className="lg:col-span-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D2691E] leading-tight">
            Let&apos;s work together
          </h2>
        </div>

        {/* Content */}
        <div className="lg:col-span-9 space-y-8">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Have a project in mind? I&apos;d love to hear your ideas and create something meaningful together. Let&apos;s bring your vision to life.
          </p>

          <div className="break-all">
            <a 
              href="mailto:hello@ricarhdh.com" 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d262b] hover:text-[#D2691E] transition-colors duration-300"
            >
              afriditalha@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
