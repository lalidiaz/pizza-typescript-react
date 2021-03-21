import { PizzaProps } from "../types";
import { useStateDispatch } from "../context/context";

interface Props {
  pizza: PizzaProps;
}
const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch();
  const { name, description, price, image } = pizza;

  const handleAddToCartClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: { id: pizza.id, name: pizza.name, price: pizza.price },
      },
    });
  };

  return (
    <div className="special-offer">
      <h3>Special offer:</h3>
      <img className="special-img" src={image} alt="pizza" />
      <p className="special-name">{name}</p>
      <p className="special-description">{description}</p>
      <section className="special-btn">
        <p className="special-price">${price}</p>
        <button onClick={handleAddToCartClick} className="btn">
          Add to the cart
        </button>
      </section>
    </div>
  );
};

export default SpecialOffer;
