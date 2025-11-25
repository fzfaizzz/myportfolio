import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Start from './Start';
import Preloader from './pages/Preloader';

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, 
      wheelMultiplier: 0.5, 
      touchMultiplier: 1.2, 
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {!loadingDone && <Preloader onFinish={() => setLoadingDone(true)} />}
      {loadingDone && <Start />}
    </>
  );
}
