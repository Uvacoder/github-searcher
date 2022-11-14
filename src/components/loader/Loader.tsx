import React from "react";
import { Jelly } from "@uiball/loaders";
interface Props {
  size: number;
}
const Loader = ({ size }: Props) => {
  return (
    <div>
      <Jelly size={size} speed={0.9} color="#00c6ff" />
      <h1 className="mt-5 text-2xl">Loading...</h1>
    </div>
  );
};

export default Loader;
