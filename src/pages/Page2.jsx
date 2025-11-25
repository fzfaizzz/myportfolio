import React from "react";

function Page2() {
  return (
    <div className="h-screen  bg-black p-10 flex items-center justify-center">
      <div className="h-full w-full bg-black rounded-3xl overflow-hidden bg-cover ">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center md:pl-16 mt-5 md:mt-10 space-y-2 px-5 md:px-0">
            <h1 className="text-[20vw] md:text-[15vw] lg:text-[20vw] xl:text-[20vw] font-bold text-gray-300 leading-[5vh] sm:leading-[10vh] lg:leading-[20vh] font-[anzo5]">
              WHAT
            </h1>
            <h1 className="text-[20vw] md:text-[15vw] lg:text-[14vw] xl:text-[14vw] font-bold text-white leading-none font-[anzo5] mt-2 md:mt-4">
              I <span className=" text-purple-400">DO</span>
            </h1>
            <p className="text-white font-[anzo1] text-xs md:text-sm lg:text-base xl:text-lg uppercase font-light mt-3 md:-mt-5">
              I DESIGN AND DEVELOP <br />
              <span className="text-purple-400 font-[anzo2]">
                MODERN, IMPACTFUL AND LUXURIOUS
              </span>
              <br />
              websites that seamlessly bridge your goals with the needs of your
              clients.
            </p>
          </div>

          {/* Right Column: Videos */}
          <div className="flex items-center justify-center relative mt-8 md:mt-0">
            <video
              className="w-3/4 md:w-2/3 lg:w-1/2 rounded-full z-20"
              autoPlay
              preload="auto"
              playsInline
              loop
              muted
              src="/moon.mp4"
            ></video>
            <video
              className="absolute top-10 md:top-20 right-5 md:right-10 w-[50rem] md:w-[49rem] lg:w-[60%] rounded-full opacity-80"
              autoPlay
              preload="auto"
              playsInline
              loop
              muted
              src="/clock.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
