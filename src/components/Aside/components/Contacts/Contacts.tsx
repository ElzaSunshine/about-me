import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import LocationIcon from "../../../../assets/contacts/LocationIcon";
import MailIcon from "../../../../assets/contacts/MailIcon";
import PhoneIcon from "../../../../assets/contacts/PhoneIcon";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contact aside-item">
      <div className="contact__item">
        <ContactItem
          img={<MailIcon />}
          title={"Email"}
          link={
            <a href="mailto:elizachka666@gmail.com">
              {"elizachka666@gmail.com"}
            </a>
          }
        />
      </div>
      <div className="contact__item">
        <ContactItem
          img={<PhoneIcon />}
          title={"Phone"}
          link={<a href="tel:+79272574737">{"+79272574737"}</a>}
        />
      </div>
      <div className="contact__item">
        <ContactItem
          img={<LocationIcon />}
          title={"Address"}
          link={"Russia, Kazan"}
        />
      </div>
    </div>
  );
};

export default Contacts;
