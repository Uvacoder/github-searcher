import { useQuery, UseQueryResult } from "@tanstack/react-query";
import IRepositories from "src/interfaces/Repository";
import { getRepositories } from "src/api/api";

const RepositorySearcher = () => {
  const { data }: UseQueryResult<IRepositories, Error> = useQuery<
    IRepositories,
    Error
  >(["repositories"], () => getRepositories("ivan-escribano"));
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
};

export default RepositorySearcher;
