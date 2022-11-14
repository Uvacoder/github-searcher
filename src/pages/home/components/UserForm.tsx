import { FaSearch, FaUser } from "react-icons/fa";
interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
// Component to search usernames query state and setQuery to store data searching before making the petition
const UserForm = ({ query, setQuery }: Props) => {
  return (
    <>
      <form>
        <label htmlFor="searchUser" className="relative">
          <FaSearch className="absolute top-1 left-3 text-xl" />
          <input
            type="text"
            className=" h-10 w-full rounded-md border px-10"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            id="searchUser"
            placeholder="Search for the username, example: ivan-escribano "
          />
        </label>
      </form>
      <p className=" mt-10 flex w-fit cursor-pointer items-center border-b-2 border-b-blue-400 pb-2">
        <FaUser />
        <span className="ml-1">Users</span>
      </p>
    </>
  );
};

export default UserForm;
