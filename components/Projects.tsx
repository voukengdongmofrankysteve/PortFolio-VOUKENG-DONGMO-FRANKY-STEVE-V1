import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax Setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Moves the image vertically as the user scrolls (Depth effect)
  const scrollY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // Mouse Parallax Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth mouse parallax movement
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  // Map mouse position to image offset
  const mouseX = useTransform(springX, [-300, 300], [-10, 10]);
  const mouseY = useTransform(springY, [-300, 300], [-10, 10]);

  // Combine scroll and mouse effects for Y axis
  const combinedY = useTransform([scrollY, mouseY], ([s, m]) => s + m);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Animation variants for overlay content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div
        ref={ref}
        className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-xl bg-slate-900"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover="hover"
        initial="hidden"
      >
        {/* Parallax Image */}
        <motion.div 
          className="w-full h-full overflow-hidden"
          style={{ x: mouseX, y: combinedY }}
        >
          <motion.img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
            variants={{
              hidden: { scale: 1.1 }, // Start slightly zoomed in for parallax buffer
              hover: { scale: 1.2 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />

        {/* Hover Backdrop & Content */}
        <motion.div 
          className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm flex flex-col justify-center items-center p-8 text-center"
          variants={{
            hidden: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div variants={containerVariants} className="w-full max-w-sm">
             <motion.span 
               variants={contentVariants}
               className="block text-brand-accent text-xs font-bold uppercase tracking-widest mb-3"
             >
               {project.role}
             </motion.span>
             
             <motion.h3 
               variants={contentVariants}
               className="text-3xl font-serif font-bold text-white mb-4"
             >
               {project.title}
             </motion.h3>
             
             <motion.p 
               variants={contentVariants}
               className="text-slate-300 text-sm mb-8 leading-relaxed"
             >
               {project.description}
             </motion.p>

             <motion.div 
               variants={contentVariants}
               className="flex justify-center gap-4"
             >
               {project.link && (
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center gap-2 px-6 py-2.5 bg-brand-accent text-brand-dark rounded-full font-semibold hover:bg-white transition-colors shadow-lg hover:shadow-brand-accent/25"
                 >
                   <span>Visiter</span>
                   <ExternalLink size={16} />
                 </a>
               )}
               <a 
                 href="#" 
                 className="flex items-center gap-2 px-6 py-2.5 border border-slate-600 text-white rounded-full font-medium hover:bg-white hover:text-brand-dark transition-colors"
               >
                 <span>Code</span>
                 <Github size={16} />
               </a>
             </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.7, ease: "easeOut" }}
           >
             <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Sélection de Projets</h2>
             <div className="h-1 w-24 bg-brand-accent"></div>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="hidden md:block text-brand-muted max-w-xs text-right"
           >
             Une collection de travaux récents, du e-commerce aux applications métier.
           </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-700 hover:border-brand-accent text-slate-300 hover:text-white rounded transition-colors duration-300">
            Voir tous les projets sur GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;