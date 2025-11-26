import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = 'Le nom est requis.';
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = "L'email est requis.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Format d'email invalide.";
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Le message est requis.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
       <div className="container mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.7, ease: "easeOut" }}
           className="text-center mb-16"
         >
           <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Contactez-moi</h2>
           <p className="text-brand-muted">Un projet en tête ? Discutons-en.</p>
         </motion.div>

         <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-serif text-white mb-6">Parlons de votre prochaine réussite.</h3>
              <p className="text-slate-400 leading-relaxed">
                Je suis toujours ouvert aux nouvelles opportunités, que ce soit pour une mission freelance, un partenariat ou simplement pour échanger sur la tech.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-dark rounded-lg border border-slate-800 text-brand-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:contact@franky-steve.dev" className="text-slate-400 hover:text-brand-accent transition-colors">contact@franky-steve.dev</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-dark rounded-lg border border-slate-800 text-brand-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Téléphone</h4>
                    <a href="tel:+3300000000" className="text-slate-400 hover:text-brand-accent transition-colors">+33 6 00 00 00 00</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-dark rounded-lg border border-slate-800 text-brand-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Localisation</h4>
                    <p className="text-slate-400">Disponible à distance & dans le monde entier.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-dark p-8 rounded-2xl border border-slate-800 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nom complet</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-slate-700 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent'
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <div className="absolute right-3 top-3.5 text-red-500 pointer-events-none">
                        <AlertCircle size={18} />
                      </div>
                    )}
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-slate-700 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent'
                      }`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-3.5 text-red-500 pointer-events-none">
                        <AlertCircle size={18} />
                      </div>
                    )}
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <div className="relative">
                    <textarea 
                      id="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-slate-700 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent'
                      }`}
                      placeholder="Dites-moi tout..."
                    ></textarea>
                  </div>
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                    submitted 
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-brand-accent text-brand-dark hover:bg-emerald-300'
                  } ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : submitted ? (
                    <>Message envoyé <CheckCircle size={18} /></>
                  ) : (
                    <>Envoyer le message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>
         </div>
       </div>
    </section>
  );
};

export default Contact;