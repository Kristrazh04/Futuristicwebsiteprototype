import { TrendingUp, Users, Zap, Shield } from "lucide-react";

export function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {/* Stat 1 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
            <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              300%
            </div>
            <p className="text-white/60 text-sm">Growth</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
            <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              50K+
            </div>
            <p className="text-white/60 text-sm">Users</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
            <div className="w-11 h-11 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Fast
            </div>
            <p className="text-white/60 text-sm">Speed</p>
          </div>

          {/* Stat 4 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
            <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Secure
            </div>
            <p className="text-white/60 text-sm">Protected</p>
          </div>
        </div>
      </div>
    </section>
  );
}