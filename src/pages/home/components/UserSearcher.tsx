import { useState } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useDebounce } from "src/hooks/useDebounce";
import { getUsers } from "src/api/api";
import IUserGithub from "src/interfaces/User";
import Loader from "src/components/loader/Loader";
import UserResult from "./UserResult";
import UserForm from "./UserForm";

const UserSearcher = () => {
  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useState<string>("");
  useDebounce(query, setUser);
  const {
    data,
    isLoading,
    isError,
    isSuccess,
  }: UseQueryResult<IUserGithub, Error> = useQuery<IUserGithub, Error>(
    ["users", user],
    () => getUsers(user),
    {
      enabled: user ? true : false,
    }
  );
  const result = (): JSX.Element | string => {
    if (query === "") {
      return "Start searching";
    } else if (isError) {
      return "No users found";
    } else if (isLoading) {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <Loader size={80} />
        </div>
      );
    } else if (isSuccess) {
      return <UserResult data={data} />;
    }
    return "Something went wrong, try again later";
  };
  return (
    <section className="searcher-users flex h-full items-center justify-center overflow-hidden rounded-lg py-3">
      <div className="flex h-full w-1/2 flex-col rounded-lg shadow-md shadow-slate-400">
        <section
          className="searcher-users__form flex flex-col justify-between rounded-lg bg-slate-100 p-5"
          style={{ flex: 1 }}
        >
          <UserForm query={query} setQuery={setQuery} />
        </section>
        <section
          className="searcher-users__result h-full p-8"
          style={{ flex: 4 }}
        >
          {result()}
        </section>
      </div>
    </section>
  );
};

export default UserSearcher;
