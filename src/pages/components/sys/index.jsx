import React from "react";
import svgForbid from "./forbid.svg";

import "./index.less";

export default class Sys extends React.Component {
  render() {
    return (
      <div className="sys">
        <img src={svgForbid} />
      </div>
    );
  }
}
