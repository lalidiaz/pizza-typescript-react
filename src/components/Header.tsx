import menu from "../data/menu.json";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Italian Pizza</h1>
      </Link>
      <div className="menu-options">
        {menu.map((item) => {
          const { id, url, name } = item;
          return (
            <ul>
              <Link to={url} key={id}>
                {name}
              </Link>
            </ul>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
