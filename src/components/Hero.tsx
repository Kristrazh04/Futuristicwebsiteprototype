import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div className="space-y-6">
          <div className="inline-block">
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-1.5">
              <span className="text-purple-300">✨ The Future is Now</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Today
            </span>
          </h1>

          <p className="text-white/60 max-w-lg">
            Experience the next generation of digital technology. Create, innovate, and transform 
            your ideas into reality with our platform.
          </p>

          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div>
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                1000+
              </div>
              <p className="text-white/40 text-sm">Projects</p>
            </div>
            <div>
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                50K
              </div>
              <p className="text-white/40 text-sm">Users</p>
            </div>
            <div>
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-white/40 text-sm">Support</p>
            </div>
          </div>
        </div>

        {/* Right side - image */}
        <div className="relative hidden lg:block">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI5NTA3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Futuristic technology"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}