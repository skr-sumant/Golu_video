import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

const Banner = () => {
    return (
        <section className="w-full py-16 px-4 bg-[#0a0a0a] flex justify-center">
            <div className="w-full max-w-7xl relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(88,44,255,0.15)] border border-indigo-500/20 group">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-[#0a0a0a] z-0 transition-opacity duration-700 group-hover:opacity-80"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#582cff]/20 rounded-full blur-[100px] pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs font-bold uppercase tracking-[0.2em] text-indigo-300 mb-4 backdrop-blur-md"
                        >
                            Exclusive Bookings चालू हैं
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4 leading-tight drop-shadow-lg"
                        >
                            क्या आप <span className="text-[#00d2ff] md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-indigo-400 md:to-[#00d2ff]">Cinematic Magic</span><br className="hidden md:block" /> create करने के लिए तैयार हैं?
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0"
                        >
                            अपने next big project के लिए Golu Videography & Photography को book करें। इस season की dates बहुत तेज़ी से full हो रही हैं!
                        </motion.p>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shrink-0 w-full md:w-auto"
                    >
                        <a href="https://wa.me/919905662424?text=Hi%20Golu%20Videography%21%20I%20am%20interested%20in%20booking%20a%20photography%20session.%20Please%20let%20me%20know%20your%20availability." target="_blank" rel="noopener noreferrer" className="w-full">
                            <button className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#f5f5f5] to-gray-300 text-[#0a0a0a] rounded-full font-black text-lg hover:from-white hover:to-white transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                                <CalendarCheck className="w-6 h-6" />
                                अभी Book करें
                            </button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
