import menu from "../data/menu.json";
import Cart from "./Cart";

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
          <Cart isOpen={false} />
        </span>
      </div>
    </header>
  );
};

export default Header;
