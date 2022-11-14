import { languagesType } from "src/types/types";

//Props of component languageType
interface Props {
  language: languagesType | null;
}
//Interface all languages available
interface ILanguageColor {
  JavaScript: string;
  CSS: string;
  HTML: string;
  PHP: string;
  General: string;
  TypeScript: string;
  Ruby: string;
}
const RepositoryLanguage = ({ language }: Props) => {
  //If no language specified general type
  const languageTypes = language ?? "General";
  //bg-color according to the type
  const languageColor: ILanguageColor = {
    JavaScript: "bg-yellow-400",
    CSS: "bg-orange-400",
    HTML: "bg-blue-400",
    PHP: "bg-purple-400",
    General: "bg-black",
    TypeScript: "bg-blue-600",
    Ruby: "bg-red-400",
  };
  return (
    <>
      <div
        className={`mr-1 h-3 w-3 rounded-full ${
          languageColor[languageTypes as keyof ILanguageColor]
            ? languageColor[languageTypes as keyof ILanguageColor]
            : "bg-black"
        }`}
      ></div>
      <p>{languageTypes}</p>
    </>
  );
};

export default RepositoryLanguage;
