import React from "react";

import "../card-layout/CardLayout.scss";
import classNames from "classnames";

/* Padding for sizes
xl: 48px
lg: 24px
md: 16px
sm: 8px
*/
export type CardSize = "xl" | "lg" | "md" | "sm";

export enum CardBGType {
  white = "white",
  grey = "grey",
}

interface IProps {
  children: React.ReactNode;
  bg?: CardBGType;
  size?: CardSize;
  hideRightBorderRadius?: boolean;
  hideBottomBorderRadius?: boolean;
  className?: string;
}

const CardLayout: React.FC<IProps> = ({
  children,
  bg = CardBGType.white,
  size = "lg",
  hideRightBorderRadius = false,
  hideBottomBorderRadius = false,
  className = "",
}) => (
  <div
    className={classNames(
      "card",
      `card-${size}`,
      {
        "card-grey": bg === CardBGType.grey,
        "card-white": bg === CardBGType.white,
        "no-right-radius": hideRightBorderRadius,
        "no-bottom-radius": hideBottomBorderRadius,
      },
      className
    )}
  >
    {children}
  </div>
);

export default CardLayout;
