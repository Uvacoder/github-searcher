import React from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getUsers } from "src/api/api";
import IUserGithub from "src/interfaces/User";
const UserSearcher = () => {
  const { data }: UseQueryResult<IUserGithub, Error> = useQuery<
    IUserGithub,
    Error
  >(["users"], () => getUsers("ivan-escribano"));
  return <div>{JSON.stringify(data)}</div>;
};

export default UserSearcher;
