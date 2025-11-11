export default function ExpertiseSection() {
  const expertiseItems = [
    {
      number: 1,
      title: "data scrapping",
      description:
        "Data scraping extracts specific information from websites automatically, helping businesses gather insights, track competitors, analyze trends, or build databases for targeted marketing strategies.",
    },
    {
      number: 2,
      title: "Manage campaign",
      description:
        "Managing a campaign involves strategizing, scheduling, and monitoring marketing activities to reach the target audience, optimize performance, boost engagement, and ensure successful campaign outcomes.",
    },
    {
      number: 3,
      title: "email handling",
      description:
        "Email handling ensures professional communication by reading, responding, organizing, and prioritizing emails, especially for customer support, brand collaborations, and maintaining efficient workflow management.",
    },
    {
      number: 4,
      title: "influencer list",
      description:
        "An influencer list compiles trusted social media creators matching your brand’s niche, aiding in effective outreach, campaign planning, partnerships, and influencer marketing strategies.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fff7f6] px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Title */}
        <div className="lg:col-span-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D2691E] leading-tight">
            My Services
          </h2>
        </div>

        {/* Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Intro Text */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-900">
            I help brands grow through paid collaborations, gifting campaigns, product reviews, and creative content like Instagram Reels and stories. I also provide UGC production, campaign management, and performance tracking to ensure every collaboration delivers real engagement and results.
          </p>

          {/* Expertise List */}
          <div className="space-y-12 pt-8">
            {expertiseItems.map((item, index) => (
              <div key={item.number} className="space-y-3">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 capitalize">
                  {item.number}. {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {index < expertiseItems.length - 1 && (
                  <div className="pt-8">
                    <hr className="border-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
