import { Link } from "react-router-dom";
//Home component first page
const Home = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <section className="w-full px-5 md:w-1/2">
        <h1 className="text-2xl">Start searching now !!</h1>
        <Link to={"/users"}>
          <input
            type="text"
            className="h-12 w-full  rounded-md border-2 border-solid"
            disabled={true}
          />
        </Link>
      </section>
    </section>
  );
};

export default Home;
