import { FC } from "react";
import { FaSun, FaRegMoon } from "react-icons/fa";
const Navbar: FC = () => {
  return (
    <nav className="flex justify-between">
      <div className="nav-logo flex items-center">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668282611/github-searcher/github-logo_tiqikz.png"
          alt="Github logo"
          className="w-28"
        />
        <h1 className="text-xl font-medium">
          <span>Github </span>
          <span className="main-color__text font-semibold">Searcher</span>
        </h1>
      </div>
      <div className="nav-mode">
        <FaSun></FaSun>
      </div>
    </nav>
  );
};

export default Navbar;
