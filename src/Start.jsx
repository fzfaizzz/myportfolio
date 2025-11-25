import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Header from './Header';
import Home from './Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Space from './pages/Space';
import Page3 from './pages/Page3';
import Mytech from './pages/Mytech';
import Footer from './pages/Footer';

function Start() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 1,

        // scale: 0.95,
      },
      {
        opacity: 0,
        // scale: 1,
        // delay:0,
        duration: 0.8,
        ease: 'power3.in',
      }
    );
  }, []);

  return (
    <div >
      <div ref={containerRef} className=' bg-black h-screen w-screen absolute top-0 left-0 z-50'> </div>
      <Header />
      <Home />
      <Space />
      <Page1 />
      <Page2 />
      <Page3 />
      <Mytech />
      <Footer />
    </div>
  );
}

export default Start;
