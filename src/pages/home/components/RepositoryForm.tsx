import { IFilterStates } from "src/interfaces/FilterStates";
import { languagesType, sortType } from "src/types/types";
import { Link } from "react-router-dom";
import { FaUser, FaLaptopCode, FaSearch } from "react-icons/fa";
//Component dedicated for the repository search, inputs , select etc...
//Filter states reference to all values needed to this form to work
const RepositoryForm = ({ filtersStates }: IFilterStates) => {
  return (
    <section
      className="flex flex-col justify-between bg-slate-50 p-5 "
      style={{ flex: 1 }}
    >
      <label htmlFor="repoName" className="relative">
        <FaSearch className="absolute top-2 left-3 text-xl" />
        <input
          type="text"
          value={filtersStates.filterName}
          id={"repoName"}
          onChange={(e) => filtersStates.setFilterName(e.target.value)}
          className="h-8 w-full rounded-md border px-10"
        />
      </label>
      <div className=" flex flex-col justify-between md:flex-row">
        <div className="ml-5 flex pb-4 md:ml-0 md:pb-0">
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
              value={filtersStates.filterLanguage}
              onChange={(e) =>
                filtersStates.setFilterLanguage(e.target.value as languagesType)
              }
              id="languageRepo"
              className="text rounded-md bg-slate-200 text-sm md:p-1 md:text-base"
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
              value={filtersStates.sort}
              onChange={(e) =>
                filtersStates.setSort(e.target.value as sortType)
              }
              id="sortRepo"
              className="text rounded-md bg-slate-200 text-sm md:p-1 md:text-base"
            >
              <option value="ascending">ascending</option>
              <option value="descendant">descendant</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
};

export default RepositoryForm;
