import React from "react";

const style = {
  "whiteSpace": "nowrap",
};

function ModuleNumber({ children }) {
  return (
    <span style={ style }>{ children }</span>
  );
}

export default ModuleNumber;
