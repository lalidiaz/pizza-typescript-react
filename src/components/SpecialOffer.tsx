import { PizzaProps } from "../types";
import { WithAddToCartProps } from "./AddToCart";
import "../styles";
import Title from "../components/Title";

interface Props {
  pizza: PizzaProps;
}
const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const { name, description, price, image } = pizza;

  return (
    <div className="special-offer-wrapper">
      <Title>Special Offer!</Title>
      <img className="special-img" src={image} alt="pizza" />
      <p className="special-name">{name}</p>
      <p className="special-description">{description}</p>
      <p className="special-price">${price}</p>
      <section>
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
                className="special-btn"
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
