import Pizza from "./Pizza";
import pizzas from "../data/pizzas.json";


const PizzasList = () => {
  return (
    <section
      className="pizzalist-wrapper"
    >
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
