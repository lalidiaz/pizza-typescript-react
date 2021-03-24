import Pizza from "./Pizza";
import pizzas from "../data/pizzas.json";
// import SpecialOffer from "./SpecialOffer";
import Title from "../components/Title";
import Cart from "../components/Cart";
import SpecialOffer from "./SpecialOffer";

const PizzasList = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <section className="pizzalist-wrapper">
      <aside>
        <Title> Our selection of pizzas:</Title>
        <h3 className="pizzalist-categories-title">Categories:</h3>
        <ul className="pizzalist-categories">
          <li>Veggies</li>
          <li>Exotic Flavour</li>
          <li>Classic Flavour</li>
          <li>Staturnina's favourite</li>
          <li>Must Try!</li>
        </ul>

        <Cart isOpen={false} />

        <section className="pizzalist-sale">
          {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        </section>
      </aside>

      <ul className="pizzalist-grid">
        {pizzas.map((pizza) => {
          return (
            <li className="pizzalist-grid-li">
              <Pizza key={pizza.id} pizza={pizza} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default PizzasList;
