import React from "react";
import svgNet from "./net.svg";

import "./index.less";

export default class Net extends React.Component {
  render() {
    return (
      <div className="net">
        <img src={svgNet} />
      </div>
    );
  }
}
