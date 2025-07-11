import { Mail, MessageCircle, Calendar, MapPin, Clock, Shield, ExternalLink, Send } from "lucide-react"

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-rice-paper via-rice-paper to-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 texture-overlay opacity-30"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-success/10 rounded-full blur-3xl"></div>
      
      {/* Hero Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-lg py-xl">
          <div className="text-center mb-xl animate-fade-in">
            <div className="inline-block px-lg py-sm bg-primary/10 text-primary rounded-full font-display font-medium mb-md">
              <MessageCircle className="w-4 h-4 mr-2 inline" />
              Let's Connect
            </div>

            <h1 className="font-display text-h1 font-bold text-primary mb-md">Ready to Collaborate?</h1>

            <p className="font-body text-balance text-deep-brown/70 max-w-2xl mx-auto">
              I'm always excited to discuss innovative software projects, research opportunities, 
              and potential collaborations. Let's build something amazing together.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-xl max-w-7xl mx-auto stagger-animation">
            {/* Contact Information - Left Side (2 columns) */}
            <div className="lg:col-span-2 space-y-lg">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-3 border border-white/30 overflow-hidden">
                <div className="p-lg border-b border-soft-gray/20">
                  <h3 className="font-display text-h3 font-semibold text-primary">Get in Touch</h3>
                  <p className="font-body text-small text-deep-brown/70 mt-xs">Choose your preferred way to connect with me</p>
                </div>
                <div className="p-lg space-y-md">
                  {/* Email */}
                  <a 
                    href="mailto:javier.hwulin.devtech@gmail.com"
                    className="group flex items-center space-x-md p-md rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover-lift"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-xs">
                        <span className="font-display font-semibold text-primary">Email</span>
                        <ExternalLink className="w-3 h-3 text-primary/60 group-hover:text-primary transition-colors" />
                      </div>
                      <p className="font-body text-small text-deep-brown font-medium">javier.hwulin.devtech@gmail.com</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/javier-hengda-wu-lin-51a98a189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-md p-md rounded-xl bg-info/10 hover:bg-info/20 transition-all duration-300 hover-lift"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-info rounded-xl flex items-center justify-center text-on-info group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-xs">
                        <span className="font-display font-semibold text-info">LinkedIn</span>
                        <ExternalLink className="w-3 h-3 text-info/60 group-hover:text-info transition-colors" />
                      </div>
                      <p className="font-body text-small text-deep-brown font-medium">linkedin.com/in/javier-hengda-wu-lin-51a98a189/</p>
                    </div>
                  </a>

                  {/* Schedule Call */}
                  <a 
                    href="https://calendly.com/javierhwulin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-md p-md rounded-xl bg-success/10 hover:bg-success/20 transition-all duration-300 hover-lift"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center text-on-success group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-xs">
                        <span className="font-display font-semibold text-success">Schedule Call</span>
                        <ExternalLink className="w-3 h-3 text-success/60 group-hover:text-success transition-colors" />
                      </div>
                      <p className="font-body text-small text-deep-brown font-medium">calendly.com/javierhwulin</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center space-x-md p-md rounded-xl bg-warning/10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-warning rounded-xl flex items-center justify-center text-on-warning">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="font-display font-semibold text-warning">Location</span>
                      <p className="font-body text-small text-deep-brown font-medium">Barcelona, Spain</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="bg-gradient-to-r from-primary to-deep-brown text-primary-foreground rounded-2xl shadow-3 overflow-hidden">
                <div className="p-lg">
                  <h4 className="font-display font-semibold text-h4 mb-md">Quick Response</h4>
                  <div className="space-y-sm">
                    <div className="flex items-center space-x-sm">
                      <Clock className="w-4 h-4 text-success/80" />
                      <span className="font-body text-small">24h response time</span>
                    </div>
                    <div className="flex items-center space-x-sm">
                      <Shield className="w-4 h-4 text-success/80" />
                      <span className="font-body text-small">100% confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side (3 columns) */}
            <div className="lg:col-span-3">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-4 border border-white/30 relative overflow-hidden h-full">
                {/* Form header with gradient accent */}
                <div className="relative p-lg border-b border-soft-gray/20">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-success to-primary"></div>
                  <h3 className="font-display text-h3 font-semibold text-primary pt-sm mb-sm">Send a Message</h3>
                  <p className="font-body text-deep-brown/70">
                    Tell me about your project and I'll get back to you within 24 hours.
                  </p>
                </div>
                
                <div className="p-lg">
                  <form className="space-y-lg max-w-2xl mx-auto">
                    {/* Name and Email Grid */}
                    <div className="grid md:grid-cols-2 gap-xl">
                      <div className="space-y-sm">
                        <label className="block font-body text-small font-medium text-primary mb-xs">Name</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full px-md py-sm h-12 bg-white/50 border border-soft-gray/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300 font-body placeholder:text-deep-brown/50"
                        />
                      </div>
                      <div className="space-y-sm">
                        <label className="block font-body text-small font-medium text-primary mb-xs">Email</label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-md py-sm h-12 bg-white/50 border border-soft-gray/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300 font-body placeholder:text-deep-brown/50"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-sm">
                      <label className="block font-body text-small font-medium text-primary mb-xs">Subject</label>
                      <input
                        type="text"
                        placeholder="What's your project about?"
                        className="w-full px-md py-sm h-12 bg-white/50 border border-soft-gray/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300 font-body placeholder:text-deep-brown/50"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-sm">
                      <label className="block font-body text-small font-medium text-primary mb-xs">Message</label>
                      <textarea
                        rows={6}
                        placeholder="Tell me about your project, timeline, and how we can work together..."
                        className="w-full px-md py-sm bg-white/50 border border-soft-gray/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300 resize-none font-body placeholder:text-deep-brown/50"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative w-full flex items-center justify-center gap-sm px-lg py-md h-12 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl font-display font-semibold hover-lift focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 overflow-hidden shadow-2 hover:shadow-3"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-success opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="relative z-10">Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
