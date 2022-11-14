import { useEffect } from "react";
/**
 * Debounce function to wait certain time to do a petition
 * Used to limit the petitions to API and performance
 * @param  {string} query
 * @param  {React.Dispatch<React.SetStateAction<string>>} setUser
 */
export const useDebounce = (
  query: string,
  setUser: React.Dispatch<React.SetStateAction<string>>
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setUser(query);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);
};
