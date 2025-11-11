export default function SkillsSection() {
  const skills = [
    "influencer List Building",

"Creator Outreach & Relationship Management",

"UGC (User-Generated Content) Campaigns",

"Email Marketing & Lead Nurturing",

"Social Media Strategy & Management",

"Brand Collaboration & Negotiation",

"Campaign Planning & Execution",

"Content Briefing & Reporting",

"Market Research & Trend Analysis",

"Communication & Coordination",

"Google Sheets & Excel Tracking",

"Canva & Creative Strategy",

"PR & Brand Awareness Campaigns",

"Influencer Contract Management",

"Community Engagement"
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1d262b] mb-8 md:mb-12 lg:mb-16">
          My Skills
        </h2>

        {/* Skills Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start gap-4 group">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#D2691E] flex-shrink-0 transition-transform group-hover:scale-110 mt-1"></div>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 capitalize">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
