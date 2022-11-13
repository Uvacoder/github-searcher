import React from "react";
import Navbar from "src/components/navbar/Navbar";

const Home = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <section className="w-1/2">
        <h1 className="text-2xl">Start searching now !!</h1>
        <input
          type="text"
          className="h-12 w-full  rounded-md border-2 border-solid"
        />
      </section>
    </section>
  );
};

export default Home;
