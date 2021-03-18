import menu from "../data/menu.json";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <h1>Italian Pizza</h1>
      <div className="menu-options">
        {menu.map((item) => {
          return (
            <ul>
              <li key={item.id}>{item.name}</li>
            </ul>
          );
        })}

        <span className="cart">
          <IoCartOutline size={25} />
        </span>
      </div>
    </header>
  );
};

export default Header;
