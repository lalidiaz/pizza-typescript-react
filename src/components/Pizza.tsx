import { useSetState } from "../context/context";

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
  const setState = useSetState();
  const { name, description, price, image } = pizza;

  const handleAddToCartClick = () => {
    setState((state) => {
      const itemExists = state.cart.items.find((item) => item.id === pizza.id);
      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemExists
            ? state.cart.items.map((item) => {
                if (item.id === pizza.id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                }
                return item;
              })
            : [
                ...state.cart.items,
                {
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                  quantity: 1,
                },
              ],
        },
      };
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
