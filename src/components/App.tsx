import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import Header from "./Header";
import Landing from "./Landing";
import AppStateProvider from "../context/context";

const App = () => {
  return (
    <AppStateProvider>
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
    </AppStateProvider>
  );
};

export default App;
