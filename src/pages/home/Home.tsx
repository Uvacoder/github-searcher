import React from "react";
import Navbar from "src/components/navbar/Navbar";
import RepositorySearcher from "./components/RepositorySearcher";
import UserSearcher from "./components/UserSearcher";

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
      <h1 className="text-3xl">USERS</h1>
      <UserSearcher></UserSearcher>
      <h1 className="text-3xl">REPOS</h1>
      <RepositorySearcher></RepositorySearcher>
    </section>
  );
};

export default Home;
