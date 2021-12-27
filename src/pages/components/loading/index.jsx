import React from "react";
import Progress from "./../progress";
import svgMac from "./mac.svg";

import "./index.less";

export default class Loading extends React.Component {
  state = {
    progress: 0,
  };

  componentDidMount() {
    const { progress, hasAutoClose, closeTime, hasRepeat, onDone } = this.props;
    this.setState({ progress: progress });

    if (hasAutoClose && closeTime) {
      const step = 100 / (closeTime * 60);

      this.timer = setInterval(() => {
        this.setState(
          {
            progress: this.state.progress + step,
          },
          () => {
            if (this.state.progress > 100) {
              if (hasRepeat) {
                this.setState({
                  progress: 0,
                });
              } else {
                clearInterval(this.timer);
                onDone?.();
              }
            }
          }
        );
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { text, hasWait } = this.props;
    const { progress } = this.state;

    return (
      <div className="loading">
        <img src={svgMac} />

        <Progress value={progress} style={{ marginTop: 70 }} />

        {text ? <div className="loading-text">{text}</div> : null}

        {hasWait ? (
          <div class="spinner">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
            <div class="bar7"></div>
            <div class="bar8"></div>
            <div class="bar9"></div>
            <div class="bar10"></div>
            <div class="bar11"></div>
            <div class="bar12"></div>
          </div>
        ) : null}
      </div>
    );
  }
}
