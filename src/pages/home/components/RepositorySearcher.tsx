import { useQuery, UseQueryResult } from "@tanstack/react-query";
import IRepositories from "src/interfaces/Repository";
import { getRepositories } from "src/api/api";
import { useLocation, useNavigate } from "react-router-dom";
import Repository from "./Repository";
import { useState } from "react";
import { languagesType, sortType } from "src/types/types";
import RepositoryForm from "./RepositoryForm";
import { IFilterValues } from "src/interfaces/FilterValues";
import { filteredRepos } from "src/utils/filteredRepos";
import Loader from "src/components/loader/Loader";
import { v4 as uuidv4 } from "uuid";

const RepositorySearcher = () => {
  const navigate = useNavigate();
  const [filterName, setFilterName] = useState<string>("");
  const [filterLanguage, setFilterLanguage] = useState<languagesType>("all");
  const [sort, setSort] = useState<sortType>("ascending");
  const { state: user } = useLocation();
  const { data, isLoading }: UseQueryResult<IRepositories[], Error> = useQuery<
    IRepositories[],
    Error
  >(["repositories", user], () => getRepositories(user));
  const filtersStates = {
    filterName,
    setFilterName,
    filterLanguage,
    setFilterLanguage,
    sort,
    setSort,
  };
  const filterValues: IFilterValues = {
    filterName,
    filterLanguage,
    sort,
    data,
  };
  if (!user) navigate("/users");
  return (
    <>
      <section className="flex h-full w-full justify-center overflow-hidden md:pb-5">
        <section className="flex flex-col rounded-lg   shadow-sm shadow-slate-400 md:w-2/5 ">
          <RepositoryForm filtersStates={filtersStates} />
          <section
            className="overflow-y-auto  bg-slate-100 py-3"
            style={{ flex: 4 }}
          >
            {isLoading ? (
              <div className="flex h-full w-full items-center justify-center">
                <Loader size={80} />
              </div>
            ) : data?.length === 0 ? (
              "No repositories at the moment"
            ) : (
              filteredRepos(filterValues)?.map((repo) => (
                <Repository repos={repo} key={uuidv4()} />
              ))
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default RepositorySearcher;
