import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
// import Loader from './Loader';
export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // GSAP: zoom out + fade out
          gsap.to(preloaderRef.current, {
            scale: 2,
            opacity: 0,
            duration: 2,
            ease: 'power3.inOut',
            onComplete: onFinish,
          });

          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#f5f1f8] flex items-center justify-center z-50"
    >
    
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-14 rounded-full bg-black border-8 border-amber-200 shadow-lg flex items-center px-6 space-x-2 overflow-hidden">
          <span className="text-white font-semibold text-sm z-10">LOADING</span>
          <span className="text-gray-300 text-sm z-10">{progress}%</span>

          <div className="absolute left-0 top-0 h-full rounded-full z-0 overflow-hidden">
            <div
              className="h-full bg-white"
              style={{
                width: `${progress}%`,
                transition: 'width 0.2s ease-in-out',
              }}
            />
          </div>
          
          <div className="absolute -left-[1px] -top-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 z-[-1]" />
        </div>
      </div>
    </div>
  );
}
