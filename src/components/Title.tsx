import React from "react";

interface TitleProps {
  text: string;
}
const Title: React.FC<TitleProps> = ({ text }) => {
  return <h2 className="title-component">{text}</h2>;
};

export default Title;
