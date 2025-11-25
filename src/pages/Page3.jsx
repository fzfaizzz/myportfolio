import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Page3() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, ) => {
      gsap.to(card, {
        y: 'random(-80, 80)',
        x: 'random(-40, 40)',
        rotation: 'random(-15, 15)',
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    });
  }, []);

  const projects = [

    {
      id: 1,
      title: 'IT Classes',
      image: 'it.png',
      link: 'https://itteamwork.netlify.app/',
      name: 'IT Teamwork',
    },
    {
      id: 2,
      title: 'Cyberpunk',
      image: 'cyber.png',
      link: 'https://cyberpunk27.netlify.app/',
      name: 'personal project',
    },
    {
      id: 3,
      title: 'React Practice',
      image: 'react mini.png',
      link: 'https://reactpro301.netlify.app/',
      name: 'practice projects',
    },
    {
      id: 4,
      title: 'Portfolio',
      image: 'farhan.png',
      link: 'https://farhanportfolio27.netlify.app/',
      name: 'Portfolio Website',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-20 px-5 md:px-24 relative overflow-hidden">
      {/* Heading */}
      <div className="mb-16 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          THE <span className="text-purple-300">WORQ</span>
        </h1>
      </div>

      {/* Floating Cards Grid */}
      <div className="relative  flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-[280px] h-[350px] 
                       border border-dashed 
                       border-[#b0aeae] 
                       rounded-2xl 
                       flex flex-col items-center justify-between 
                       text-xl font-semibold 
                       shadow-xl 
                       shadow-purple-500/20 
                       backdrop-blur 
                       transition-transform duration-10
                       p-4 relative"
          >
            {/* Project Number */}
           
            <a href={project.link}
              target="_blank"
              rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full cursor-pointer h-[150px] object-cover rounded-xl"
            />
            </a>
             <p className=" ml-40  -mt- text-gray-400 font-mono">
              {String(index + 1).padStart(2, '0')}
            </p>
            <div className="text-start -mt-5">{project.title}</div>
            <p className='text-start text-sm text-gray-300  -mt-5'>{project.name}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm text-purple-300 underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;
