import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import Header from "./Header";
import Landing from "./Landing";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Landing />
      <section className="pizzas-section">
        <ul className="pizza-wrapper">
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default App;
