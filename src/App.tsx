import { FC } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

const App: FC = () => {
  return (
    <section className=" h-screen w-screen ">
      <Layout>
        <Home />
      </Layout>
    </section>
  );
};

export default App;
