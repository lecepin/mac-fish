import React from "react";
import Main from "./pages/main";
import Fish from "./pages/fish";

import "antd/dist/antd.css";

export default () => {
  const qs = new URLSearchParams(location.search);

  return qs.get("fish") === null ? <Main /> : <Fish />;
};
