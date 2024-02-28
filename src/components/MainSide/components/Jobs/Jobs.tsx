import { FC } from "react";
import "./Jobs.scss";
import JobsItem from "../JobsItem/JobsItem";

interface JobsProps {
  jobs: JobsItemProps[];
}

export interface JobsItemProps {
  img: string;
  title: string;
  subtitle: string;
  years: string;
  link: string;
}

const Jobs: FC<JobsProps> = ({ jobs }) => {
  return (
    <div className="jobs">
      {jobs.map((job, index) => {
        return (
          <JobsItem
            key={index}
            img={job.img}
            title={job.title}
            subtitle={job.subtitle}
            link={job.link}
            years={job.years}
          />
        );
      })}
    </div>
  );
};

export default Jobs;
