import React from "react";
import { CartItem, useStateDispatch } from "../context/context";

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

//HOC
export function withAddToCart<OriginalProps extends AddToCartProps>(
  ChildrenComponent: React.ComponentType<OriginalProps>
) {
  const AddToCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();

    const handleAddToCartClick: AddToCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };

    return (
      <ChildrenComponent
        {...(props as OriginalProps)}
        addToCart={handleAddToCartClick}
      />
    );
  };

  return AddToCartHOC;
}

//with render props.
export const WithAddToCartProps: React.FC<{
  children: (props: AddToCartProps) => JSX.Element;
}> = ({ children }) => {
  const dispatch = useStateDispatch();

  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };
  return children({ addToCart });
};

//Custom hook
export const useAddToCart = () => {
  const dispatch = useStateDispatch();

  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };
  return addToCart;
};
