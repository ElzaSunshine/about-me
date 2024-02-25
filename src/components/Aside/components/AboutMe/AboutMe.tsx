import React from "react";
import photo from "./../../../../assets/me.jpg";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about__img">
        <img src={photo} alt={"Elza Sunshine"} />
      </div>
      <div className="about__info">
        <h1 className="about__name">{"Elza Sunshine"}</h1>
        <div className="about__desciption">
          {
            "A well-organized, creative and goaloriented frontend developer possessing excellent communication, problem-solving and leadership skills "
          }
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
