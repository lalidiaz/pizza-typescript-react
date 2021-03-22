import { CgArrowLongDown } from "react-icons/cg";
import Concept from "../components/Concept";
import BuildYourOwnPizza from "../components/BuildYourOwnPizza";
import Button from '../components/Button';

const Landing = () => {
  return (
    <>
      <section className="landing-section">
        <div className="text-wrapper">
          <h1 className="main-title">
            It's not just a pizza, it's Vincenzo Pizza
          </h1>
          <Button title="See More"/>
          <button className="down-arrow">
            <CgArrowLongDown color="white" />
          </button>
        </div>
      </section>
      <Concept />
      <BuildYourOwnPizza />
    </>
  );
};

export default Landing;
