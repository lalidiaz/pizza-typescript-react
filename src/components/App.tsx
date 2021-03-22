import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppStateProvider from "../context/context";
import Header from "./Header";
import Landing from "../pages/Landing";
import About from "../pages/about";
import PizzasList from "./PizzasList";
import TopHeader from "./TopHeader";

const App = () => {
  return (
    <AppStateProvider>
      <Router>
        {/* <TopHeader /> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu">
            <PizzasList />
          </Route>
        </Switch>
      </Router>
    </AppStateProvider>
  );
};

export default App;
