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
    <section>
      <img className="pizza-individual-img" src={image} alt="pizza" />
      <div className="pizza-individual-text">
        <button onClick={handleAddToCartClick} className="btn-addpizza">
          +
        </button>
        <p className="pizza-individual-price">${price}</p>
        <p className="pizza-individual-name">{name}</p>
        <p className="pizza-individual-description">{description}</p>
      </div>
    </section>
  );
};

export default Pizza;
