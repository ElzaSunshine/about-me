import React, { FC } from "react";
import "./ToolsItem.scss";
import { ToolsItemProps } from "../Tools/Tools";

const ToolsItem: FC<ToolsItemProps> = ({ img, title, subtitle }) => {
  return (
    <div className={`tools-item`}>
      <div className="tools-item__img">
        <img src={img} alt={title} />
      </div>
      <div className="tools-item__title">{title}</div>
      <div className="tools-item__sub-title">{subtitle}</div>
    </div>
  );
};

export default ToolsItem;
