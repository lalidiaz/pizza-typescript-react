import React from "react";

const Title: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ children }) => {
  return <h2 className="title-component">{children}</h2>;
};

export default Title;
