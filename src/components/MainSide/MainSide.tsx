import React from "react";
import "./MainSide.scss";
import Block from "./components/Block/Block";
import EducationItem from "./components/EducationItem/EducationItem";
import kgeu from "../../assets/educations/kgeu.jpg";
import Tools from "./components/Tools/Tools";
import {
  Css,
  Figma,
  Html,
  Notion,
  Vscode,
  Jira,
  Sass,
  TS,
  AI,
  JS,
} from "../../assets/tools/index.js";
import Jobs from "./components/Jobs/Jobs.js";
import { direkt, imot } from "../../assets/jobs/index.js";

const tools = [
  {
    title: "HTML",
    subtitle: "",
    img: Html,
  },
  {
    title: "CSS",
    subtitle: "",
    img: Css,
  },
  {
    title: "SCSS/SASS",
    subtitle: "",
    img: Sass,
  },
  {
    title: "JS",
    subtitle: "",
    img: JS,
  },
  {
    title: "TS",
    subtitle: "",
    img: TS,
  },
  {
    title: "VS Code",
    subtitle: "",
    img: Vscode,
  },
  {
    title: "Figma",
    subtitle: "",
    img: Figma,
  },
  {
    title: "Adobe Illustrator",
    subtitle: "",
    img: AI,
  },
  {
    title: "Jira",
    subtitle: "",
    img: Jira,
  },
  {
    title: "Notion",
    subtitle: "",
    img: Notion,
  },
];

const jobs = [
  {
    img: direkt,
    title: "Direkt",
    subtitle: "HTML layout designer",
    years: "December 2020 - May 2022",
    link: "https://direkt.ink/",
  },
  {
    img: imot,
    title: "Imot IO",
    subtitle: "Frontend Developer",
    years: "May 2022 - present time",
    link: "https://imot.io/ru",
  },
];

const MainSide = () => {
  return (
    <div className="main-side">
      <Block title="Education">
        <EducationItem
          educationTitle={"Kazan State Power Engineering University"}
          educationProfile={"Software Development Technologies"}
          educationYears={"2015 - 2020"}
          educationImg={kgeu}
        />
      </Block>
      <Block title="Tools/Skills">
        <Tools tools={tools} />
      </Block>
      <Block title="Latest jobs">
        <Jobs jobs={jobs} />
      </Block>
    </div>
  );
};
export default MainSide;
