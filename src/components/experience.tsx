import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "B.Sc. Computer Engineering",
    company: "University of Barcelona",
    location: "Barcelona, Spain",
    period: "2022 - 2026 (Expected)",
    description: "Pursuing comprehensive education in computer engineering with focus on software development, algorithms, and system design.",
    achievements: [
      "Studying advanced programming concepts",
      "Learning software architecture and design patterns",
      "Building foundation in computer science principles",
    ],
  },
  {
    id: 2,
    title: "Mathematics for Machine Learning",
    company: "Imperial College London",
    location: "Online Certification",
    period: "2024",
    description: "Comprehensive certification covering linear algebra, calculus, and statistics for machine learning applications.",
    achievements: [
      "Mastered mathematical foundations for ML",
      "Applied linear algebra to real-world problems",
      "Completed hands-on mathematical exercises",
    ],
  },
  {
    id: 3,
    title: "IBM Data Analyst Professional Certificate",
    company: "IBM",
    location: "Online Certification",
    period: "2024",
    description: "Professional certification program covering data analysis, visualization, and business intelligence tools.",
    achievements: [
      "Learned data analysis with Python and SQL",
      "Created interactive dashboards and visualizations",
      "Completed real-world data analysis projects",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-xl bg-white">
      <div className="container mx-auto p-lg max-w-4xl">
        <div className="text-center mb-xl">
          <h2 className="font-display text-h2 font-semibold text-primary mb-lg">Education & Certifications</h2>
          <p className="font-body text-deep-brown/70 text-balance">
            Building technical expertise through formal education and professional certifications
          </p>
        </div>

        <div className="stagger-animation space-y-lg">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="bg-card text-card-foreground p-lg rounded-lg shadow-2 hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-md">
                  <div>
                    <h3 className="font-display text-h3 font-semibold text-primary mb-sm">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-sm text-small text-muted-foreground mb-md">
                      <div className="flex items-center gap-sm">
                        {exp.id === 1 ? <GraduationCap size={16} /> : <Award size={16} />}
                        <span className="font-display font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-sm">
                        <MapPin size={16} />
                        <span className="font-body">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-sm">
                        <Calendar size={16} />
                        <span className="font-body">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-body text-muted-foreground mb-md">{exp.description}</p>

                <ul className="space-y-sm">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-sm text-small text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-body">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
