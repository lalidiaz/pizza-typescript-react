import { PizzaProps } from "../types";
import { useAddToCart } from "./AddToCart";
import "../styles";

interface Props {
  pizza: PizzaProps;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();

  const { name, price, image, description } = pizza;

  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };

  return (
    <div className="pizza-individual-card">
      <img className="individual-img" src={image} alt="pizza" />
      <div className="text-wrapper">
        <button onClick={handleAddToCartClick} className="btn-addpizza">
          +
        </button>
        <p className="individual-price">${price}</p>
        <p className="individual-name">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Pizza;
