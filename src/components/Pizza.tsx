import { useStateDispatch } from "../context/context";

interface PizzaProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}

interface Props {
  pizza: PizzaProps;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
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
