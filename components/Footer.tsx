import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 flex items-center justify-center gap-2 text-sm">
          © {new Date().getFullYear()} Voukeng Dongmo Franky Steve. Fait avec 
          <Heart size={14} className="text-red-500 fill-current" /> et React.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;