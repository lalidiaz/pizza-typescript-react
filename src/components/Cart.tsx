import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppStateContext } from "../context/context";

interface Props {}

interface State {
  isOpen: boolean;
}

const Cart: React.FC<State> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {});

  return (
    <AppStateContext.Consumer>
      {(state) => {
        const itemsCount = state.cart.items.reduce((sum, item) => {
          return sum + item.quantity;
        }, 0);
        return (
          <div className="cart-container">
            <button
              className="cart-btn"
              type="button"
              onClick={(e) => handleClick(e)}
            >
              <AiOutlineShoppingCart size={25} />
              <span>{itemsCount} pizza(s)</span>
            </button>
            <div
              className="cart-dropdown"
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <ul>
                {state.cart.items.map((item) => {
                  const { id, name, quantity } = item;
                  return (
                    <li key={id}>
                      {name} &times; {quantity}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      }}
    </AppStateContext.Consumer>
  );
};

export default Cart;
