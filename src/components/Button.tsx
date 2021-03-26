import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="btn-component"
    >
      {title}
    </motion.button>
  );
};

export default Button;
