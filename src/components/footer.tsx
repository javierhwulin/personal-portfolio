"use client"

import { Brain, Mail, Github, Linkedin, Heart, ArrowUp } from "lucide-react"
import { XLogo } from "./x-logo"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-deep-brown text-rice-paper py-xl relative overflow-hidden">
      <div className="container mx-auto px-lg max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl mb-xl">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-11 h-11 bg-rice-paper/20 rounded-lg flex items-center justify-center shadow-1">
                <Brain className="text-rice-paper" size={20} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-lg font-semibold text-rice-paper leading-none">Javier Hengda</h3>
                <p className="font-body text-sm text-rice-paper/80 leading-none -mt-1">Computer Engineer</p>
              </div>
            </div>

            <p className="font-body text-rice-paper/80 leading-relaxed mb-lg w-full text-balance">
              Passionate about building intelligent systems that solve real-world problems.
              Specializing in software development, algorithms, and system design.
              Interested in AI, machine learning, and computer vision.
            </p>

            <div className="flex space-x-sm">
              {[
                { icon: Mail, href: "mailto:javier.hwulin.devtech@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/javierhwulin", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/javier-hengda-wu-lin-51a98a189/", label: "LinkedIn" },
                { icon: () => <XLogo size={18} />, href: "https://x.com/hengda_wu", label: "Twitter" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-rice-paper/10 rounded-2xl flex items-center justify-center hover:bg-rice-paper/20 transition-all duration-300 border border-rice-paper/20 hover:border-rice-paper/40 text-rice-paper hover-lift"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="font-display font-bold mb-lg text-h4 text-rice-paper text-left">Quick Links</h4>
            <ul className="space-y-md list-none text-left p-0 m-0">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item} className="text-left">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="no-underline font-body text-rice-paper/80 hover:text-rice-paper transition-all duration-300 hover:translate-x-1 inline-block text-left"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Projects */}
          <div>
            <h4 className="font-display font-bold mb-lg text-h4 text-rice-paper">Latest Projects</h4>
            <div className="space-y-xs">
              {[
                { title: "Battleship Game", status: "Open-source" },
                { title: "Iris Classifier Microservice", status: "Open-source" },
                { title: "Forecasting Sticker Sales", status: "Open-source" },
              ].map((project, index) => (
                <div key={index} className="group cursor-pointer hover-lift">
                  <div className="flex items-center justify-between">
                    <h5 className="font-body text-rice-paper group-hover:text-rice-paper/80 transition-colors duration-300 font-medium text-small">
                      {project.title}
                    </h5>
                    <span className="font-body text-rice-paper text-caption px-sm py-xs bg-rice-paper/20 rounded-lg border border-rice-paper/30">
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-rice-paper/20 pt-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-sm">
            <p className="font-body text-rice-paper/60 text-small">
              © 2025 Javier Hengda. All rights reserved. Built with <Heart className="inline w-4 h-4 text-rice-paper/60 mx-1" />{" "}
              and cutting-edge AI.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-md px-lg py-md bg-rice-paper/10 text-rice-paper/80 hover:text-rice-paper rounded-lg hover:bg-rice-paper/20 transition-all duration-300 hover-lift focus:outline-none focus:ring-2 focus:ring-rice-paper/30 focus:ring-offset-2 focus:ring-offset-deep-brown shadow-2 border border-rice-paper/20 hover:border-rice-paper/40"
            >
              <span className="font-body text-small font-medium">Back to top</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
