import { Cpu, Layers, Lock, Sparkles, Workflow, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Advanced machine learning algorithms that adapt to your needs",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Layers,
      title: "Modular Design",
      description: "Flexible architecture that scales with your business",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Lock,
      title: "Secure by Default",
      description: "Enterprise-grade security protecting your data 24/7",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Smart Automation",
      description: "Intelligent workflows that save time and boost productivity",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Connect with your favorite tools and platforms effortlessly",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Optimized performance for instant results every time",
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="text-purple-300">Features</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Solutions
            </span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Feature showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Experience the Future Today
              </span>
            </h3>
            <p className="text-white/60">
              Our platform combines cutting-edge technology with intuitive design to deliver 
              an unparalleled user experience. Every feature is crafted with precision and 
              purpose, ensuring you have the tools you need to succeed.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80">Real-time data synchronization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80">Advanced analytics dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80">24/7 priority support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden p-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668242372382-9e6282c63578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYyOTU5MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Abstract digital visualization"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
