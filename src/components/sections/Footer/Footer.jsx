import { Link } from "react-router";
import Logo from '../../../assets/images/white_logo.png';
import FooterImg from '../../../assets/images/footer_img.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div
      className=" bg-cover bg-center relative"
      style={{ backgroundImage: `url(${FooterImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div>
            <div className="container mx-auto pt-20 px-32  flex flex-col md:flex-row items-center justify-between ">
                {/* Logo */}
                <div className="">
                <Link to={"/"}>
                    <img src={Logo} alt="" className="w-24" />
                </Link>
                </div>
    
                {/* Links */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <Link to={"/"} className="text-white font-semibold hover:text-primary">
                    Home
                </Link>
                <Link to={"/about"} className="text-white font-semibold hover:text-primary">
                    About Us
                </Link>
                <Link to={"/programs"} className="text-white font-semibold hover:text-primary">
                    Programs
                </Link>
                <Link to={"/community"} className="text-white font-semibold hover:text-primary">
                    Community
                </Link>
                <Link to={"/contact"} className="text-white font-semibold hover:text-primary">
                    Contact Us
                </Link>
                </div>
            </div>

            <div className="container mx-auto py-10 mt-4  border-t-2 border-equiprGray max-w-5xl">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <FaXTwitter className="text-white text-2xl bg-primary w-8 h-8 p-1 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"/>
                        <IoLogoInstagram className="text-white text-2xl bg-primary w-8 h-8 p-1 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"/>
                    </div>
                    <p className="text-white text-sm">© 2025 EquipR. All rights reserved</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
