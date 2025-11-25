import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import GlowingCircle from "./GlowingCircle";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) / 20;
      const moveY = (clientY - centerY) / 20;

      gsap.to(imageRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative bg-black ">
      {/* <div className=" absolute bg-none z-10 -top-10 -left-80 "><GlowingCircle/></div> */}
      <div className="flex justify-center ">
        <div className="absolute text-[50px] lg:-top-16 font-black md:text-[120px] sm:text-[80px] md:-top-10 sm:-top-6 bg-gradient-to-b from-[#dedede]  via-[#dedede] to-99%  to-black  text-transparent bg-clip-text text-center lg:text-[150px]">
          <p>I'M FARHAN </p>
        </div>
      </div>

      <div className=" w-full h-screen  bg-black flex items-center justify-center text-white">
        <div className=" text-white hidden sm:flex top-20 xl:top-[40%] absolute left-0 px-16 py-12 items-end justify-between buttom-0 w-full ">
          <div>
            <h2 className="text-xl font-[anzo3]">
              BRAND DESIGN | WEBSITE DESIGN
            </h2>
            <h3 className="text-purple-400 font-[anzo4] leading-3">
              BESPOKE FREELANCE
            </h3>
          </div>
          {/* <dir>
            <img className='h-16' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
            <img className='h-16 m-' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
        </dir> */}
        </div>

        <div className="relative flex flex-col items-center">
          <img
            ref={imageRef}
           src="/faiz.webp"
            alt="Profile"
            fetchPriority="high"
            loading="eager"
            className="w-80 h-auto 2xl:w-96 rounded-lg shadow-lg"
          />
        </div>

        {/* <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-right">
        <p className="text-purple-400 text-lg">A Creative</p>
        <h1 className="text-4xl font-bold">
          <span className="text-gray-500 line-through">DESIGNER</span>{" "}
          <span className="text-white">DEVELOPER</span>
        </h1>
      </div> */}

        <button className="absolute text-start bottom-2 sm:bottom-28 sm:right-10 mx-auto text-gray-400 hover:text-white transition-all">
          <p className="text-purple-300 font-[anzo4] text-2xl">A Creative</p>
          <h1 className="text-6xl font-bold">
            <p className="bg-gradient-to-b from-purple-500 to-95%  to-black text-transparent bg-clip-text">
              DESIGNER
            </p>

            <pre className="text-white -mt-5"> DEVELOPER</pre>
          </h1>
        </button>
      </div>
      <div className=" fixed top-[50%] z-10 -right-68 ">
        <GlowingCircle />
      </div>
    </div>
  );
};

export default HeroSection; 