import { FC } from "react";
import ContactItem, { ContactItemProps } from "../ContactItem/ContactItem";
import AsideBlockTitle from "../AsideBlockTitle/AsideBlockTitle";

interface SocialsProps {
  socials: ContactItemProps[];
}

const Socials: FC<SocialsProps> = ({ socials }) => {
  return (
    <div className="contact aside-item">
      <AsideBlockTitle title="Socials" />

      {socials.map((social) => {
        return (
          <div className="contact__item">
            <ContactItem
              img={social.img}
              title={social.title}
              link={social.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
