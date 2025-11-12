import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="text-purple-300">✨ Welcome to the Future</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Next Generation
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h1>

          <p className="text-white/60 text-lg max-w-xl">
            Harness the power of cutting-edge technology to transform your vision into reality. 
            Experience innovation like never before with our futuristic platform.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 group">
              Explore Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm group">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                99.9%
              </div>
              <p className="text-white/40 text-sm">Uptime</p>
            </div>
            <div>
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                50K+
              </div>
              <p className="text-white/40 text-sm">Users</p>
            </div>
            <div>
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                4.9/5
              </div>
              <p className="text-white/40 text-sm">Rating</p>
            </div>
          </div>
        </div>

        {/* Right content - Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden p-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI5NTA3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Futuristic technology"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
