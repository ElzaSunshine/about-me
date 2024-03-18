import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Languages from "./components/Languages/Languages";
import Hobbies from "./components/Hobbies/Hobbies";
import { contacts, hobbies, languages, socials } from "../../data/data";
import "./Aside.scss";

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
