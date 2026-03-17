import { motion } from "framer-motion";
import { heroStats } from "@/data/content";
import StatCard from "@/components/ui/StatCard";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-primary">
    {/* Pattern overlay */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
      backgroundSize: "32px 32px",
    }} />

    <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Climate-Tech & Sustainability Enterprise
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Driving Climate Impact Through{" "}
          <span className="text-accent">Regenerative Innovation</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Pioneering carbon markets, regenerative agriculture, and nature-based solutions
          for a sustainable, climate-resilient future.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#services"
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Floating stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
        {heroStats.map((stat, i) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} light index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
