import AsideBlockTitle from "../AsideBlockTitle/AsideBlockTitle";
import HobbiesItem from "../HobbiesItem/HobbiesItem";
import DrawingIcon from "../../../../assets/hobbies/DrawingIcon";
import BookIcon from "../../../../assets/hobbies/BookIcon";
import SportIcon from "../../../../assets/hobbies/SportIcon";
import TravellingIcon from "../../../../assets/hobbies/TravellingIcon";

const Hobbies = () => {
  return (
    <div className="contact aside-item">
      <AsideBlockTitle title="Hobbies" />
      <div className="contact__item"></div>
      <div className="contact__item">
        <HobbiesItem img={<DrawingIcon />} title={"Drawing"} />
      </div>
      <div className="contact__item">
        <HobbiesItem img={<BookIcon />} title={"Reading books"} />
      </div>

      <div className="contact__item">
        <HobbiesItem img={<SportIcon />} title={"Pole dance"} />
      </div>

      <div className="contact__item">
        <HobbiesItem img={<TravellingIcon />} title={"Travelling"} />
      </div>
    </div>
  );
};

export default Hobbies;
