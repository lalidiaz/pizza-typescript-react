import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
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
          <div className="cartContainer">
            <button
              className="btn"
              type="button"
              onClick={(e) => handleClick(e)}
            >
              <IoCartOutline size={25} />
              <span>{itemsCount} pizza(s)</span>
            </button>
            <div
              className="cartDropDown"
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
