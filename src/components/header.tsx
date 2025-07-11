"use client"

import { useState } from "react"
import { Menu, X, Brain, Github, Linkedin, Mail } from "lucide-react"
import { XLogo } from "./x-logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-soft-gray/20 shadow-1 w-full">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-rice-paper/20 to-white"></div>
      
      <div className="container mx-auto px-lg max-w-6xl relative">
        <div className="flex items-center justify-between h-18">
          {/* Logo and Name - Minimalist */}
          <div className="flex items-center gap-md">
            <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center shadow-1">
              <Brain className="text-primary-foreground" size={20} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-display text-lg font-semibold text-primary leading-none">Javier Hengda</h1>
              <p className="font-body text-sm text-deep-brown/70 leading-none -mt-1">Computer Engineer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex pr-12 items-center space-x-lg">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="no-underline font-body text-black hover:text-primary transition-colors duration-200 font-medium py-sm px-md rounded-l relative group outline-none focus:outline-none"
              >
                {item}
                <span className="absolute inset-x-md -bottom-xs h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden xl:flex items-center gap-sm">
            {[
              { icon: Github, href: "https://github.com/javierhwulin", label: "GitHub", hoverClass: "hover:bg-black hover:text-white" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/javier-hengda-wu-lin-51a98a189/", label: "LinkedIn", hoverClass: "hover:bg-blue-600 hover:text-white" },
              { icon: () => <XLogo size={16} />, href: "https://x.com/hengda_wu", label: "Twitter", hoverClass: "hover:bg-black hover:text-white" },
              { icon: Mail, href: "mailto:javier.hwulin.devtech@gmail.com", label: "Email", hoverClass: "hover:bg-white hover:text-gray-800" },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-soft-gray/10 rounded-lg flex items-center justify-center text-deep-brown ${social.hoverClass} transition-all duration-200 shadow-1 border border-soft-gray/20 outline-none focus:outline-none focus:ring-2 focus:ring-primary/30`}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden p-sm mr-xxl rounded-lg hover:bg-primary/10 transition-colors duration-200 border border-soft-gray/20 bg-white/80 shadow-1 outline-none focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {isMenuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-deep-brown" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex lg:hidden py-md border-t border-soft-gray/20 animate-slide-up bg-white/95 backdrop-blur-md shadow-1 mx-[-2rem] mt-xs">
            <div className="px-lg mr-xxl w-full">
              <nav className="flex flex-col space-y-xs mb-md">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="no-underline font-body text-black hover:text-primary transition-colors duration-200 font-medium py-md px-md rounded-lg hover:bg-primary/5 outline-none focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Mobile Social Links */}
              <div className="flex items-center justify-center gap-sm">
                {[
                  { icon: Github, href: "https://github.com/javierhwulin", label: "GitHub", hoverClass: "hover:bg-black hover:text-white" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/javier-hengda-wu-lin-51a98a189/", label: "LinkedIn", hoverClass: "hover:bg-blue-600 hover:text-white" },
                  { icon: Mail, href: "mailto:javier.hwulin.devtech@gmail.com", label: "Email", hoverClass: "hover:bg-gray-800 hover:text-white" },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 bg-soft-gray/10 rounded-lg flex items-center justify-center text-deep-brown ${social.hoverClass} transition-all duration-200 shadow-1 border border-soft-gray/20 outline-none focus:outline-none`}
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
