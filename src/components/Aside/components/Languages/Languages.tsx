import { FC } from "react";
import LanguagesItem, {
  LanguagesItemProps,
} from "../LanguagesItem/LanguagesItem";
import AsideBlockTitle from "../AsideBlockTitle/AsideBlockTitle";

interface LanguagesProps {
  languages: LanguagesItemProps[];
}

const Languages: FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className="contact aside-item">
      <AsideBlockTitle title={"Languages"} />
      {languages.map((lang) => {
        return (
          <div className="contact__item">
            <LanguagesItem
              img={lang.img}
              title={lang.title}
              subtitle={lang.subtitle}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
