import React from "react";

import { ReactComponent as ThreeDots } from "src/assets/icons/three-dots.svg";

import "src/biz-components/card/Card.scss";

interface Iprops {
  logo?: React.ReactNode;
  title: string;
  subtitle: string;
  teammateArray: Array<string>;
  teammateCount?: number;
  children?: React.ReactNode;
}

const Card: React.FC<Iprops> = ({
  title,
  subtitle,
  logo,
  teammateArray,
  teammateCount = 0,
  children,
}) => (
  <div>
    <div className="horizontal-flex align-flex-start card-content">
      <div className="horizontal-flex flex-auto">
        {logo && <div className="logo">{logo}</div>}
        <div className="full-width">
          <h5 className="title_1 card-title">{title}</h5>
          <div className="title_4 grey-font">{subtitle}</div>
        </div>
      </div>
      <ThreeDots className="cursor-pointer" />
    </div>
    {children}
    <div className="footer horizontal-flex align-center">
      {(teammateArray || []).map((path, index) => (
        <img src={path} alt="user" className="teammate" key={index} />
      ))}
      {!!teammateCount && (
        <div className="teammate-count">+{teammateCount}</div>
      )}
    </div>
  </div>
);

export default Card;
