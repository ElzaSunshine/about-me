import { FC } from "react";
import ContactItem, { ContactItemProps } from "../ContactItem/ContactItem";
import "./Contacts.scss";

interface ContactsProps {
  contacts: ContactItemProps[];
}

const Contacts: FC<ContactsProps> = ({ contacts }) => {
  return (
    <div className="contact aside-item">
      {contacts.map((contact) => {
        return (
          <div className="contact__item">
            <ContactItem
              img={contact.img}
              title={contact.title}
              link={contact.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
