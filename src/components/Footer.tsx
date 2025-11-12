import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Building the future of digital experiences with cutting-edge technology.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Features
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                API Reference
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                About
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Blog
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Careers
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Security
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Nexus. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <Twitter className="w-5 h-5 text-white/60" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <Github className="w-5 h-5 text-white/60" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-white/60" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 text-white/60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
