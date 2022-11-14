import IRepositories from "./Repository";
export interface IFilterValues {
  filterName: string;
  filterLanguage: string;
  sort: string;
  data: IRepositories[] | undefined;
}
