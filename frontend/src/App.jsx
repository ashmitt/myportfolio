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
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);

  useEffect(() => {
    // Anime.js complex timeline animation for hero abstract shapes
    animate(shape1Ref.current, {
      rotate: '1turn',
      scale: [1, 1.1, 1],
      ease: 'linear',
      duration: 12000,
      loop: true,
    });

    animate(shape2Ref.current, {
      rotate: '-1turn',
      scale: [1, 0.9, 1],
      opacity: [1, 0.6, 1],
      ease: 'linear',
      duration: 18000,
      loop: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-background">
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
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20 px-6">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Building Scalable <br />
                <span className="text-primary drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]">Digital Systems</span>
              </h1>
              <p className="text-xl text-text-secondary mb-10 max-w-lg font-medium">
                MERN Stack Developer | Startup-Focused Engineer
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects">
                  <Button variant="primary">View Projects</Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary">Contact Me</Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square flex items-center justify-center hidden md:flex"
            >
              {/* Abstract element powered by Anime.js */}
              <div className="absolute w-full h-full max-w-[500px] max-h-[500px] rounded-full bg-primary/10 blur-[120px]" />
              <div ref={shape1Ref} className="w-[300px] h-[300px] border border-primary/20 rounded-full" />
              <div ref={shape2Ref} className="absolute w-[220px] h-[220px] border border-primary/40 border-dashed rounded-full" />
            </motion.div>
          </div>
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
