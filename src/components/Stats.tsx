import { TrendingUp, Users, Zap, Shield } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Growth Rate",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Active Users",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Performance",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Secure",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
