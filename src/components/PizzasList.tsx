import Pizza from "./Pizza";
import pizzas from "../data/pizzas.json";
import SpecialOffer from "./SpecialOffer";
import Cart from "./Cart";

const PizzasList = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <section className="pizzas-section">
      {/* <span className="cart">
        <Cart isOpen={false} />
      </span> */}
      <aside>
        <p>Pizzas</p>
      </aside>
      {/* {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />} */}
      <ul className="pizza-wrapper">
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </section>
  );
};
export default PizzasList;
