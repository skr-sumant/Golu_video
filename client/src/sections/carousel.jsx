"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img1 from '../assets/img/DSC_3967.JPG';
import img2 from '../assets/img/DSC_3976.JPG';
import img3 from '../assets/img/DSC_9552.JPG';
import img4 from '../assets/img/DSC_9582.JPG';
import img5 from '../assets/img/DSC_9583.JPG';
import img6 from '../assets/img/birthday.jpg';
import img7 from '../assets/img/pre.jpg';
import img8 from '../assets/img/wedding.jpg';
const SparklesIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.93 2.25 12 7.5l2.07-5.25a.5.5 0 0 1 .9 0L17.25 8.5l4.16.34a.5.5 0 0 1 .29.88l-3.2 3.1.95 4.5a.5.5 0 0 1-.73.53L12 14.5l-3.72 2.33a.5.5 0 0 1-.73-.53l.95-4.5-3.2-3.1a.5.5 0 0 1 .29-.88l4.16-.34Z" />
  </svg>;
const ChevronLeftIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6" />
  </svg>;
const ChevronRightIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>;
const Badge = ({
  children,
  className
}) => <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${className}`}>
    {children}
  </div>;
const cardData = [{
  id: 1,
  imageUrl: img8,
  title: "Wedding Ceremony"
}, {
  id: 2,
  imageUrl: img7,
  title: "Pre-Wedding Shoot"
}, {
  id: 3,
  imageUrl: img6,
  title: "Birthday Celebration"
}, {
  id: 4,
  imageUrl: img1,
  title: "Candid Moments"
}, {
  id: 5,
  imageUrl: img2,
  title: "Portrait Sessions"
}, {
  id: 6,
  imageUrl: img3,
  title: "Event Highlights"
}, {
  id: 7,
  imageUrl: img4,
  title: "Cinematic Shots"
}, {
  id: 8,
  imageUrl: img5,
  title: "Memories Forever"
}];
export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cardData.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayDelay = 3000;
  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % cardData.length);
  };
  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);
  const changeSlide = newIndex => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
  };
  const onDragEnd = (event, info) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };
  return <section className="w-full flex-col items-center justify-center font-sans overflow-hidden">
      <div className="w-full max-w-5xl mx-auto p-4" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="relative flex w-full flex-col rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-4 pt-6 md:p-6">
          <Badge className="absolute left-4 top-6 rounded-xl border border-white/10 text-base text-[#f5f5f5] bg-[#121212]/60 backdrop-blur-md shadow-lg md:left-6">
            <SparklesIcon className="fill-[#582cff] stroke-1 text-[#f5f5f5] h-5 w-5 mr-1" />
            Cinematic Portfolio
          </Badge>

          <div className="relative w-full h-[280px] md:h-[400px] flex items-center justify-center overflow-hidden pt-12">
            <motion.div className="w-full h-full flex items-center justify-center" drag="x" dragConstraints={{
            left: 0,
            right: 0
          }} dragElastic={0.2} onDragEnd={onDragEnd}>
              {cardData.map((card, index) => <Card key={card.id} card={card} index={index} activeIndex={activeIndex} totalCards={cardData.length} />)}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={() => changeSlide(activeIndex - 1)} className="p-2 rounded-full bg-[#121212]/50 hover:bg-[#121212]/80 border border-white/10 text-[#f5f5f5] backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#582cff] shadow-lg">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-center gap-2">
              {cardData.map((_, index) => <button key={index} onClick={() => changeSlide(index)} className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${activeIndex === index ? "w-8 bg-gradient-to-r from-[#582cff] to-[#00d2ff] shadow-[0_0_10px_rgba(88,44,255,0.5)]" : "w-2 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to slide ${index + 1}`} />)}
            </div>

            <button onClick={() => changeSlide(activeIndex + 1)} className="p-2 rounded-full bg-[#121212]/50 hover:bg-[#121212]/80 border border-white/10 text-[#f5f5f5] backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#582cff] shadow-lg">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
}
function Card({
  card,
  index,
  activeIndex,
  totalCards
}) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }
  const isVisible = Math.abs(offset) <= 1;
  const animate = {
    x: `${offset * 50}%`,
    scale: offset === 0 ? 1 : 0.8,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30
    }
  };
  return <motion.div className="absolute w-1/2 md:w-1/3 h-[95%]" style={{
    transformStyle: "preserve-3d"
  }} animate={animate} initial={false}>
      <div className="relative w-full h-full rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden bg-[#121212] border border-white/5">
        <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover pointer-events-none" onError={e => {
        const target = e.target;
        target.onerror = null;
        target.src = "https://placehold.co/400x600/1e1e1e/ffffff?text=Image+Missing";
      }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent backdrop-blur-[2px]">
          <h4 className="text-[#f5f5f5] text-xl font-bold tracking-tight">{card.title}</h4>
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-1">Cinematic Series</p>
        </div>
      </div>
    </motion.div>;
}