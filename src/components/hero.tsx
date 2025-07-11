import { ArrowRight, Download, Brain, Cpu, Database, Code, Settings, Layers, Server, Cloud, GitBranch, BookOpen, Lightbulb } from "lucide-react"
import profile from "@/assets/profile.png"
import resume from "@/assets/resume.pdf"

export default function Hero() {
  return (
    <section id="about" className="py-xl lg:py-xxl relative overflow-hidden">
      {/* Subtle background with texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-rice-paper to-white texture-overlay"></div>

      <div className="container mx-auto px-lg max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-center stagger-animation">
          <div className="text-center lg:text-left animate-fade-in lg:col-span-2">
            {/* Status badge */}
            <div className="inline-flex items-center gap-sm px-md py-sm bg-success/10 text-success rounded-full font-body text-small font-medium mb-lg hover-lift">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
              Available for new opportunities
            </div>

            <h1 className="font-display text-h1 font-bold text-primary mb-lg leading-tight text-balance max-w-2xl mx-auto lg:mx-0">
              AI/ML Engineer &<span className="block text-deep-brown">Full-Stack Developer</span>
            </h1>

            <p className="font-body text-body text-deep-brown/80 mb-lg max-w-2xl mx-xl md:mx-auto lg:mx-0 leading-relaxed text-balance">
              I design, build and deploy production-ready machine-learning services
              and modern web applications that turn data into real-world impact. 
              My work spans model research, scalable APIs, cloud-native infrastructure 
              and end-to-end DevOps automation.
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-md mb-lg justify-center lg:justify-start max-w-4xl mx-xl lg:mx-auto">
              {[
                { icon: Settings, label: "AI Solution Architect" },
                { icon: Layers, label: "End-to-End ML Engineer" },
                { icon: Server, label: "Backend API Specialist" },
                { icon: Cloud, label: "Cloud-Native Practitioner" },
                { icon: GitBranch, label: "CI/CD Automation Advocate" },
                { icon: Code, label: "Clean Code Enthusiast" },
                { icon: BookOpen, label: "Always Learning" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-sm px-md py-sm bg-white rounded-lg shadow-1 border border-soft-gray/20 hover-lift transition-all duration-300"
                >
                  <skill.icon className="text-primary" size={16} />
                  <span className="font-body text-small font-medium text-deep-brown">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-row gap-md justify-center lg:justify-start mr-md">
              <a href="#projects" className="no-underline inline-flex items-center justify-center px-lg py-md bg-primary text-primary-foreground rounded-xl font-body font-medium hover:bg-deep-brown transition-all duration-300 shadow-2 hover-lift focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-40">
                View My Work
                <ArrowRight className="ml-sm" size={16} />
              </a>
              <a 
                href={resume} 
                download="Javier_Hengda_Resume.pdf"
                className="no-underline inline-flex items-center justify-center px-lg py-md border-2 border-primary text-primary rounded-xl font-body font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-40"
              >
                <Download className="mr-sm" size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-center lg:justify-end animate-slide-up mx-auto lg:mx-xl">
            <div className="relative">
              <div className="w-80 h-80 lg:w-70 lg:h-70 p-md rounded-2xl bg-gradient-to-br from-primary to-deep-brown shadow-3 overflow-hidden hover-lift transition-all duration-300">
                <img
                  src={profile.src}
                  alt="Javier Hengda - AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-md -right-md w-12 h-12 bg-success rounded-xl shadow-2 flex items-center justify-center hover-lift animate-float">
                <Brain className="text-on-success" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
