import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Zap } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                TechFuture
              </span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-white/70 hover:text-white">
                Home
              </a>
              <a href="#features" className="text-white/70 hover:text-white">
                Features
              </a>
              <a href="#about" className="text-white/70 hover:text-white">
                About
              </a>
            </div>

            {/* Button */}
            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                Sign Up
              </Button>
            </div>

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <a href="#home" className="text-white/70">
                  Home
                </a>
                <a href="#features" className="text-white/70">
                  Features
                </a>
                <a href="#about" className="text-white/70">
                  About
                </a>
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0 w-full mt-2">
                  Sign Up
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}