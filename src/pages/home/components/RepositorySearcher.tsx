import { useQuery, UseQueryResult } from "@tanstack/react-query";
import IRepositories from "src/interfaces/Repository";
import { getRepositories } from "src/api/api";
import { useLocation } from "react-router-dom";
import Repository from "./Repository";
import { useState } from "react";
import { languagesType, sortType } from "src/types/types";
const RepositorySearcher = () => {
  const [filterName, setFilterName] = useState<string>("");
  const [filterLanguage, setFilterLanguage] = useState<languagesType>("all");
  const [sort, setSort] = useState<sortType>("ascending");

  const { state: user } = useLocation();

  const { data, isLoading }: UseQueryResult<IRepositories[], Error> = useQuery<
    IRepositories[],
    Error
  >(["repositories"], () => getRepositories(user));

  const filteredRepos = (): JSX.Element[] | undefined => {
    const filtered = data
      ?.filter((repo) => {
        if (repo.name === "") return repo;
        else if (repo.name.includes(filterName)) {
          return repo;
        }
      })
      ?.filter((repo) => {
        if (filterLanguage === "all") return repo;
        else if (repo.language === filterLanguage) return repo;
      })
      .sort((repoA, repoB) => {
        if (sort === "ascending") {
          return repoA.name.localeCompare(repoB.name);
        } else {
          return repoB.name.localeCompare(repoA.name);
        }
      })
      .map((repo) => <Repository repos={repo} />);
    return filtered;
  };
  console.log(filteredRepos());
  if (isLoading) {
    return <p>IS LOADING....</p>;
  }
  return (
    <>
      <div>
        Name:
        <input
          type="text"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        Language:
        <select
          value={filterLanguage}
          onChange={(e) => setFilterLanguage(e.target.value as languagesType)}
        >
          <option value="all">all</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="PHP">PHP</option>
        </select>
        Sort:
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as sortType)}
        >
          <option value="ascending">ascending</option>
          <option value="descendant">descendant</option>
        </select>
        {filteredRepos()}
      </div>
    </>
  );
};

export default RepositorySearcher;
