import React, { useState } from "react";
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

  return (
    <AppStateContext.Consumer>
      {(state) => {
        return (
          <div className="cartContainer">
            <button
              className="btn"
              type="button"
              onClick={(e) => handleClick(e)}
            >
              <IoCartOutline size={25} />
              <span>{state.cart.items.length} pizza(s)</span>
            </button>
            <div
              className="cartDropDown"
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <ul>
                {state.cart.items.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.name} &times; {item.quantity}
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
