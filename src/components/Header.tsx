import menu from "../data/menu.json";
import { Link } from "react-router-dom";
import { IoPizzaOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <IoPizzaOutline size={40} color="white" />
      </Link>
      <div className="menu-options">
        <ul>
          {menu.map((item) => {
            const { id, url, name } = item;
            return (
              <li className="link-menu">
                <Link to={url} key={id}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
