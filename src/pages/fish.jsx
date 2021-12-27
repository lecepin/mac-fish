import React from "react";
import { ipcRenderer } from "electron";
import CONST from "./../const";

import "./fish.less";

export default class Fish extends React.Component {
  render() {
    return (
      <div className="fish">
        fish
        <button
          onClick={() => {
            ipcRenderer.send(CONST.CLOSE_FISH);
          }}
        >
          close fish
        </button>
      </div>
    );
  }
}
