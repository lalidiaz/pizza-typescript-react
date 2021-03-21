import { PizzaProps } from "../types";
import { useAddToCart } from "./AddToCart";

interface Props {
  pizza: PizzaProps;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();

  const { name, description, price, image } = pizza;

  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };

  return (
    <div className="pizza-individual-card">
      <li>
        <img className="individual-img" src={image} alt="pizza" />
        <p className="individual-name">{name}</p>
        <p className="individual-description">{description}</p>
        <section className="price-btn">
          <p className="individual-price">${price}</p>
          <button onClick={handleAddToCartClick} className="btn">
            Add to the cart
          </button>
        </section>
      </li>
    </div>
  );
};

export default Pizza;
