import { languagesType } from "src/types/types";

interface Props {
  language: languagesType | null;
}
interface ILanguageColor {
  JavaScript: string;
  CSS: string;
  HTML: string;
  PHP: string;
  General: string;
}
const RepositoryLanguage = ({ language }: Props) => {
  const languageTypes = language ?? "General";
  const languageColor: ILanguageColor = {
    JavaScript: "bg-yellow-400",
    CSS: "bg-orange-400",
    HTML: "bg-blue-400",
    PHP: "bg-purple-400",
    General: "bg-black",
  };
  return (
    <>
      <div
        className={`mr-1 h-3 w-3 rounded-full ${
          languageColor[languageTypes as keyof ILanguageColor]
        }`}
      ></div>
      <p>{languageTypes}</p>
    </>
  );
  {
    language;
  }
};

export default RepositoryLanguage;
