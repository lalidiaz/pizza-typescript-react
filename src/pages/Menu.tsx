import PizzasList from "../components/PizzasList";
import Title from "../components/Title";
import Cart from "../components/Cart";
import SpecialOffer from "../components/SpecialOffer";
import pizzas from "../data/pizzas.json";
import "../styles";

const Menu = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <section className="menu-wrapper">
      <aside className="aside-menu">
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

      <div className="pizzalist-menu-wrapper">
        <PizzasList />
      </div>
    </section>
  );
};
export default Menu;
