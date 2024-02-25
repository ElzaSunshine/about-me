import React, { FC } from "react";
import "./JobsItems.scss";
import { JobsItemProps } from "../Jobs/Jobs";
import Link from "../../../../assets/Link.jsx";

const JobsItem: FC<JobsItemProps> = ({ img, title, subtitle, link, years }) => {
  return (
    <div className="job-item">
      <div className="job-item__flex">
        <div className="job-item__img">
          <img src={img} alt={title} />
        </div>
        <div>
          <div className="job-item__title">{title}</div>
          <div className="job-item__sub-title">{subtitle}</div>
          <div className="job-item__years">{years}</div>
        </div>
      </div>

      <a className="job-item__link" href={link} target="_blank">
        <span className="job-item__link-img">
          <Link />
        </span>
        <span>{link}</span>
      </a>
    </div>
  );
};

export default JobsItem;
