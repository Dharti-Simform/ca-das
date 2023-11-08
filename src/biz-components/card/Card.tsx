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

/* 
!TO-DO:
1. Teammate count size issue
*/

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
          {/* !TO-DO: Flex grow or width not working */}
          <h5 className="title_2 card-title">{title}</h5>
          <div className="title_4 grey-font">{subtitle}</div>
        </div>
      </div>
      <ThreeDots className="cursor-pointer" />
    </div>
    <div className="footer horizontal-flex align-center">
      {(teammateArray || []).map((path) => (
        <img src={path} alt="user" className="teammate" />
      ))}
      {!!teammateCount && (
        <div className="teammate-count">+{teammateCount}</div>
      )}
    </div>
  </div>
);

export default Card;
