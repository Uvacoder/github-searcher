import { FC } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
// Footer component
const Footer: FC = () => {
  return (
    <footer className="main-color__bg flex  flex-col items-center py-3 text-white">
      <div className="footer-icons py-2">
        <ul className="flex">
          <li className="px-3 text-2xl">
            <FaLinkedin />
          </li>
          <li className="px-3 text-2xl">
            <FaGithub />
          </li>
          <li className="px-3 text-2xl">
            <FaFacebook />
          </li>
          <li className="px-3 text-2xl">
            <FaInstagram />
          </li>
        </ul>
      </div>
      <p>© All rights reserved to Ivan Escribano</p>
    </footer>
  );
};

export default Footer;
