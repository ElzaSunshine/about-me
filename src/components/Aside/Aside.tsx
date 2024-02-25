import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import "./Aside.scss";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Languages from "./components/Languages/Languages";
import Hobbies from "./components/Hobbies/Hobbies";

const Aside = () => {
  return (
    <aside className={"container_gray"}>
      <AboutMe />
      <div className="aside-blocks">
        <Contacts />
        <Socials />
        <Languages />
        <Hobbies />
      </div>
    </aside>
  );
};

export default Aside;
