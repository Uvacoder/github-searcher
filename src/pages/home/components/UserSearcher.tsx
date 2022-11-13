import { useState, useEffect } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getUsers } from "src/api/api";
import IUserGithub from "src/interfaces/User";
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
    <div>
      <form action="" method="get">
        <input
          type="text"
          className="border"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>
      {data ? JSON.stringify(data) : <p>Not found</p>}
    </div>
  );
};

export default UserSearcher;
