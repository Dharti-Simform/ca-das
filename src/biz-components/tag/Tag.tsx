import classNames from "classnames";
import React from "react";

import "src/biz-components/tag/Tag.scss";

interface IProps {
  icon: React.ReactElement;
  text: string;
  className?: string;
  color?: "yellow" | "red" | "grey";
}

const Tag: React.FC<IProps> = ({
  icon,
  text,
  color = "grey",
  className = "",
}) => (
  <div
    className={classNames("tag", className, {
      "tag-grey": color === "grey",
      "tag-yellow": color === "yellow",
      "tag-red": color === "red",
    })}
  >
    {icon}
    <span>{text}</span>
  </div>
);

export default Tag;
