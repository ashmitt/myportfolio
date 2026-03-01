import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate } from 'animejs';
import Button from './components/Button';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import PrinciplesSection from './components/PrinciplesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const bgCanvasRef = useRef(null);

  useEffect(() => {
    // Neural Network / Connection Animation
    const dots = [];
    const dotCount = 40;
    const canvas = bgCanvasRef.current;
    if (!canvas) return;

    // Simple particle system with Anime.js
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1
      });
    }

    animate(dots, {
      x: () => Math.random() * 100,
      y: () => Math.random() * 100,
      duration: () => Math.random() * 10000 + 10000,
      delay: () => Math.random() * 2000,
      easing: 'linear',
      loop: true,
      alternate: true,
      update: () => {
        // React state-free canvas-like updates or just mapping to divs
      }
    });

  }, []);

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-background overflow-x-hidden">
      <header className="p-6 fixed top-0 w-full z-50 backdrop-blur-md border-b border-text-secondary/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0 })}>Ashmit Rai</span>
          <div className="space-x-8 text-sm text-text-secondary hidden md:block">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Centered Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
          {/* Abstract background particles */}
          <div className="absolute inset-0 z-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
                animate={{
                  x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto w-full text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                  Building Scalable <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#00E5FF] border-b-4 border-primary/20 drop-shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                    Digital Systems
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto font-medium tracking-tight"
              >
                MERN Stack Developer | Startup-Focused Engineer
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                <a href="#projects">
                  <Button variant="primary" className="px-10 py-4 text-lg">Explore Work</Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="px-10 py-4 text-lg">Let's Connect</Button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom pulse indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </section>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PrinciplesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
