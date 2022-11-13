import { FC } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex h-full flex-col justify-between">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </section>
  );
};

export default Layout;
