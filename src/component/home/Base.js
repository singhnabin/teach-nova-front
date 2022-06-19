import React from "react";
import Header from "../Header";

function Base({ children }) {
  return (
    <div>
      <Header />
      <div className="base_child">{children}</div>
    </div>
  );
}

export default Base;
