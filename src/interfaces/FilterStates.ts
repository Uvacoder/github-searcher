import { languagesType, sortType } from "src/types/types";

export interface IFilterStates {
  filtersStates: {
    filterName: string;
    setFilterName: React.Dispatch<React.SetStateAction<string>>;
    filterLanguage: string;
    setFilterLanguage: React.Dispatch<React.SetStateAction<languagesType>>;
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<sortType>>;
  };
}
