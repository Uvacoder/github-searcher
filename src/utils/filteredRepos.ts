import { IFilterValues } from "src/interfaces/FilterValues";
import IRepositories from "src/interfaces/Repository";
/**
 * function to filter repositories by name , language and sorting
 * @param  {IFilterValues} filterValues
 * @return Array IRepositories
 */
export const filteredRepos = (
  filterValues: IFilterValues
): IRepositories[] | undefined => {
  const filtered = filterValues.data
    ?.filter((repo) => {
      if (repo.name === "") return repo;
      else if (repo.name.includes(filterValues.filterName)) {
        return repo;
      }
    })
    ?.filter((repo) => {
      if (filterValues.filterLanguage === "all") return repo;
      else if (repo.language === filterValues.filterLanguage) return repo;
    })
    .sort((repoA, repoB) => {
      if (filterValues.sort === "ascending") {
        return repoA.name.localeCompare(repoB.name);
      } else {
        return repoB.name.localeCompare(repoA.name);
      }
    });
  return filtered;
};
