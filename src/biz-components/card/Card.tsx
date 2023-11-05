import React from "react";

import { ReactComponent as ThreeDots } from "src/assets/icons/three-dots.svg";

import "src/biz-components/card/Card.scss";

interface Iprops {
  logo?: React.ReactNode;
  title: string;
  subtitle: string;
  teammateArray: Array<string>;
  teammateCount?: number;
}

const Card: React.FC<Iprops> = ({
  title,
  subtitle,
  logo,
  teammateArray,
  teammateCount = 0,
}) => (
  <div>
    <div className="horizontal-flex justify-space-between align-flex-start">
      <div className="horizontal-flex">
        {logo && <div className="logo">{logo}</div>}
        <div>
          <h5 className="title_2">{title}</h5>
          <div className="title_4 grey-font">{subtitle}</div>
        </div>
      </div>
      <ThreeDots className="cursor-pointer" />
    </div>
    <div>
      {(teammateArray || []).map((path) => (
        <img src={path} alt="user" className="teammate" />
      ))}
      {!!teammateCount && <span>{teammateCount}</span>}
    </div>
  </div>
);

export default Card;
