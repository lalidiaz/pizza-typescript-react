import { useState } from "react";
import menu from "../data/menu.json";
import { Link } from "react-router-dom";
import { IoPizzaOutline } from "react-icons/io5";
import { Rotate as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    opened: {
      top: "-100vh",
      backgroundColor: "blue",
    },
    closed: {
      top: 0,
    },
  };
  return (
    <header>
      <div className="header-burger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <motion.ul
        initial={false}
        animate={isOpen ? "opened" : "closed"}
        variants={menuVariants}
        className="header-menu-content"
      >
        <div className="header-icon">
          <li>
            <Link to="/">
              <IoPizzaOutline size={40} color="black" />
            </Link>
          </li>
        </div>
        {menu.map((item) => {
          const { id, url, name } = item;
          return (
            <li className="header-link-menu">
              <Link to={url} key={id}>
                {name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </header>
  );
};

export default Header;
