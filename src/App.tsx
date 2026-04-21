/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Star,
  UtensilsCrossed,
  GlassWater,
  Coffee,
  ArrowRight,
  Plus,
  Check
} from 'lucide-react';
import { cn } from './lib/utils';
import { 
  MENU_ITEMS, 
  TESTIMONIALS, 
  MenuItem, 
  UI_STRINGS, 
  EVENTS, 
  RestaurantEvent 
} from './constants';

const LanguageContext = React.createContext<{
  lang: 'es' | 'en';
  setLang: (l: 'es' | 'en') => void;
  t: typeof UI_STRINGS['es'];
}>({ lang: 'es', setLang: () => {}, t: UI_STRINGS['es'] });

const useTranslation = () => React.useContext(LanguageContext);

// --- Background Decorations ---

const BackgroundDecor = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-brand-bg">
    <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]"></div>
    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-brand-accent/5 rounded-full blur-[100px]"></div>
    <div className="absolute left-[5%] top-[15%] opacity-[0.02] hidden lg:block select-none">
      <span className="text-[180px] font-serif font-black leading-none rotate-90 inline-block origin-center whitespace-nowrap tracking-tighter text-brand-text">GOURMET</span>
    </div>
  </div>
);

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.storyTitle + ' ' + t.storySubtitle, href: '#story' },
    { name: 'Chef', href: '#chef' },
    { name: t.menuCarta, href: '#menu' },
    { name: t.experienceTitle, href: '#experience' },
    { name: 'Eventos', href: '#events' },
  ];

  return (
    <nav className={cn(
      "fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl px-6 py-4 md:px-12 mx-auto max-w-7xl",
      scrolled 
      ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-lg shadow-slate-200/30" 
      : "bg-transparent"
    )}>
      <div className="flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tight text-brand-text flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white text-xs font-black italic">S</div>
          Social
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center text-[11px] tracking-widest uppercase font-bold text-brand-muted">
          <div className="flex items-center gap-2 bg-brand-surface p-1 rounded-lg border border-slate-200 mr-4">
            <button 
              onClick={() => setLang('es')}
              className={cn("px-3 py-1 rounded-md transition-all", lang === 'es' ? "bg-white shadow-sm text-brand-text" : "hover:text-brand-accent")}
            >ES</button>
            <button 
              onClick={() => setLang('en')}
              className={cn("px-3 py-1 rounded-md transition-all", lang === 'en' ? "bg-white shadow-sm text-brand-text" : "hover:text-brand-accent")}
            >EN</button>
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservations" 
            className="bg-brand-text text-white px-6 py-3 rounded-xl hover:bg-brand-accent transition-all shadow-md shadow-brand-text/10"
          >
            {t.reserveBtn}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <div className="flex items-center gap-1 bg-brand-surface p-1 rounded-lg border border-slate-200">
            <button onClick={() => setLang('es')} className={cn("px-2 py-0.5 rounded-md text-[10px]", lang === 'es' ? "bg-white shadow-sm" : "")}>ES</button>
            <button onClick={() => setLang('en')} className={cn("px-2 py-0.5 rounded-md text-[10px]", lang === 'en' ? "bg-white shadow-sm" : "")}>EN</button>
          </div>
          <button className="text-brand-text" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-3xl p-8 rounded-2xl border border-slate-200 shadow-2xl md:hidden flex flex-col gap-6 text-center"
          >
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-widest uppercase font-black text-brand-muted hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#reservations" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-accent text-white py-4 rounded-xl text-xs tracking-widest uppercase font-black shadow-lg"
            >
              {t.reserveBtn.toUpperCase()}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, align = "center" }: { children: React.ReactNode, subtitle?: string, align?: "center" | "left" }) => (
  <div className={cn("mb-20", align === "center" ? "text-center" : "text-left")}>
    {subtitle && (
      <span className="text-[10px] uppercase tracking-[0.5em] font-black mb-4 block text-brand-accent bg-brand-accent/10 w-fit px-4 py-1 rounded-full mx-auto md:mx-0">
        {subtitle}
      </span>
    )}
    <h2 className={cn("text-5xl md:text-7xl font-serif leading-[1.1] text-brand-text tracking-tight", align === "center" ? "mx-auto" : "")}>
      {children}
    </h2>
  </div>
);

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-surface border border-slate-200 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">{t.openedNow}</span>
            </div>
            <h1 className="text-[64px] md:text-[90px] font-serif leading-[0.95] text-brand-text tracking-tighter mb-8">
              {t.heroTitle} <br/>
              <span className="italic text-brand-accent">{t.heroSubtitle}</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="#reservations" className="bg-brand-text text-white py-6 px-12 rounded-2xl text-xs font-black tracking-widest uppercase hover:bg-brand-accent transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-1">
                {t.reserveBtn}
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User 1" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User 2" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User 3" referrerPolicy="no-referrer" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                  <span className="text-brand-text font-black">+4k</span> {t.reviewsCount.split('+4k ')[1]}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200"
            >
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Plato peruano" referrerPolicy="no-referrer" />
            </motion.div>
            <div className="flex flex-col gap-4 pt-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="rounded-[40px] overflow-hidden aspect-square shadow-2xl shadow-slate-200"
              >
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Interior restaurante" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-brand-accent p-8 rounded-[40px] text-white shadow-xl shadow-brand-accent/20"
              >
                <UtensilsCrossed size={32} className="mb-4 opacity-50" />
                <div className="text-sm font-black uppercase tracking-widest">{t.experienceSpace}</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurStory = () => {
  const { t } = useTranslation();
  return (
    <section id="story" className="py-40 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <div className="lg:col-span-6">
          <SectionHeading subtitle={t.storyOrigin} align="left">{t.storyTitle} <br/><span className="italic text-brand-accent">{t.storySubtitle}</span></SectionHeading>
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-muted mb-4">{t.storyConcept}</h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed max-w-lg">
                {t.storyConceptDesc}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-muted mb-4">{t.storyFusion}</h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed max-w-lg">
                {t.storyFusionDesc}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="bg-brand-surface p-10 rounded-[32px] border border-slate-200/60 shadow-sm relative overflow-hidden group">
                <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-muted mb-4">{t.storyEssence}</h3>
                <p className="text-slate-500 text-base font-light leading-relaxed">
                  {t.storyEssenceDesc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Ambiente Social" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-4 bg-white p-10 rounded-[32px] text-brand-text max-w-[240px] shadow-2xl border border-slate-100 hidden md:block"
          >
            <div className="text-6xl font-serif font-black italic text-brand-accent mb-2">99%</div>
            <div className="text-[10px] uppercase font-black tracking-widest leading-tight text-brand-muted">Inspiración Local<br/>Ejecución Global</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OurChef = () => {
  const { t } = useTranslation();
  return (
    <section id="chef" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative group">
          <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl shadow-slate-200 border-[12px] border-white z-10 hover:scale-[1.02] transition-transform duration-700">
             <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Chef Renzo Miñán" referrerPolicy="no-referrer" />
             <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div>
                   <span className="text-white text-[10px] uppercase font-black tracking-[0.3em] opacity-80 mb-2 block">{t.chefAuthor.toUpperCase()}</span>
                   <h3 className="text-white text-3xl font-serif">Renzo Miñán</h3>
                </div>
             </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl -z-10 group-hover:bg-brand-accent/30 transition-colors"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-slate-100 rounded-[50px] -z-10 rotate-12"></div>
        </div>

        <div className="lg:w-1/2 space-y-10">
          <SectionHeading subtitle={t.chefAuthor} align="left">{t.chefTitle} <br/><span className="text-brand-accent italic">{t.chefSubtitle}</span></SectionHeading>
          
          <div className="space-y-8">
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              {t.chefDesc}
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
               <div>
                  <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-muted mb-2">{t.chefFocus}</h4>
                  <p className="text-sm text-brand-text font-serif italic">{t.chefFocusVal}</p>
               </div>
               <div>
                  <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-muted mb-2">{t.chefTechnique}</h4>
                  <p className="text-sm text-brand-text font-serif italic">{t.chefTechniqueVal}</p>
               </div>
            </div>

            <div className="relative">
              <span className="absolute -top-6 -left-6 text-9xl text-slate-100 font-serif leading-none select-none z-0">“</span>
              <blockquote className="relative z-10 text-2xl font-serif italic leading-relaxed text-brand-text">
                "{t.chefQuote}"
              </blockquote>
            </div>

            <div className="flex items-center gap-6 pt-4">
               <div className="px-6 py-3 rounded-2xl bg-brand-surface border border-slate-200 text-[10px] font-black uppercase tracking-widest text-brand-text">
                  {t.chefRole}
               </div>
               <div className="flex gap-2">
                  {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>)}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const { lang, t } = useTranslation();
  const categories: MenuItem['category'][] = ['Peruvian Classics', 'Executive Lunch', 'Main', 'Breakfast', 'Cocktails'];
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('Peruvian Classics');

  return (
    <section id="menu" className="py-40 px-6 max-w-7xl mx-auto z-10 relative">
      <SectionHeading subtitle={t.menuCarta} align="center">{t.menuTitle} <br/><span className="text-brand-accent italic">{t.menuSubtitle}</span></SectionHeading>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-24">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "text-[10px] uppercase font-black tracking-widest px-8 py-4 rounded-full transition-all border",
              activeCategory === cat 
                ? "bg-brand-text text-white border-brand-text shadow-lg shadow-brand-text/10" 
                : "bg-white text-brand-muted border-slate-200 hover:border-brand-accent"
            )}
          >
            {cat === 'Executive Lunch' ? (lang === 'es' ? 'Menú Ejecutivo' : 'Executive Menu') : 
             cat === 'Peruvian Classics' ? (lang === 'es' ? 'Clásicos Peruanos' : 'Peruvian Classics') :
             cat === 'Cocktails' ? (lang === 'es' ? 'Cócteles' : 'Cocktails') :
             cat === 'Breakfast' ? (lang === 'es' ? 'Desayuno' : 'Breakfast') :
             cat === 'Main' ? (lang === 'es' ? 'Fondos' : 'Mains') : cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <AnimatePresence mode="wait">
          {MENU_ITEMS.filter(item => item.category === activeCategory).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[40px] p-6 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all group"
            >
              <div className="relative aspect-square overflow-hidden rounded-[32px] mb-8">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-black text-white bg-brand-accent px-4 py-2 rounded-full shadow-lg">
                    {item.price}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-2 pb-4">
                <h3 className="text-2xl font-serif text-brand-text">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-2">
                  {item.description[lang]}
                </p>
                <div className="pt-4 flex items-center justify-between">
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="#C19A6B" className="text-brand-accent" />)}
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-brand-muted opacity-40">
                      {lang === 'es' ? 'Disponibilidad Diaria' : 'Daily Availability'}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-40 bg-brand-surface border-y border-slate-100 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-12">
            <SectionHeading subtitle={t.experienceSubtitle} align="center">{t.experienceTitle} <span className="italic text-brand-accent">&</span> Arte.</SectionHeading>
          </div>
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative p-12 bg-white border border-slate-100 rounded-[32px] shadow-xl shadow-slate-200/50">
               <div className="text-[10px] text-brand-accent uppercase font-black mb-6 tracking-widest bg-brand-accent/5 w-fit px-4 py-1 rounded-full">{t.experienceSpace}</div>
               <p className="text-xl md:text-2xl font-serif text-brand-text leading-relaxed mb-10">
                 "{t.experienceTitle === 'Experience' ? 'We fuse the vibrant essence of Lima with contemporary design.' : 'Fusionamos la vibrante esencia de Lima con un diseño contemporáneo.'}"
               </p>
               <div className="space-y-6">
                  {[
                    { icon: <Clock size={16} />, title: t.footerHours, desc: "06:45 AM - 11:00 PM" },
                    { icon: <MapPin size={16} />, title: t.footerLocation, desc: "Av. La Paz 1099, Lima" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-brand-surface border border-slate-100 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                         {item.icon}
                      </div>
                      <div className="text-[10px] uppercase font-bold">
                         <span className="text-brand-muted block mb-0.5 tracking-wider">{item.title}</span>
                         <span className="text-brand-text tracking-widest">{item.desc}</span>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-6 h-[500px]">
            <motion.div 
              whileHover={{ y: -10 }}
              className="rounded-[40px] overflow-hidden border-4 border-white shadow-2xl relative translate-y-10"
            >
              <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Detalle interior" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ y: 10 }}
              className="rounded-[40px] overflow-hidden border-4 border-white shadow-2xl relative"
            >
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Barra Social" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventsSection = () => {
  const { lang, t } = useTranslation();
  return (
    <section id="events" className="py-40 px-6 max-w-7xl mx-auto z-10 relative">
      <SectionHeading subtitle="Agenda" align="center">Momentos <br/><span className="text-brand-accent italic">Inolvidables.</span></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {EVENTS.map((event) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40"
          >
            <div className="aspect-[16/9] overflow-hidden">
               <img src={event.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={event.title[lang]} referrerPolicy="no-referrer" />
               <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white">
                  <div className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{event.date}</div>
               </div>
            </div>
            <div className="p-10">
               <div className="flex items-center gap-3 text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-4">
                  <Clock size={12} /> {event.time}
               </div>
               <h3 className="text-3xl font-serif text-brand-text mb-4">{event.title[lang]}</h3>
               <p className="text-slate-500 font-light leading-relaxed mb-8">{event.description[lang]}</p>
               <a href="#reservations" className="inline-flex items-center gap-2 text-brand-accent font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  {t.reserveBtn} <ArrowRight size={14} />
               </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { lang, t } = useTranslation();
  return (
    <section id="testimonials" className="py-40 px-6 max-w-7xl mx-auto z-10 relative">
      <SectionHeading subtitle={t.testimonialsSubtitle} align="center">{t.testimonialsTitle} <br/><span className="text-brand-accent italic">{t.testimonialsHighlight}</span></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((tItem) => (
          <motion.div 
            key={tItem.id} 
            whileHover={{ y: -8 }}
            className="relative p-10 bg-white border border-slate-100 rounded-[32px] shadow-xl shadow-slate-200/50 group transition-all"
          >
            <div className="flex gap-1 mb-8">
              {Array.from({ length: tItem.rating }).map((_, i) => (
                <Star key={i} size={12} fill="#C19A6B" className="text-brand-accent" />
              ))}
            </div>
            <p className="text-slate-600 text-base italic leading-relaxed mb-10 font-light">
              "{tItem.content[lang]}"
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
              <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-accent/20 flex items-center justify-center text-brand-accent shadow-sm overflow-hidden">
                 <img 
                   src={
                     tItem.id === '1' ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" :
                     tItem.id === '2' ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" :
                     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
                   } 
                   className="w-full h-full object-cover" 
                   alt={tItem.name} 
                   referrerPolicy="no-referrer" 
                 />
              </div>
              <div>
                <div className="text-[11px] font-black uppercase tracking-widest text-brand-text mb-0.5">{tItem.name}</div>
                <div className="text-[9px] uppercase tracking-widest text-brand-muted font-bold">{tItem.role}</div>
              </div>
            </div>
            <div className="absolute top-8 right-10 text-brand-accent/5 font-serif text-8xl font-black italic select-none">"</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ReservationSystem = () => {
  const { lang, t } = useTranslation();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    date: '', 
    time: '', 
    guests: '2',
    dietary: '',
    requests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for "robustness"
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 1500);
  };

  return (
    <section id="reservations" className="py-40 px-6 relative z-10">
      {/* Confirmation Modal overlay */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-brand-text/60 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[40px] p-10 md:p-16 shadow-2xl text-center border border-slate-100 overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-brand-accent"></div>
              
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                <Check size={48} />
              </div>

              <h4 className="text-4xl font-serif italic text-brand-text mb-4">{t.reserveSuccess}</h4>
              <p className="text-brand-muted text-[10px] uppercase tracking-[0.3em] font-black mb-12">{t.reserveDetails}</p>
              
              <div className="bg-brand-surface rounded-3xl p-10 border border-slate-100 text-left space-y-6 mb-12">
                <div className="flex flex-col gap-1">
                   <span className="text-[9px] uppercase tracking-widest font-black text-brand-muted">{t.reservationName}</span>
                   <span className="text-lg font-serif text-brand-text">{formData.name}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-200/50">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest font-black text-brand-muted">{t.reservationDate}</span>
                    <span className="text-xs font-black tracking-widest text-brand-text uppercase">{formData.date} • {formData.time}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest font-black text-brand-muted">{t.reservationGuests}</span>
                    <span className="text-xs font-black tracking-widest text-brand-text uppercase">{formData.guests} {t.reservationGuests.split(' ')[0]}</span>
                  </div>
                </div>

                {(formData.dietary || formData.requests) && (
                  <div className="pt-4 border-t border-slate-200/50 space-y-4">
                    {formData.dietary && (
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1"></span>
                        <p className="text-sm text-slate-500 font-light italic">"{formData.dietary}"</p>
                      </div>
                    )}
                    {formData.requests && (
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1"></span>
                        <p className="text-sm text-slate-500 font-light italic">"{formData.requests}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button 
                onClick={() => {
                  setShowModal(false);
                  setFormData({ name: '', email: '', date: '', time: '', guests: '2', dietary: '', requests: '' });
                }}
                className="w-full bg-brand-text text-white py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-900/10 hover:bg-brand-accent transition-all"
              >
                {lang === 'es' ? 'Cerrar y Volver al Menú' : 'Close and Back to Menu'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden grid grid-cols-1 md:grid-cols-12 bg-white shadow-2xl shadow-slate-200 border border-slate-100">
        <div className="md:col-span-4 bg-brand-text text-white p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-serif italic mb-8">{t.reservationTitle}</h3>
            <p className="text-slate-400 text-base font-light leading-relaxed mb-12">
               {t.reservationSubtitle}
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
                   <Phone size={18} />
                </div>
                <div>
                   <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 block mb-1">{t.footerPhone}</span>
                   <span className="text-sm font-bold tracking-widest">+51 1 7101010</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
                   <Clock size={18} />
                </div>
                <div>
                   <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 block mb-1">{t.footerHours}</span>
                   <span className="text-sm font-bold tracking-widest">06:45 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 pt-16 flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent transition-all"><Facebook size={18} /></a>
          </div>
        </div>

        <div className="md:col-span-8 p-12 md:p-20 relative">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">{t.reservationName}</label>
                <input 
                  type="text" 
                  required
                  placeholder="Tu nombre completo"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">{t.reservationEmail}</label>
                <input 
                  type="email" 
                  required
                  placeholder="hola@ejemplo.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">{t.reservationDate}</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">{t.reservationTime}</label>
                <input 
                  type="time" 
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">{t.reservationGuests}</label>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {['1', '2', '3', '4', '5', '6+'].map(num => (
                  <button 
                    key={num}
                    type="button"
                    onClick={() => setFormData({...formData, guests: num})}
                    className={cn(
                      "min-w-16 h-16 rounded-xl border flex items-center justify-center text-sm font-bold transition-all",
                      formData.guests === num ? "bg-brand-text text-white border-brand-text" : "bg-white border-slate-100 text-brand-muted hover:border-brand-accent"
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">{lang === 'es' ? 'Restricciones Alimentarias' : 'Dietary Restrictions'}</label>
              <textarea 
                placeholder={lang === 'es' ? 'Alergias, preferencias...' : 'Allergies, preferences...'}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-accent transition-colors h-24"
                value={formData.dietary}
                onChange={(e) => setFormData({...formData, dietary: e.target.value})}
              />
            </div>

            <button 
              disabled={isSubmitting}
              className="w-full py-6 bg-brand-accent text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-brand-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {lang === 'es' ? 'Procesando...' : 'Processing...'}
                </>
              ) : t.reserveBtn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
const Newsletter = () => {
  const { lang, t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
    setEmail('');
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-brand-text rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-accent rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-accent rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10">
          <SectionHeading subtitle="Newsletter" align="center">
            <span className="text-white">Únete a la <br/><i className="text-brand-accent">Experiencia Social.</i></span>
          </SectionHeading>
          <p className="text-slate-400 text-lg font-light mb-12 max-w-xl mx-auto">
            {lang === 'es' ? 'Recibe invitaciones exclusivas a eventos, catas de pisco y nuevas creaciones de nuestra cocina.' : 'Receive exclusive invitations to events, pisco tastings, and new creations from our kitchen.'}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              required
              placeholder={lang === 'es' ? 'Tu mejor email' : 'Your best email'}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="bg-brand-accent text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-accent/20"
            >
              {subscribed ? (lang === 'es' ? '¡Gracias!' : 'Thanks!') : (lang === 'es' ? 'Suscribirse' : 'Subscribe')}
            </button>
          </form>
          {subscribed && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-accent text-[10px] uppercase font-black tracking-widest mt-6"
            >
              {lang === 'es' ? '¡Te has unido exitosamente!' : 'Successfully joined!'}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { lang, t } = useTranslation();
  return (
    <footer className="pt-40 pb-20 px-6 bg-white border-t border-slate-100 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="md:col-span-4 space-y-10">
          <a href="#home" className="text-3xl font-serif font-bold tracking-tight text-brand-text flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white text-xs font-black italic shadow-lg shadow-brand-accent/20">S</div>
            Social
          </a>
          <p className="text-slate-400 font-light leading-relaxed max-w-xs">
            {t.heroDesc}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-2xl bg-brand-surface border border-slate-100 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm"><Instagram size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-brand-surface border border-slate-100 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm"><Facebook size={20} /></a>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-muted">{t.footerLocation.toUpperCase()}</h4>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <MapPin className="text-brand-accent shrink-0" size={20} />
                  <span className="text-sm text-brand-text font-medium leading-relaxed italic">Av. La Paz 1099, Miraflores<br/>Hilton Lima Miraflores</span>
               </div>
               {/* Interactive Map Embed */}
               <div className="aspect-video w-full rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                  <iframe 
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.732734125867!2d-77.0270146!3d-12.1264624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81938507e69%3A0x6b8d227f2f11c79c!2sHilton%20Lima%20Miraflores!5e0!3m2!1sen!2spe!4v1713500000000!5m2!1sen!2spe" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-muted">{t.footerHours.toUpperCase()}</h4>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <Clock className="text-brand-accent shrink-0" size={20} />
                  <div>
                    <div className="text-sm text-brand-text font-black uppercase tracking-widest mb-1 italic">{lang === 'es' ? 'Todos los días' : 'Every day'}</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">06:45 AM - 11:00 PM</div>
                  </div>
               </div>
               <div className="flex gap-4">
                  <Phone className="text-brand-accent shrink-0" size={20} />
                  <div>
                    <div className="text-sm text-brand-text font-black uppercase tracking-widest mb-1 italic">{t.footerPhone}</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">+51 1 710 1010</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[9px] uppercase font-black tracking-[0.2em] text-brand-muted">
          © {new Date().getFullYear()} Social Restaurant & Bar • Lima, Perú
        </div>
        <div className="flex gap-8 text-[9px] uppercase font-black tracking-[0.2em] text-brand-muted">
          <a href="#" className="hover:text-brand-accent">{lang === 'es' ? 'Privacidad' : 'Privacy'}</a>
          <a href="#" className="hover:text-brand-accent">{lang === 'es' ? 'Términos' : 'Terms'}</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const translations = UI_STRINGS[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations }}>
      <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-white">
        <BackgroundDecor />
        <Navbar />
        <Hero />
        <OurStory />
        <OurChef />
        <MenuSection />
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          const img = target.closest('img');
          if (img && target.closest('#experience')) {
            setSelectedImage(img.src);
          }
        }}>
          <Experience />
        </div>
        <EventsSection />
        <Testimonials />
        <ReservationSystem />
        <Newsletter />
        <Footer />
        
        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="absolute inset-0 bg-brand-text/95 backdrop-blur-xl"
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-6xl w-full max-h-full flex items-center justify-center text-white"
              >
                <img 
                  src={selectedImage} 
                  className="max-w-full max-h-[90vh] object-contain rounded-3xl shadow-2xl border-4 border-white/10" 
                  alt="Gallery Enlarged" 
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-brand-accent transition-colors"
                >
                  <X size={32} />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </LanguageContext.Provider>
  );
}
