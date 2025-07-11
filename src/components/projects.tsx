"use client"

import { Github, Star } from "lucide-react"
import iris from "@/assets/iris.jpg"
import sales from "@/assets/sale.png"
import movies from "@/assets/movies.jpg"
import cookbook from "@/assets/cookbook.jpg"
import battleship from "@/assets/battleship.jpg"

const projects = [
  {
    id: 1,
    title: "Battleship Game",
    description: "Multiplayer Battleship game with real-time multiplayer functionality and a responsive UI.",
    tech: ["Vue.js", "Django", "SQLite"],
    status: "featured",
    stars: 1,
    image: battleship,
    github: "https://github.com/javierhwulin/Battleship-Game",
    demo: "#",
  },
  {
    id: 2,
    title: "Iris Classifier Microservice",
    description: "Real-time inference API serving a PyTorch model for iris-species classification; fully containerised and CI-tested.",
    tech: ["FastAPI", "PyTorch", "Docker", "CI/CD"],
    status: "featured",
    stars: 1,
    image: iris,
    github: "https://github.com/javierhwulin/Iris-Classifier-Microservice",
    demo: "#",
  },
  {
    id: 3,
    title: "Sticker Sales Forecasting",
    description: "End-to-end forecasting pipeline across 6 countries & 7 years, reaching a 4.8 % MAPE via feature engineering and Optuna tuning.",
    tech: ["Python", "Pandas", "Optuna", "XGBoost"],
    status: "featured",
    stars: 1,
    image: sales,
    github: "https://github.com/javierhwulin/Forecasting-Sticker-Sales-with-Time-Series-Analysis-and-Machine-Learning",
    demo: "#",
  },
  {
    id: 4,
    title: "CookBookApp",
    description: "Android recipe manager with offline caching, secure multi-device sync and MVVM clean architecture.",
    tech: ["Java", "Firebase", "MVVM"],
    status: "featured",
    stars: 1,
    image: cookbook,
    github: "https://github.com/javierhwulin/CookBookApp",
    demo: "#",
  },
  {
    id: 5,
    title: "imUB — Movie & Series Manager",
    description: "Desktop app to catalogue and track media libraries with optimised SQLite DAO layer (<150 ms queries).",
    tech: ["Java", "JavaFX", "SQLite", "MVVM"],
    status: "featured",
    stars: 1,
    image: movies,
    github: "https://github.com/javierhwulin/IMUB",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-xl bg-white">
      <div className="container mx-auto px-lg max-w-6xl">
        <div className="text-center mb-xl animate-fade-in">
          <h2 className="font-display text-h2 font-bold text-primary mb-md text-balance">Featured Projects</h2>
          <p className="font-body text-deep-brown/70 max-w-2xl mx-xl md:mx-auto text-balance">
            Open-source projects and production systems showcasing software engineering expertise
          </p>
        </div>

        <div className="stagger-animation grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mx-xxl xl:mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-card text-card-foreground rounded-2xl overflow-hidden shadow-2 hover:shadow-4 transition-all duration-300 hover-lift cursor-pointer group"
              onClick={() => window.open(project.demo, "_blank")}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={typeof project.image === 'string' ? project.image : project.image.src}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-lg">
                <div className="flex items-center justify-between mb-md">
                  <h3 className="font-display text-h4 font-bold text-primary">{project.title}</h3>
                  <div className="flex items-center gap-1 text-small text-muted-foreground">
                    <Star size={14} />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <p className="font-body text-muted-foreground mb-md line-clamp-3 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-sm mb-md">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-sm py-xs bg-primary/10 text-primary rounded text-small font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div 
                className="absolute top-md right-md w-8 h-8 bg-black/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-lift cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, "_blank");
                }}
              >
                <Github className="text-white" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
