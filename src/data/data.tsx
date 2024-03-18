import LocationIcon from "../assets/contacts/LocationIcon";
import MailIcon from "../assets/contacts/MailIcon";
import PhoneIcon from "../assets/contacts/PhoneIcon";
import BookIcon from "../assets/hobbies/BookIcon";
import DrawingIcon from "../assets/hobbies/DrawingIcon";
import SportIcon from "../assets/hobbies/SportIcon";
import TravellingIcon from "../assets/hobbies/TravellingIcon";
import English from "../assets/languages/English";
import Russian from "../assets/languages/Russian";
import Github from "../assets/socials/Github";
import Instagram from "../assets/socials/Instagram";

import Css from "../assets/tools/css.png";
import Figma from "../assets/tools/figma.png";
import Html from "../assets/tools/html.png";
import Notion from "../assets/tools/notion.png";
import Vscode from "../assets/tools/vscode.png";
import Jira from "../assets/tools/Jira.png";
import Sass from "../assets/tools/sass.png";
import TS from "../assets/tools/ts.png";
import AI from "../assets/tools/ai.png";
import JS from "../assets/tools/js.png";

import direkt from "../assets/jobs/direkt.jpeg";
import imot from "../assets/jobs/imot.png";

export const contacts = [
  {
    img: <MailIcon />,
    title: "Email",
    link: (
      <a href="mailto:elizachka666@gmail.com">{"elizachka666@gmail.com"}</a>
    ),
  },

  {
    img: <PhoneIcon />,
    title: "Phone",
    link: <a href="tel:+79272574737">{"+79272574737"}</a>,
  },

  {
    img: <LocationIcon />,
    title: "Address",
    link: "Russia, Kazan",
  },
];

export const socials = [
  {
    img: <Instagram />,
    title: "Instagram",
    link: (
      <a href="https://www.instagram.com/elza_sunshine_" target="_blank">
        {"@elza_sunshine_"}
      </a>
    ),
  },
  {
    img: <Github />,
    title: "Github",
    link: (
      <a href="https://github.com/ElzaSunshine" target="_blank">
        {"ElzaSunshine"}
      </a>
    ),
  },
];

export const languages = [
  {
    img: <Russian />,
    title: "Russian",
    subtitle: "Native",
  },
  {
    img: <English />,
    title: "English",
    subtitle: "B1",
  },
];

export const hobbies = [
  {
    img: <DrawingIcon />,
    title: "Drawing",
  },
  {
    img: <BookIcon />,
    title: "Reading books",
  },
  {
    img: <SportIcon />,
    title: "Pole dance",
  },
  {
    img: <TravellingIcon />,
    title: "Travelling",
  },
];

export const tools = [
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

export const jobs = [
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
