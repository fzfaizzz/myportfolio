import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDownload } from "react-icons/fa";


function Mytech() {
  const form = useRef();
  const [clicked, setClicked] = useState(false); // For click animation

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sutkj9s",
        "template_emlmiiu",
        form.current,
        "XejmapJ86pj9bpUp-"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong, try again later.");
        }
      );
  };






  return (
    <div className="p-5 bg-black relative">
      <ToastContainer position="bottom-right" theme="dark" />

      <div className="min-h-[93vh] mt-10 max-h-[93vh] relative rounded-3xl w-full p-4 bg-black text-white font-sans">
        {/* Main Content */}
        <div className="relative mt-12 px-2 mx-auto sm:px-16 items-start w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="text-[16vh] sm:text-[20vh] md:text-[15vh] lg:text-[20vh] xl:text-[30vh] font-[anzo5] leading-[10vh] md:leading-[20vh]">
              LET’S{" "}
              <span className="text-purple-300 leading-none"> CREATE</span>
            </p>
            <p className="text-[16vh] sm:text-[20vh] md:text-[25vh] lg:text-[30vh] font-[anzo5] md:leading-[25vh] leading-[10vh] sm:leading-[10vh]">
              APP
            </p>

            <p className="mt-20 font-[anzo4] sm:inline-block hidden text-gray-400 sm:mt-10 text-sm sm:text-base md:text-base">
              IT IS NOT JUST ABOUT SOLVING THE PROBLEM <br />
              BUT{" "}
              <span className="font-[anzo6] text-white">
                OFFERING THE TRANSFORMATION!
              </span>
            </p>
          </div>

          {/* Right Form Section */}
          <div className="w-full mt-5 max-w-md mx-auto bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-gray-200 px-4 py-2 rounded text-white placeholder-gray-200 focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-gray-200 px-4 py-2 rounded text-white placeholder-gray-200 focus:outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                className="bg-transparent border-b border-gray-200 px-4 py-2 rounded text-white placeholder-gray-200 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="border hover:bg-purple-600 active:scale-95 transition-all duration-200 ease-in-out text-white font-semibold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Resume Button with Click Effect */}
        <a
  href="/Farhan Akhtar Hamza - Resume.pdf"
  download
  onClick={() => {
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
  }}
  className={`resume-bt fixed sm:absolute bottom-6 right-6 sm:bottom-10 sm:right-10 inline-flex items-center border-2 sm:px-4 px-2 py-2 rounded-md 
    text-white hover:text-green-400 bg-black/20 backdrop-blur-md transition-transform duration-150 z-[99]
    ${clicked ? "scale-95" : "scale-100"}`}
>
  <FaDownload className="sm:mr-2" />
  <span className="font-[anzo3] hidden sm:inline-block">Resume</span>
</a>

      </div>
    </div>
  );
}

export default Mytech;
