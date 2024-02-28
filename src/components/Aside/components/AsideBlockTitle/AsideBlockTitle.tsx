import { FC } from "react";
import "./AsideBlockTitle.scss";

interface AsideBlockTitleProps {
  title: string;
}

const AsideBlockTitle: FC<AsideBlockTitleProps> = ({ title }) => {
  return <div className="aside-block__title">{title}</div>;
};

export default AsideBlockTitle;
