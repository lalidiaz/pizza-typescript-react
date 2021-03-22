import React from "react";

interface ButtonProps {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className="btn-landing">{title}</button>;
};

export default Button;
