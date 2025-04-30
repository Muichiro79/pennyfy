import { useState, useEffect } from "react";
// import { FaDiscord, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle
// import { FaSearch } from "react-icons/fa"; // Search icon
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  // const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" py-6 px-8 text-gray-900 z-[9999]">
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-6 lg:px-16 py-4 transition-all duration-300 ${
            isScrolled
              ? "w-[80%] bg-emerald-800/80 backdrop-blur-md shadow-lg py-3 rounded-xl"
              : "w-full py-6"
          } z-[9999]`}
        >
          {/* Logo */}
          <h1 className="text-2xl font-bold text-teal-600  dark:text-teal-50">Pennyfy</h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-row gap-6 text-lg text-gray-800">
           <Link to="/Dashboard/Home">
              <li className="cursor-pointer hover:text-teal-600  dark:text-teal-50">Dashboard</li>
            </Link>
            <Link to="/Dashboard/settings">
              <li className="cursor-pointer hover:text-teal-600  dark:text-teal-50">Settings</li>
            </Link>
            <Link to="/Dashboard/profile">
              <li className="cursor-pointer hover:text-teal-600  dark:text-teal-50">Profile</li>
            </Link>
            {/* <Link to="/news">
              <li className="cursor-pointer hover:text-teal-600  dark:text-teal-50">News</li>
            </Link> */}
          </ul>

          {/* Social Media Icons (Hidden on Mobile) */}
          {/* <div className="hidden lg:flex gap-4">
            <FaInstagram className="cursor-pointer hover:text-teal-600  dark:text-teal-50" />
            <FaTwitter className="cursor-pointer hover:text-teal-600  dark:text-teal-50" />
            <FaDiscord className="cursor-pointer hover:text-teal-600  dark:text-teal-50" />
            <FaWhatsapp className="cursor-pointer hover:text-teal-600  dark:text-teal-50" />
          </div> */}

          {/* Sign Up Button (Visible on Desktop) */}
          <button className="hidden lg:block cursor-pointer uppercase bg-teal-600 text-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
            Sign up
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-900 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-2/3 bg-white p-6 shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } z-[9999]`}
        >
          <button
            className="text-gray-900 text-2xl absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>

          <ul className="flex flex-col gap-6 text-lg mt-10">
          <Link to="/Dashboard/Home">
              <li className="cursor-pointer hover:text-teal-600  dark:text-teal-50">Dashboard</li>
            </Link>
            <Link to="/Dashboard/settings">
              <li className="cursor-pointer hover:text-teal-600  dark:text-teal-50">Settings</li>
            </Link>
            <Link to="/Dashboard/profile">
              <li className="cursor-pointer hover:text-teal-600  dark:text-teal-50">Profile</li>
            </Link>
            {/* <Link to="/news">
              <li className="cursor-pointer hover:text-teal-600  dark:text-teal-50">News</li>
            </Link> */}
          </ul>

          {/* Social Media Icons in Mobile Menu */}
          {/* <div className="flex gap-4 mt-6">
            <FaInstagram className="cursor-pointer hover:text-teal-600  dark:text-teal-50" />
            <FaTwitter className="cursor-pointer hover:text-teal-600  dark:text-teal-50" />
            <FaDiscord className="cursor-pointer hover:text-teal-600  dark:text-teal-50" />
            <FaWhatsapp className="cursor-pointer hover:text-teal-600  dark:text-teal-50" />
          </div> */}

          {/* Sign Up Button in Mobile Menu */}
          <div className="mt-6">
            <button className="w-full cursor-pointer uppercase bg-teal-600 text-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
