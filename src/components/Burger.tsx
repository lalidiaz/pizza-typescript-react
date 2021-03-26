import { Rotate as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles";
import menu from "../data/menu.json";
import { IoPizzaOutline } from "react-icons/io5";

export default function Burger() {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: "-100vh",
    },
  };
  return (
    <>
      <nav>
        <div className="burger-container">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? "opened" : "closed"}
          variants={menuVariants}
          className="burger-menu"
        >
          <Link to="/">
            <IoPizzaOutline size={40} color="white" />
          </Link>
          <ul>
            {menu.map((item) => {
              const { id, url, name } = item;
              return (
                <li className="burger-link-menu">
                  <Link to={url} key={id}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </nav>
    </>
  );
}
