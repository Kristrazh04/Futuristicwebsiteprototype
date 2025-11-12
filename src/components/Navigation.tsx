import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Zap } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Glassmorphism container */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">
                Home
              </a>
              <a href="#features" className="text-white/80 hover:text-white transition-colors">
                Features
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#features" className="text-white/80 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About
                </a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
