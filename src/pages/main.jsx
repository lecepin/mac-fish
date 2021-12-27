import React from "react";
import { ipcRenderer } from "electron";
import CONST from "./../const";

import "./main.less";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        main
        <button
          onClick={() => {
            ipcRenderer.send(CONST.OPEN_FISH);
          }}
        >
          run fish
        </button>
      </div>
    );
  }
}
