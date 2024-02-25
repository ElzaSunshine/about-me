import React, { FC } from "react";
import LeftContur from "../LeftContur/LeftContur";
import "./Block.scss";

interface BlockProps {
  title: string;
  children: React.ReactElement;
}

const Block: FC<BlockProps> = ({ title, children }) => {
  return (
    <div className="block">
      <LeftContur />
      <div className="block__content">
        <h2 className="block__title">{title}</h2>
        {children}
      </div>
    </div>
  );
};
export default Block;
