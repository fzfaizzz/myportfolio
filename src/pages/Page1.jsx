import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);

function Page1() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 }, // Start: Neeche aur invisible
      {
        opacity: 1,
        y: 0, // Move up effect
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Jab text viewport ke andar aaye
          end: "top 50%", // Jab ye center ke paas ho
          scrub: 2, // Smooth scrolling effect
        },
      }
    );
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay to Improve Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* About Text with Scroll Animation */}
      <div className="relative flex justify-center z-10">
        <div
          ref={textRef}
          className="absolute top-10 lg:-top-10 font-black text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] bg-gradient-to-b from-[#dedede] via-[#dedede] to-90% to-purple-500 text-transparent bg-clip-text text-center opacity-0"
          >
          <p>ABOUT ME</p>
        </div>
      </div>


   {/* Content Section */}
{/* <div className="flex justify-center items-center bg-transparent  px-5 z-10"> */}
  <div className="flex flex-col justify-evenly mx-auto md:pl-20  items-center bg-transparent  px-5 z-10 sm:flex-row gap-10 mt-[20vh] sm:mt-[1vh] w-full max-w-[1200px]">
    {/* Text Content */}
    <div className="relative border-dashed border-2  border-[#474545] h-full bg-black/60 text-white p-6 lg:w-1/2 w-full">
      {/* Corner Borders */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-white"></div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-white"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-white"></div>
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-white"></div>

            <p className="font-">
            I am a passionate and skilled Frontend Developer with a strong focus on creating user-friendly, responsive, and visually appealing web applications. I specialize in HTML, CSS, JavaScript, React.js and modern frameworks like Tailwind CSS, . With a keen eye for design and a commitment to writing clean, efficient code, I strive to deliver seamless digital experiences that enhance user satisfaction. I enjoy solving complex problems, staying updated with the latest trends in web development, and collaborating with teams to bring ideas to life.            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 z-20 w-full flex justify-center mt-[5vh] items-center">
            <img
              className="object-cover hidden sm:inline xl:h-[90vh] sm:h-[80vh] max-w-full"
              src="Astro Me.png"
              alt="Astro Me"
            />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Page1;
