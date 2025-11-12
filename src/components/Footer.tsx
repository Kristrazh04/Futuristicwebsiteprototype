import { Zap, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                TechFuture
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Making the future accessible today.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-3">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/60 hover:text-white text-sm">
                Features
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm">
                Pricing
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm">
                About
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-white mb-3">Legal Stuff</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/60 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 TechFuture. Made with ❤️
          </p>
          
          {/* Social */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition"
            >
              <Twitter className="w-4 h-4 text-white/60" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition"
            >
              <Github className="w-4 h-4 text-white/60" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition"
            >
              <Mail className="w-4 h-4 text-white/60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}