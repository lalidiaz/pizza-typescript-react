import { useState } from "react";
import menu from "../data/menu.json";
import { Link } from "react-router-dom";
import { IoPizzaOutline } from "react-icons/io5";
import { Rotate as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="header-menu-options">
        <Link to="/">
          <IoPizzaOutline size={40} color="white" />
        </Link>
        <div className="header-burger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="header-menu-content">
          <ul>
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
