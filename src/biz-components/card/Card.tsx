import React from "react";

import "../card/Card.scss";
import classNames from "classnames";

/* Padding for sizes
xl: 48px
lg: 24px
md: 16px
sm: 8px
*/
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
  className?: string;
}

const Card: React.FC<IProps> = ({
  children,
  bg = CardBGType.white,
  type = "lg",
  hideRightBorderRadius = false,
  className = "",
}) => (
  <div
    className={classNames(
      "card",
      `card-${type}`,
      {
        "card-grey": bg === CardBGType.grey,
        "no-right-radius": hideRightBorderRadius,
      },
      className
    )}
  >
    {children}
  </div>
);

export default Card;
