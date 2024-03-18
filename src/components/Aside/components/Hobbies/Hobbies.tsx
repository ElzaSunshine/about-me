import { FC } from "react";
import AsideBlockTitle from "../AsideBlockTitle/AsideBlockTitle";
import HobbiesItem, { HobbiesItemProps } from "../HobbiesItem/HobbiesItem";

interface HobbiesProps {
  hobbies: HobbiesItemProps[];
}
const Hobbies: FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div className="contact aside-item">
      <AsideBlockTitle title="Hobbies" />

      {hobbies.map((hobbie) => {
        return (
          <div className="contact__item">
            <HobbiesItem img={hobbie.img} title={hobbie.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Hobbies;
