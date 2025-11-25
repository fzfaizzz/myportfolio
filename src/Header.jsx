import { MdOutlineAttachEmail } from "react-icons/md";
import GlowingCircle from "./GlowingCircle";

const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 z-50 text-[#d5d3d1] p-3 shadow-lg overflow-hidden">
      {/* Glowing Circle Background */}
      <div className="fixed -z-10 -top-48 -left-44">
        <GlowingCircle />
      </div>

      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <img src="icon1.png" alt="logo" className="w-10 h-10 hover:text-[#b991c8] cursor-pointer" />

        {/* Email Icon (Always visible) */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=akhtarfarhan658@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#b991c8] text-xl font-[anzo3]"
          title="Send Email"
        >
          {/* <MdEmail size={28} /> */}
          <MdOutlineAttachEmail size={28} />

        </a>
      </div>
    </nav>
  );
};

export default Navbar;
