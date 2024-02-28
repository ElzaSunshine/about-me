import ContactItem from "../ContactItem/ContactItem";
import Instagram from "../../../../assets/socials/Instagram";
import Github from "../../../../assets/socials/Github";
import AsideBlockTitle from "../AsideBlockTitle/AsideBlockTitle";

const Socials = () => {
  return (
    <div className="contact aside-item">
      <AsideBlockTitle title="Socials" />
      <div className="contact__item">
        <ContactItem
          img={<Instagram />}
          title={"Instagram"}
          link={
            <a href="https://www.instagram.com/elza_sunshine_" target="_blank">
              {"@elza_sunshine_"}
            </a>
          }
        />
      </div>
      <div className="contact__item">
        <ContactItem
          img={<Github />}
          title={"Github"}
          link={
            <a href="https://github.com/ElzaSunshine" target="_blank">
              {"ElzaSunshine"}
            </a>
          }
        />
      </div>
    </div>
  );
};

export default Socials;
