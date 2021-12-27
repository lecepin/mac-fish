import React from "react";
import svgBattery from "./battery.svg";
import svgPlug from "./plug.svg";
import svgLight from "./light.svg";
import svgArrow from "./arrow.svg";

import "./index.less";

export default class Battery extends React.Component {
  render() {
    return (
      <div className="net">
        <img src={svgBattery} style={{ width: 200 }} />
        <div style={{ display: "flex", marginTop: -32 }}>
          <img
            src={svgPlug}
            style={{ width: 30, transform: "rotate(45deg)" }}
          />
          <img
            src={svgArrow}
            style={{ width: 15, transform: "rotate(180deg)", margin: "0 15px" }}
          />
          <img src={svgLight} style={{ width: 30 }} />
        </div>
      </div>
    );
  }
}
