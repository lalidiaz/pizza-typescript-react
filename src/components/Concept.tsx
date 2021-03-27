import pizzaConcept from "../assets/bck-2.jpeg";
import { CgArrowLongRight } from "react-icons/cg";
import "../styles/index";
import Title from "../components/Title";
import Description from "../components/Description";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Concept = () => {
  return (
    <section className="concept-wrapper">
      <div className="concept-text-container">
        <h4 className="concept-word">concept</h4>
        <Title>So, where is the magic?</Title>
        <Description
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ex
          cupiditate, quidem accusamus, adipisci ipsa explicabo minus distinctio
          vel sapiente delectus fugit. Temporibus ad molestiae eius culpa optio
          saepe impedit."
        />
        <Link to="/about">
          <motion.button
            initial={{ x: 0 }}
            animate={{ x: 40 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="concept-see-more"
          >
            <CgArrowLongRight />
            See More
          </motion.button>
        </Link>
      </div>

      <img src={pizzaConcept} alt="concept-pizza" className="concept-image" />
    </section>
  );
};
export default Concept;
