import { CgArrowLongDown } from "react-icons/cg";
import Concept from "../components/Concept";
import BuildYourOwnPizza from "../components/BuildYourOwnPizza";
import Button from "../components/Button";
import Dough from "../components/Dough";
import NewsletterSocial from "../components/NewsletterSocial";

const Landing = () => {
  return (
    <>
      <section className="landing-section">
        <div className="text-wrapper">
          <h1 className="main-title">
            It's not just a pizza, it's Saturnina Pizza
          </h1>
          <Button title="See More" />
          <button className="down-arrow">
            <CgArrowLongDown color="white" />
          </button>
        </div>
      </section>
      <Concept />
      <BuildYourOwnPizza />
      <Dough />
      <NewsletterSocial />
    </>
  );
};

export default Landing;
