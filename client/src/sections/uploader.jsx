import React from "react";
import { UploadCloud } from "lucide-react";

export default function Uploader() {
    return (
        <section id="upload" className="w-full py-24 bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-indigo-900/10 to-[#0a0a0a] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
                <div className="bg-[#121414]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                        <UploadCloud className="w-10 h-10 text-indigo-400" />
                    </div>
                    
                    <h3 className="text-xl md:text-xl font-black mb-4 text-[#f5f5f5] tracking-tight">
                        Upload Your Media
                    </h3>
                    <br></br>
                    
                    <a 
                        href="https://mega.nz/megadrop/F8Zf_ZJS5O0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-500 hover:to-purple-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#121414]"
                    >
                        Proceed to Upload Portal
                    </a>
                </div>
            </div>
        </section>
    );
}