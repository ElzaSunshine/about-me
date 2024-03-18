import AboutMe from "./components/AboutMe/AboutMe";
import "./Aside.scss";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Languages from "./components/Languages/Languages";
import Hobbies from "./components/Hobbies/Hobbies";
import MailIcon from "../../assets/contacts/MailIcon";
import PhoneIcon from "../../assets/contacts/PhoneIcon";
import LocationIcon from "../../assets/contacts/LocationIcon";
import DrawingIcon from "../../assets/hobbies/DrawingIcon";
import BookIcon from "../../assets/hobbies/BookIcon";
import SportIcon from "../../assets/hobbies/SportIcon";
import TravellingIcon from "../../assets/hobbies/TravellingIcon";
import Russian from "../../assets/languages/Russian";
import English from "../../assets/languages/English";
import Instagram from "../../assets/socials/Instagram";
import Github from "../../assets/socials/Github";

const contacts = [
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

const socials = [
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

const languages = [
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

const hobbies = [
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

const Aside = () => {
  return (
    <aside className={"container_gray"}>
      <AboutMe />
      <div className="aside-blocks">
        <Contacts contacts={contacts} />
        <Socials socials={socials} />
        <Languages languages={languages} />
        <Hobbies hobbies={hobbies} />
      </div>
    </aside>
  );
};

export default Aside;
