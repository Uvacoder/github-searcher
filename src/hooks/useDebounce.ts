import { useEffect } from "react";

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
