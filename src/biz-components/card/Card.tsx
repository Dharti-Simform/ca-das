import React from "react";

import "../card/Card.scss";
import classNames from "classnames";

export type CardType = "xl" | "lg" | "md" | "sm";

export enum CardBGType {
  white = "white",
  grey = "grey",
}

interface IProps {
  children: React.ReactNode;
  bg?: CardBGType;
  type?: CardType;
  hideRightBorderRadius?: boolean;
}

const Card: React.FC<IProps> = ({
  children,
  bg = CardBGType.white,
  type = "lg",
  hideRightBorderRadius = false,
}) => (
  <div
    className={classNames("card", `card-${type}`, {
      "card-grey": bg === CardBGType.grey,
      "no-right-radius": hideRightBorderRadius,
    })}
  >
    {children}
  </div>
);

export default Card;
