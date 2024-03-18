import React, { FC } from "react";
import "./ContactItem.scss";

export interface ContactItemProps {
  img: JSX.Element;
  title: string;
  link: string | React.ReactElement;
}

const ContactItem: FC<ContactItemProps> = ({ img, title, link }) => {
  return (
    <div className="contact-item">
      <div className="contact-item__img-wr">
        <div className="contact-item__img">{img}</div>
      </div>
      <div className="contact-item__info">
        <div className="contact-item__title">{title}</div>
        <div className="contact-item__link">{link}</div>
      </div>
    </div>
  );
};

export default ContactItem;
