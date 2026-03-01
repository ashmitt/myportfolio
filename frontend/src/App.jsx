import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-background">
      <header className="p-6 fixed top-0 w-full z-50 backdrop-blur-md border-b border-text-secondary/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter">Ashmit Rai</span>
          <div className="space-x-8 text-sm text-text-secondary">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
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
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[1.1] mb-6">
                Building Scalable <br />
                <span className="text-primary">Digital Systems</span>
              </h1>
              <p className="text-xl text-text-secondary mb-10 max-w-lg">
                MERN Stack Developer | Startup-Focused Engineer
              </p>
              <div className="flex gap-4">
                <a href="#projects" className="px-8 py-4 bg-primary text-background font-semibold rounded hover:bg-primary-hover transition-colors">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-4 border border-text-secondary/30 rounded hover:border-primary hover:text-primary transition-colors">
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Abstract element */}
              <div className="absolute w-full h-full max-w-[400px] max-h-[400px] rounded-full bg-primary/10 blur-[100px]" />
              <div className="w-64 h-64 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-48 h-48 border border-primary/50 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
