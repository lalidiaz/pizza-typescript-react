import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppStateProvider from "../context/context";
import Header from "./Header";
import Landing from "./Landing";

import PizzasList from "./PizzasList";

const App = () => {
  return (
    <AppStateProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
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
