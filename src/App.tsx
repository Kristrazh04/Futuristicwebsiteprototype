import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 opacity-20 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1731311982559-374855a21f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaG5vbG9neSUyMHBhdHRlcm58ZW58MXx8fHwxNzYyODg3MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')"
        }}
      />
      {/* Cool gradient background - looks pretty neat! */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Stats />
        <Features />
        {/* TODO: maybe add a contact section later? */}
        <Footer />
      </div>
    </div>
  );
}