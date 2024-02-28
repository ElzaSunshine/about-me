import { FC } from "react";
import "./HobbiesItem.scss";

interface HobbiesItemProps {
  img: JSX.Element;
  title: string;
}

const HobbiesItem: FC<HobbiesItemProps> = ({ img, title }) => {
  return (
    <div className="hobbies-item">
      <div className="hobbies-item__img-wr">
        <div className="hobbies-item__img">{img}</div>
      </div>
      <div className="hobbies-item__info">
        <div className="hobbies-item__title">{title}</div>
      </div>
    </div>
  );
};

export default HobbiesItem;
