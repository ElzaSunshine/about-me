import React from "react";
import Russian from "../../../../assets/languages/Russian";
import English from "../../../../assets/languages/English";

import LanguagesItem from "../LanguagesItem/LanguagesItem";
import AsideBlockTitle from "../AsideBlockTitle/AsideBlockTitle";

const Languages = () => {
  return (
    <div className="contact aside-item">
      <AsideBlockTitle title={"Languages"} />
      <div className="contact__item">
        <LanguagesItem
          img={<Russian />}
          title={"Russian"}
          subtitle={"Native"}
        />
      </div>
      <div className="contact__item">
        <LanguagesItem img={<English />} title={"English"} subtitle={"B1"} />
      </div>
    </div>
  );
};

export default Languages;
