import React from "react";
import IRepositories from "src/interfaces/Repository";
interface Props {
  repos: IRepositories;
}
const Repository = ({ repos }: Props) => {
  return (
    <div>
      <p>{repos.name}</p>
      <p></p>
    </div>
  );
};

export default Repository;
