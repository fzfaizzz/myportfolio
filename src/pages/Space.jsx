import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Space = () => {
  const wrapper1Ref = useRef(null);
  const scroll1Ref = useRef(null);

  const wrapper2Ref = useRef(null);
  const scroll2Ref = useRef(null);

  const images1 = ['spac8.avif', 'spac5.avif', 'spac7.avif', 'spac4.avif', 'spac6.avif' , 'spac8.avif', 'spac5.avif', 'spac7.avif', 'spac4.avif', 'spac6.avif'];
  const images2 = ['spac1.avif', 'spac2.avif', 'spac3.avif', 'spac01.avif', 'spac02.avif', 'spac1.avif', 'spac2.avif', 'spac3.avif', 'spac01.avif', 'spac02.avif'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeout ensures layout is ready
      setTimeout(() => {
        // const scrollLength1 = scroll1Ref.current.scrollWidth - wrapper1Ref.current.clientWidth;
        // const scrollLength2 = scroll2Ref.current.scrollWidth - wrapper2Ref.current.clientWidth;

        gsap.to(scroll1Ref.current, {
          x: -300,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper1Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(scroll2Ref.current, {
          x: 250,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper2Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        ScrollTrigger.refresh(); // Force recalculation
      }, 100); // Small delay for layout calculation
    });

    return () => {
      ctx.revert(); // Clean up
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-black text-white py-20 space-y-8">
      {/* Image Row 1 */}
      <div ref={wrapper1Ref} className="w-full overflow-hidden">
        <div ref={scroll1Ref} className="flex gap-8 px-10">
          {images1.map((src, index) => (
            <div key={index} className="w-[300px] flex-shrink-0">
              <img
                src={src}
                alt={`Row1 Image ${index}`}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Row 2 */}
      <div ref={wrapper2Ref} className="w-full overflow-hidden">
        <div ref={scroll2Ref} className="flex gap-8 -ml-[25%] ">
          {images2.map((src, index) => (
            <div key={index} className="w-[300px] flex-shrink-0">
              <img
                src={src}
                alt={`Row2 Image ${index}`}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Space;
