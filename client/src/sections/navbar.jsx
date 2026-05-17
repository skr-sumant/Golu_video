import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import search from '../pages/search';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Search', path: '/search' },
  { title: 'Uploader', path: 'https://mega.nz/megadrop/F8Zf_ZJS5O0' },
  { title: 'Contact', path: 'tel:+919905662424' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="#home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-start justify-center"
            >
              <span className="text-3xl font-black text-indigo-400 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-purple-500 md:to-indigo-600 md:dark:from-purple-400 md:dark:to-indigo-500 tracking-tighter leading-none">
                Golu
              </span>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mt-1">
                Videography & Photography
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={index} to={link.path} className="relative group">
                  <motion.span
                    className={`text-sm font-medium transition-colors ${isActive
                        ? 'text-indigo-400'
                        : 'text-gray-300 hover:text-indigo-400'
                      }`}
                  >
                    {link.title}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full"
                    />
                  )}
                  <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400/50 rounded-full transition-all group-hover:w-full ${isActive ? 'hidden' : ''}`} />
                </Link>
              );
            })}

            {/* Book Now Button */}
            <a href="https://wa.me/919905662424?text=Hi%20Golu%20Videography%21%20I%20am%20interested%20in%20booking%20a%20photography%20session.%20Please%20let%20me%20know%20your%20availability." target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-2 rounded-full font-medium shadow-lg shadow-indigo-500/30 transition-all"
              >
                Book Now
              </motion.button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-indigo-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                      ? 'bg-indigo-900/20 text-indigo-400'
                      : 'text-gray-300 hover:bg-white/5 hover:text-indigo-400'
                    }`}
                >
                  {link.title}
                </Link>
              ))}
              <a
                href="https://wa.me/919905662424?text=Hi%20Golu%20Videography%21%20I%20am%20interested%20in%20booking%20a%20photography%20session.%20Please%20let%20me%20know%20your%20availability."
                target="_blank" rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-md">
                  Book Now
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
