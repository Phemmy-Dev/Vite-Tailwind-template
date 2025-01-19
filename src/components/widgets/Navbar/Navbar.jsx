import { Link } from "react-router";
import PropTypes from 'prop-types';
import Logo from '../../../assets/images/black_logo.png';
import { useState, useEffect } from 'react';

const Navbar = ({isTransparent}) => {

  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {

        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    // { name: "Programs", path: "/programs" },
    { name: "Community", path: "/community" },
    { name: "Contact Us", path: "/contact" }
  ];


  return (
    <div>
      <nav className={`${
        isTransparent && !isScrolled
          ? "bg-transparent text-white absolute top-0 left-0 w-full z-10"
          : "bg-white text-black shadow-md"
      }  px-6 py-0 md:h-[15vh]`}>
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="">
          <Link to={"/"}>
          <img src={Logo} alt="" className="w-24" />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
        {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-gray-700 font-semibold hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-2 border-primary h-1/2 rounded-lg">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="block px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100"
          >
            {link.name}
          </Link>
        ))}
      </div>
      )}
    </nav>
    </div>
  )
}

Navbar.propTypes = {
  isTransparent: PropTypes.bool
}

export default Navbar
