import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">À Propos</h2>
          <div className="h-1 w-20 bg-brand-accent mx-auto"></div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="space-y-6">
               <div className="aspect-[3/4] rounded-lg overflow-hidden bg-slate-800">
                  <img 
                    src="https://picsum.photos/id/1062/400/533" 
                    alt="Portrait" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
               </div>
               <div className="flex justify-between text-center">
                 <div>
                   <span className="block text-3xl font-serif text-brand-accent font-bold">5+</span>
                   <span className="text-xs uppercase tracking-wider text-slate-500">Années d'exp.</span>
                 </div>
                 <div>
                   <span className="block text-3xl font-serif text-brand-accent font-bold">40+</span>
                   <span className="text-xs uppercase tracking-wider text-slate-500">Projets</span>
                 </div>
                 <div>
                   <span className="block text-3xl font-serif text-brand-accent font-bold">100%</span>
                   <span className="text-xs uppercase tracking-wider text-slate-500">Satisfaction</span>
                 </div>
               </div>
            </div>

            <div className="text-slate-300 space-y-6 text-lg font-light leading-relaxed">
              <h3 className="text-2xl text-white font-medium">
                Développeur passionné par l'esthétique et la performance.
              </h3>
              <p>
                Mon parcours a débuté par une fascination pour le design et la logique. Aujourd'hui, je combine ces deux mondes pour créer des interfaces web qui ne sont pas seulement fonctionnelles, mais mémorables.
              </p>
              <p>
                Spécialisé dans l'écosystème <strong>JavaScript (React, Node)</strong> et <strong>PHP (Laravel)</strong>, je m'efforce de construire des architectures robustes tout en soignant chaque pixel de l'interface utilisateur.
              </p>
              <p>
                Que ce soit pour une refonte complète de site e-commerce ou la création d'une application SaaS complexe, mon approche reste la même : <em>écouter, comprendre, et innover</em>.
              </p>
              
              <div className="pt-6">
                <a href="#contact" className="inline-flex items-center text-brand-accent hover:text-white transition-colors font-medium group">
                  Télécharger mon CV 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;