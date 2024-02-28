import { FC } from "react";
import ToolsItem from "../ToolsItem/ToolsItem";
import "./Tools.scss";

interface ToolsProps {
  tools: ToolsItemProps[];
}

export interface ToolsItemProps {
  img: string;
  title: string;
  subtitle: string;
}

const Tools: FC<ToolsProps> = ({ tools }) => {
  return (
    <div className="tools">
      {tools.map((tool, index) => {
        return (
          <ToolsItem
            key={index}
            img={tool.img}
            title={tool.title}
            subtitle={tool.subtitle}
          />
        );
      })}
    </div>
  );
};

export default Tools;
