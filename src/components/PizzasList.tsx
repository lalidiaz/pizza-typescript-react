import Pizza from "./Pizza";
import pizzas from "../data/pizzas.json";
// import SpecialOffer from "./SpecialOffer";
import Title from "../components/Title";
import Cart from "../components/Cart";
import SpecialOffer from "./SpecialOffer";

const PizzasList = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <section className="pizzas-section">
      <aside>
        <Title text="Our selection of pizzas:" />
        <h3 className="pizzalist-categories-title">Categories:</h3>
        <ul className="pizzas-categories">
          <li>Veggies</li>
          <li>Exotic Flavour</li>
          <li>Classic Flavour</li>
          <li>Staturnina's favourite</li>
          <li>Must Try!</li>
        </ul>

        <Cart isOpen={false} />

        <section className="pizza-sale">
          {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        </section>
      </aside>

      <ul className="pizza-wrapper">
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </section>
  );
};
export default PizzasList;
