import { Cpu, Layers, Lock, Sparkles, Workflow, Rocket } from "lucide-react";

export function Features() {
  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2">
              <span className="text-purple-300">What We Offer</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Cool Features
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              You'll Love
            </span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-2">AI-Powered</h3>
            <p className="text-white/60 text-sm">
              Smart algorithms that actually work and adapt to what you need
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-2">Modular</h3>
            <p className="text-white/60 text-sm">
              Build it your way with flexible components
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-2">Super Secure</h3>
            <p className="text-white/60 text-sm">
              Your data is protected with top-tier security
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-2">Automation</h3>
            <p className="text-white/60 text-sm">
              Let the system do the boring stuff for you
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Workflow className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-2">Easy Integration</h3>
            <p className="text-white/60 text-sm">
              Works with all the tools you already use
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-2">Lightning Fast</h3>
            <p className="text-white/60 text-sm">
              Seriously fast performance, no waiting around
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h3>
          <p className="text-white/60 mb-6">
            We built this platform to make your life easier. Everything here is designed 
            to be simple, powerful, and actually useful for real projects.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white/70">Real-time updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white/70">Analytics dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white/70">Support when you need it</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}