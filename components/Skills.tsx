import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Compétences & Expertise</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">Une boîte à outils technique complète pour donner vie à vos projets numériques.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="bg-brand-dark p-6 rounded-lg border border-slate-800 hover:border-brand-accent/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-medium text-white mb-6 border-b border-slate-800 pb-2 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                 {category}
              </h3>
              <ul className="space-y-4">
                {SKILLS.filter(s => s.category === category).map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <li key={index} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                      {Icon && <Icon size={18} className="text-brand-accent" />}
                      <span>{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;