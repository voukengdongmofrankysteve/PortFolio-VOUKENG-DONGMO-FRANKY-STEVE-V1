import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-brand-accent"></span>
            <span className="text-brand-accent font-medium tracking-widest text-sm uppercase">Full Stack Developer</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Créateur de solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
              Web & Mobile
            </span>
          </h1>
          
          <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-lg mb-8">
            Je suis Voukeng Dongmo Franky Steve. Je transforme des idées complexes en expériences digitales élégantes, performantes et intuitives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3.5 bg-brand-accent text-brand-dark font-semibold rounded hover:bg-emerald-300 transition-colors text-center"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 border border-slate-700 text-white font-medium rounded hover:bg-white/5 transition-colors text-center"
            >
              Me contacter
            </a>
          </div>

          <div className="flex gap-6 mt-12">
             <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
             <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
             <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>

        {/* Visual / Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
             <div className="absolute inset-0 bg-brand-accent/20 rounded-2xl transform rotate-6 translate-x-4 translate-y-4"></div>
             <img 
               src="https://picsum.photos/id/1005/600/700" 
               alt="Franky Steve Workspace" 
               className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full max-w-md h-[500px]"
             />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-brand-accent cursor-pointer"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;