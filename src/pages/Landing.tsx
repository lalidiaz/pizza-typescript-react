import { CgArrowLongDown } from "react-icons/cg";
import Concept from "../components/Concept";
import BuildYourOwnPizza from "../components/BuildYourOwnPizza";
import Button from "../components/Button";
import Dough from "../components/Dough";
import NewsletterSocial from "../components/NewsletterSocial";
import Title from "../components/Title";

const Landing = () => {
  return (
    <>
      <section className="landing-section">
        <div className="landing-text">
          <Title>It's not just a pizza, it's Saturnina Pizza</Title>
          <Button title="See More" />
          <div className="lading-see-more">
            <button className="down-arrow">
              <CgArrowLongDown color="white" />
            </button>
          </div>
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
