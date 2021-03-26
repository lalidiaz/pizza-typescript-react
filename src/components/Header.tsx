import menu from "../data/menu.json";
import { Link } from "react-router-dom";
import { IoPizzaOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <ul className="header-menu-content">
        <div className="header-icon">
          <Link to="/">
            <IoPizzaOutline size={40} color="black" />
          </Link>
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
      </ul>
    </header>
  );
};

export default Header;
