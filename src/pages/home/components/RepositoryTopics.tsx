import React from "react";

interface Props {
  topic: string;
}
const RepositoryTopics = ({ topic }: Props) => {
  return (
    <div className="mr-2 rounded-md bg-sky-400 px-2  text-white">{topic}</div>
  );
};

export default RepositoryTopics;
