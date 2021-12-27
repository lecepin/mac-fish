import React from "react";

import "./index.less";

export default class Progress extends React.Component {
  render() {
    const { value = 0, style = {} } = this.props;

    return (
      <div className="progress" style={{ ...style }}>
        <div className="progress-value" style={{ width: value + "%" }}></div>
      </div>
    );
  }
}
