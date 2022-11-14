import IRepositories from "./Repository";
//Interface for values of the elements inputs
export interface IFilterValues {
  filterName: string;
  filterLanguage: string;
  sort: string;
  data: IRepositories[] | undefined;
}
