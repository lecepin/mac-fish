import React from "react";
import { ipcRenderer } from "electron";
import CONST from "./../const";
import Loading from "./components/loading";
import Sys from "./components/sys";
import Net from "./components/net";
import File from "./components/file";
import Battery from "./components/battery";

import "./fish.less";

export default class Fish extends React.Component {
  state = {
    fishConfig: {},
  };

  componentDidMount() {
    this.setState({
      fishConfig: JSON.parse(localStorage.getItem("fish_config")),
    });
  }

  render() {
    const { fishConfig } = this.state;

    return (
      <div className="fish">
        {fishConfig.type == "loading" ? (
          <Loading
            {...fishConfig}
            onDone={() => {
              ipcRenderer.send(CONST.CLOSE_FISH);
            }}
          />
        ) : null}
        {fishConfig.type == "sys" ? <Sys /> : null}
        {fishConfig.type == "net" ? <Net /> : null}
        {fishConfig.type == "file" ? <File /> : null}
        {fishConfig.type == "battery" ? <Battery /> : null}
      </div>
    );
  }
}
