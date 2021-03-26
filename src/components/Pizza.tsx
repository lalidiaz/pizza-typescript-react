import { PizzaProps } from "../types";
import { useAddToCart } from "./AddToCart";
import { motion } from "framer-motion";
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleAddToCartClick}
          className="btn-addpizza"
        >
          +
        </motion.button>
        <p className="pizza-individual-price">${price}</p>
        <p className="pizza-individual-name">{name}</p>
        <p className="pizza-individual-description">{description}</p>
      </div>
    </section>
  );
};

export default Pizza;
