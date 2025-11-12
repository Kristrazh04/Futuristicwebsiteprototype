import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Stats />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
