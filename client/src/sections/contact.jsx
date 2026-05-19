import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        bookingType: 'camera',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // For mobile, only allow digits and limit to 10
        if (name === 'mobile') {
            const onlyNums = value.replace(/[^0-9]/g, '');
            if (onlyNums.length <= 10) {
                setFormData({ ...formData, [name]: onlyNums });
            }
            return;
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.mobile.length !== 10) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        const whatsappNumber = '919905662424';

        const textMessage = `*New Booking Inquiry* 
-----------------------
*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Booking Type:* ${formData.bookingType.toUpperCase()}

*Message:*
${formData.message}`;

        const encodedMessage = encodeURIComponent(textMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="w-full bg-[#0a0a0a] text-white py-24 px-6 border-t border-gray-900">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-white md:to-gray-400">
                            Connect With Us
                        </h1>

                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-[#121414] p-8 rounded-3xl border border-gray-800 shadow-[0_0_30px_rgba(79,70,229,0.05)]">
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Call / WhatsApp</p>
                                        <p className="text-lg font-medium">+91 9905662424</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm text-gray-400 mb-1">Email Us</p>
                                        <p className="text-lg md:text-md font-medium break-all">goluvideosandeep@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Visit Us</p>
                                        <p className="text-lg font-medium">Meharpar, Bihar Sharif<br />Nalanda, Bihar</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-800">
                                <h4 className="font-semibold mb-4 text-gray-300">Available Facilities</h4>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">DJI- 4K Drones</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Crane Cameras</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Wall TVs</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Wedding Cars</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"> Nikkon Z6-II</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"> Wedding Albums</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"> Cinematic Videos</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-[#121414] p-8 md:p-10 rounded-3xl border border-gray-800 shadow-[0_0_30px_rgba(79,70,229,0.05)]">
                            <h3 className="text-2xl font-bold mb-8">Send an Inquiry</h3>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-400 mb-2">Mobile Number</label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        required
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                        placeholder="8646767558"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="bookingType" className="block text-sm font-medium text-gray-400 mb-2">Booking Type</label>
                                    <select
                                        id="bookingType"
                                        name="bookingType"
                                        value={formData.bookingType}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
                                    >
                                        <option value="camera">Photography & Videography (Camera/Drone)</option>
                                        <option value="car">Wedding Car Booking</option>
                                        <option value="both">Both (Camera + Car)</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message Details</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                                        placeholder="Tell us about your event, dates, and specific requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-xl px-4 py-3 md:px-8 md:py-4 font-bold text-base md:text-lg transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                                >
                                    <span>Send via WhatsApp</span>
                                    <Send size={18} className="ml-1 md:ml-2 md:w-5 md:h-5" />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
