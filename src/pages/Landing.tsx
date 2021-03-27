import { CgArrowLongDown } from "react-icons/cg";
import Concept from "../components/Concept";
import BuildYourOwnPizza from "../components/BuildYourOwnPizza";
import Button from "../components/Button";
import Dough from "../components/Dough";
import NewsletterSocial from "../components/NewsletterSocial";
import Title from "../components/Title";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <section className="landing-wrapper">
        <div className="landing-text">
          <Title>It's not just a pizza, it's Saturnina Pizza</Title>
          <Link to="concept" smooth={true}>
            <Button title="See More" />
          </Link>
          <div className="lading-see-more">
            <Link to="concept" smooth={true}>
              <motion.button
                className="lading-down-arrow"
                initial={{ y: 0 }}
                animate={{ y: 40 }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <CgArrowLongDown color="white" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      <div id="concept">
        <Concept />
      </div>
      <BuildYourOwnPizza />
      <Dough />
      <NewsletterSocial />
    </>
  );
};

export default Landing;
