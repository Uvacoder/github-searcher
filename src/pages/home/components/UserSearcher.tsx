import { useState, useEffect } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getUsers } from "src/api/api";
import IUserGithub from "src/interfaces/User";
import { Link } from "react-router-dom";
const UserSearcher = () => {
  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useState<string>("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setUser(query);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  const { data, isLoading, isError }: UseQueryResult<IUserGithub, Error> =
    useQuery<IUserGithub, Error>(["users", user], () => getUsers(user), {
      enabled: user ? true : false,
    });

  if (isLoading) {
    console.log("Is loading");
  } else if (isError) {
    console.log("ERROR");
  }
  return (
    <section className="searcher-users flex h-full items-center justify-center">
      <div className="flex h-full w-1/2 flex-col bg-slate-100">
        <section className="searcher-users__form">
          <form action="" method="get">
            <input
              type="text"
              className="border"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </form>
        </section>
        <section className="searcher-users__result p-8">
          <section className="result-users__content flex">
            <div>
              <img
                src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668365793/github-searcher/perfil_d0l6zs.jpg"
                alt=""
                className="w-64 rounded-full"
              />
            </div>
            <section>
              <h2>@ivan-escribano</h2>
              <h3>Ivan Escribano.</h3>
              <p>
                I’m Ivan a programmer that loves the MERN stack and wants to
                keep improving always and learn, I’m a very hard working person
              </p>
              <div className="flex flex-col">
                <span>11 followers</span>
                <span>15 public repos</span>
              </div>
              <p className="text-left">Barcelona , Spain</p>
            </section>
          </section>
          <div className="result-users__links">
            <Link to={"/repos"} state={"ivan-escribano"}>
              <button>View repos</button>
            </Link>
            <button>View profile</button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default UserSearcher;
