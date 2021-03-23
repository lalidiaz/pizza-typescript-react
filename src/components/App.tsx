import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppStateProvider from "../context/context";
import Header from "./Header";
import Landing from "../pages/Landing";
import About from "../pages/about";
import Menu from "../pages/Menu";
import Footer from "./Footer";
import MakeYourOwnPizza from "../pages/MakeYourOwnPizza";

// import Scroll from "./Scroll";

const App = () => {
  return (
    <AppStateProvider>
      {/* <Scroll showBelow={250} /> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/make-your-own-pizza">
            <MakeYourOwnPizza />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppStateProvider>
  );
};

export default App;
