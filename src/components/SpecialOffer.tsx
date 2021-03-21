import { PizzaProps } from "../types";
import { AddToCartProps, withAddToCart } from "./AddToCart";

interface Props extends AddToCartProps {
  pizza: PizzaProps;
}
const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  const { name, description, price, image } = pizza;

  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
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

export default withAddToCart(SpecialOffer);
