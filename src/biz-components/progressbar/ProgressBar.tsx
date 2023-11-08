import React from "react";

import "src/biz-components/progressbar/ProgressBar.scss";

interface IProps {
  percentage: number;
}

const ProgressBar: React.FC<IProps> = ({ percentage }) => (
  <div className="horizontal-flex justify-space-between">
    <div className="parent">
      <div className="child" style={{ width: `${percentage}%` }} />
    </div>
    <span className="title_3">{percentage}%</span>
  </div>
);

export default ProgressBar;
