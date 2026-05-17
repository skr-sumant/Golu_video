import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Car } from 'lucide-react';
import sandeepImg from '../assets/sandeep.jpg';
import cameraImg from '../assets/vidcamera.jpg';

const About = () => {
    const equipment = [
        {
            title: "Nikon Cameras",
            models: "D7500, Z 6II",
            icon: <Camera className="w-8 h-8 text-indigo-400" />,
            description: "Exceptional image resolution, low-light performance, and advanced autofocus for stunning photography.",
            bg: "from-indigo-900/20 to-[#0a0a0a]"
        },
        {
            title: "Sony Camcorders",
            models: "NX100, NX200",
            icon: <Video className="w-8 h-8 text-purple-400" />,
            description: "Professional-grade camcorders delivering high-resolution cinematic video content with smooth frame rates.",
            bg: "from-purple-900/20 to-[#0a0a0a]"
        },
        {
            title: "Our Fleet",
            models: "Maruti Suzuki Ertiga",
            icon: <Car className="w-8 h-8 text-[#00d2ff]" />,
            description: "Spacious and reliable transport for our crew and heavy equipment, ensuring we reach your venue on time.",
            bg: "from-[#00d2ff]/20 to-[#0a0a0a]"
        }
    ];

    return (
        <section id="about" className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-4">
                        About Golu Photography
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
                        Capturing <span className="text-indigo-400 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-indigo-400 md:to-purple-500">Timeless</span> Memories
                    </h2>
                </div>

                <div className="flex flex-col gap-24 mb-32">
                    {/* Owner Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 relative group"
                        >
                            <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl blur-2xl transform -rotate-6 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>
                            <img 
                                src={sandeepImg} 
                                alt="Sandeep - Owner" 
                                className="relative z-10 w-full h-[500px] object-cover rounded-3xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 p-8 md:p-12 rounded-3xl bg-[#121414]/50 border border-white/5 backdrop-blur-md shadow-xl"
                        >
                            <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-4">
                                <span className="w-12 h-1 bg-indigo-500 rounded-full"></span>
                                Meet Sandeep
                            </h3>
                            <p className="text-gray-300 leading-relaxed font-light mb-6 text-lg">
                                Sandeep is a passionate Indian wedding photographer with over a decade of experience capturing the vibrant colors, rich traditions, and joyful moments of weddings. 
                            </p>
                            <p className="text-gray-300 leading-relaxed font-light text-lg">
                                With a unique eye for storytelling and a calming presence, Sandeep has become a sought-after photographer in the wedding community. His artistic vision ensures that every frame tells a beautiful story.
                            </p>
                        </motion.div>
                    </div>

                    {/* History Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-8 md:p-12 rounded-3xl bg-[#121414]/50 border border-white/5 backdrop-blur-md shadow-xl"
                        >
                            <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-4">
                                <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
                                Our History (Est. 2007)
                            </h3>
                            <p className="text-gray-300 leading-relaxed font-light mb-6 text-lg">
                                Since 2007, GOLU HD Video has had the privilege of capturing the wedding days of hundreds of couples. We have honed our skills to create timeless, authentic, and visually stunning images.
                            </p>
                            <p className="text-gray-300 leading-relaxed font-light text-lg">
                                Our commitment to excellence, attention to detail, and passion for our craft have earned us a reputation as one of the top photography studios in the region. We look forward to many more years of creating beautiful memories.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-2xl transform rotate-6 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>
                            <img 
                                src={cameraImg} 
                                alt="Golu Videography Cameras" 
                                className="relative z-10 w-full h-[500px] object-cover rounded-3xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Equipment Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4">Our Gear & Fleet</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {equipment.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-b ${item.bg} backdrop-blur-xl hover:-translate-y-2 transition-transform duration-300 group shadow-lg`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm font-bold text-indigo-300 mb-4 tracking-[0.15em] uppercase">{item.models}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
