import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const imgRef = useRef();
  const vdRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    const vd = vdRef.current;

    // Only animate on screens wider than 640px
    if (window.innerWidth > 640) {
      gsap.fromTo(
        img,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: 'top 95%',
            end: 'top 70%',
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        vd,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: vd,
            start: 'top 95%',
            end: 'top 70%',
            scrub: 1.5,
          },
        }
      );

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }
  }, []);

  return (
    <div className="bg-black text-white px-6 py-14 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

        {/* Animated PNG Image */}
        <div className="flex justify-center sm:justify-start">
          <img
            ref={imgRef}
            src="thun.png"
            alt="logo"
            className="h-32 sm:h-40 object-contain"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-center sm:text-left">
          <div>
            <p className="text-gray-400 font-[anzo3]">Email</p>
            <p className="text-white">akhtarfarhan658@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-400 font-[anzo3]">Location</p>
            <p className="text-white">Mumbai, India</p>
          </div>
        </div>

        {/* Developer Info */}
        <div className="text-center sm:text-left space-y-2">
          <p className="text-gray-300 font-[anzo3]">Designed and Developed</p>
          <p>
            by <span className="text-purple-300 font-[anzo3]">Farhan Akhtar Hamza</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2024</p>
        </div>

        {/* Video Section */}
        <div className="flex justify-center sm:justify-end">
          <video
            ref={vdRef}
            src="loop.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="h-32 sm:h-40 object-cover rounded-lg"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Footer;
