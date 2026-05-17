import React from 'react';
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import heroVideo from '../assets/work.mp4';
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    

    
    return (
        <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover scale-105"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Gradient Overlays for Cinematic Depth */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a]/80 via-black/40 to-[#0a0a0a]"></div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80"></div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.4, 0, 1] }}
                    className="flex flex-col items-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-[#f5f5f5] mb-8 backdrop-blur-md shadow-lg"
                    >
                        <span><Camera /></span>
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        Golu Videography and Photography
                    </motion.span>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.05] mb-6 text-white drop-shadow-2xl">
                        Make Your Wedding  <br className="hidden md:block" />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-indigo-400 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-indigo-400 md:via-[#582cff] md:to-[#00d2ff]">
                                Special with us.
                            </span>
                            <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-indigo-500/30 to-[#00d2ff]/30 z-0"></span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
                        Visuals sirf capture nahi karte — hum emotions, memories aur cinematic vibes create karte hain.                    </p>
                    <br></br>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                   <a href="https://wa.me/919905662424?text=Hi%20Golu%20Videography%21%20I%20am%20interested%20in%20booking%20a%20photography%20session.%20Please%20let%20me%20know%20your%20availability." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"> 
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#f5f5f5] text-[#0a0a0a] font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            Book Now
                        </button>
                   </a>
                   <a href='https://www.youtube.com/@GoluPhotographyvideography' target='_blank' rel="noopener noreferrer">    <button className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#121414]/50 border border-white/10 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all duration-300">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-indigo-500 transition-colors">
                                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                            </span>
                            Watch Showcase
                        </button>
                        </a>
                    </div>
                </motion.div>
            </div>

           
           
        </section>
    );
};

export default Hero;