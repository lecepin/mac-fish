import React from "react";
import svgFile from "./file.svg";

import "./index.less";

export default class File extends React.Component {
  render() {
    return (
      <div className="file">
        <img src={svgFile} />
      </div>
    );
  }
}
