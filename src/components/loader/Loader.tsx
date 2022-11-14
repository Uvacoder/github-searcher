import { Jelly } from "@uiball/loaders";
import { FC } from "react";
interface Props {
  size: number;
}
// Loader waiting to Api response
const Loader = ({ size }: Props) => {
  return (
    <div>
      <Jelly size={size} speed={0.9} color="#00c6ff" />
      <h1 className="mt-5 text-2xl">Loading...</h1>
    </div>
  );
};

export default Loader;
