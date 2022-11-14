import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="flex p-5">
      <div className="nav-logo flex items-center">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668282611/github-searcher/github-logo_tiqikz.png"
          alt="Github logo"
          className="w-20"
        />
        <h1 className="text-xl font-medium">
          <span>Github </span>
          <span className="main-color__text font-semibold">Searcher</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
