import Image from "next/image";
import Project1 from "@/../public/images/pic1.webp"
import Project2 from "@/../public/images/pic2.webp"
import Project3 from "@/../public/images/pic3.webp"
import Project4 from "@/../public/images/pic4.webp"
import Project5 from "@/../public/images/pic5.webp"
import Project6 from "@/../public/images/pic6.webp"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: Project1,
    },
    {
      id: 2,
      image: Project2,
    },
    {
      id: 3,
      image: Project3,
    },
    {
      id: 4,
      image: Project4,
    },
    {
      id: 5,
      image: Project5,
    },
    {
      id: 6,
      image: Project6,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1d262b] mb-8 md:mb-12 lg:mb-16">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0`}>
                <Image
                  src={project.image}
                  alt="project-image"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
