import { FC } from "react";
import "./EducationItem.scss";

interface EducationItemProps {
  educationTitle: string;
  educationProfile: string;
  educationYears: string;
  educationImg: string;
}

const EducationItem: FC<EducationItemProps> = ({
  educationTitle,
  educationProfile,
  educationYears,
  educationImg,
}) => {
  return (
    <div className="education__item">
      <div className="education__flex">
        <div className="education__img">
          <img src={educationImg} alt={educationTitle} />
        </div>
        <div className="education__title">{educationTitle}</div>
      </div>

      <div className="education__profile">{educationProfile}</div>
      <div className="education__years">{educationYears}</div>
    </div>
  );
};
export default EducationItem;
