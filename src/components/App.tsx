import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import Header from "./Header";
import Landing from "./Landing";
import AppStateProvider from "../context/context";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className="wrapper">
        <Header />
        {/* <Landing /> */}
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
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
