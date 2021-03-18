import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import Header from "./Header";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default App;
