import React, { FC } from "react";
import "./LanguagesItem.scss";

export interface LanguagesItemProps {
  img: JSX.Element;
  title: string;
  subtitle: string | React.ReactElement;
}

const LanguagesItem: FC<LanguagesItemProps> = ({ img, title, subtitle }) => {
  return (
    <div className="lang-item">
      <div className="lang-item__img-wr">
        <div className="lang-item__img">{img}</div>
      </div>
      <div className="lang-item__info">
        <div className="lang-item__title">{title}</div>
        <div className="lang-item__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default LanguagesItem;
