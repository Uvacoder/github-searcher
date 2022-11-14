import { useQuery, UseQueryResult } from "@tanstack/react-query";
import IRepositories from "src/interfaces/Repository";
import { getRepositories } from "src/api/api";
import { Link, useLocation } from "react-router-dom";
import Repository from "./Repository";
import { useState } from "react";
import { languagesType, sortType } from "src/types/types";
import { FaUser, FaLaptopCode, FaSearch } from "react-icons/fa";
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
      <section className="flex h-full w-full justify-center overflow-hidden pb-5">
        <section className="flex w-2/5 flex-col rounded-lg   shadow-sm shadow-slate-400">
          <section
            className="flex flex-col justify-between bg-slate-50 p-5 "
            style={{ flex: 1 }}
          >
            <label htmlFor="repoName" className="relative">
              <FaSearch className="absolute top-2 left-3 text-xl" />
              <input
                type="text"
                value={filterName}
                id={"repoName"}
                onChange={(e) => setFilterName(e.target.value)}
                className="h-8 w-full rounded-md border px-10"
              />
            </label>
            <div className=" flex justify-between">
              <div className="flex">
                <Link to={"/users"}>
                  <p className="mr-8 flex items-center">
                    <FaUser className="mr-1" />
                    Users
                  </p>
                </Link>
                <p className="mr-2 flex cursor-pointer items-center border-b-2 border-b-blue-400 pb-1">
                  <FaLaptopCode className="mr-1" />
                  <span>Repos</span>
                </p>
              </div>
              <div>
                <label htmlFor="languageRepo" className="ml-4">
                  <span className="mr-2"> Language:</span>
                  <select
                    value={filterLanguage}
                    onChange={(e) =>
                      setFilterLanguage(e.target.value as languagesType)
                    }
                    id="languageRepo"
                    className="rounded-md"
                  >
                    <option value="all">all</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="PHP">PHP</option>
                  </select>
                </label>
                <label htmlFor="sortRepo" className="ml-4">
                  <span className="mr-2"> Sort:</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as sortType)}
                    id="sortRepo"
                    className="rounded-md"
                  >
                    <option value="ascending">ascending</option>
                    <option value="descendant">descendant</option>
                  </select>
                </label>
              </div>
            </div>
          </section>
          <section
            className="overflow-y-auto  bg-slate-100 py-3"
            style={{ flex: 4 }}
          >
            {filteredRepos()}
          </section>
        </section>
      </section>
    </>
  );
};

export default RepositorySearcher;
