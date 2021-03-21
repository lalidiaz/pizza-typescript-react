import { PizzaProps } from "../types";
import { WithAddToCartProps } from "./AddToCart";

interface Props {
  pizza: PizzaProps;
}
const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const { name, description, price, image } = pizza;

  return (
    <div className="special-offer">
      <h3>Special offer:</h3>
      <img className="special-img" src={image} alt="pizza" />
      <p className="special-name">{name}</p>
      <p className="special-description">{description}</p>
      <section className="special-btn">
        <p className="special-price">${price}</p>
        <WithAddToCartProps>
          {({ addToCart }) => {
            return (
              <button
                onClick={() =>
                  addToCart({
                    id: pizza.id,
                    name: pizza.name,
                    price: pizza.price,
                  })
                }
                className="btn"
              >
                Add to the cart
              </button>
            );
          }}
        </WithAddToCartProps>
      </section>
    </div>
  );
};

export default SpecialOffer;
