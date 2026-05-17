import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Heart } from 'lucide-react';

const Instagram = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const Twitter = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
const Youtube = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 5.4 3.9 4 5.6 4h12.8c1.7 0 3.1 1.4 3.1 3.1v9.8c0 1.7-1.4 3.1-3.1 3.1H5.6c-1.7 0-3.1-1.4-3.1-3.1V7.1z" /><path d="m9.5 15.5 6-3.5-6-3.5v7z" /></svg>;

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col items-start justify-center">
                <span className="text-3xl font-black text-indigo-400 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-purple-500 md:to-indigo-600 tracking-tighter leading-none">
                  Golu
                </span>
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-gray-500 mt-1">
                  Videography & Photography
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Golu Videography & Photography

            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              शादी,पार्टी एवं सभी प्रकार के कार्यक्रमों में  बुकिंग के लिए संपर्क करें।

            </p>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              सुविधाएँ: Wall TV, 4K TV, 4K Drone एवं Crane Camera उपलब्ध है।

            </p>
            <div className="flex space-x-4">

              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.youtube.com/@GoluPhotographyvideography" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Home</Link>
              </li>
              
              <li>
                <Link to="tel:+919905662424" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Car Booking</Link>
              </li>
              <li>
                <Link to="tel:+919905662424" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Contact</Link>
              </li>
              <li>
                <a href="https://www.youtube.com/@GoluPhotographyvideography" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Youtube</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Get in Touch</h4>
            <ul className="space-y-4">
              <a
                href="https://wa.me/919905662424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-400 text-sm hover:text-white transition"
              >
                <Phone size={18} className="text-indigo-400 mt-0.5" />
                <span>+91 9905662424</span>
              </a>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-indigo-400 mt-0.5" />
                <span>goluvideosandeep@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-indigo-400 mt-0.5" />
                <span>Meharpar Bihar Sharif<br />Nalanda  Bihar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Golu Videography & Photography. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-gray-500">
  <a
    href="https://www.linkedin.com/in/skr-sumant/"
    className="flex items-center gap-1 hover:text-gray-300 transition-colors"
  >
    Made By Sumant with
    <Heart size={11} className="text-red-500 fill-red-500" />
  </a>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
