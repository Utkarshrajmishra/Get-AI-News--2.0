import Logo from "../assets/Logo/logosaas.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const NavSection = () => {
  return (
    <div className="bg-black flex items-center">
      <div className="container py-3 flex items-center justify-between">
        <img src={Logo} alt="Website Logo" className="w-12 h-12" />

        <nav className="flex gap-5 items-center">
          <FaGithub
            fontSize={23}
            className="text-opacity-60 text-white hover:text-opacity-100 transition"
          />
          <FaInstagram
            fontSize={23}
            className="text-opacity-60 text-white hover:text-opacity-100 transition"
          />
          <FaLinkedin
            fontSize={23}
            className="text-opacity-60 text-white hover:text-opacity-100 transition"
          />
          <FaTwitter
            fontSize={23}
            className="text-opacity-60 text-white hover:text-opacity-100 transition"
          />
        </nav>
      </div>
     
    </div>
  );
};

export default NavSection;
