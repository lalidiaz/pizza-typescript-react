import pizza from "../assets/pizza-slices.png";
import "../styles";
import Button from "../components/Button";
import Title from "../components/Title";
import Description from "../components/Description";
import abstract from "../assets/vector-3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BuildYourOwnPizza = () => {
  return (
    <section className="build-wrapper">
      <div className="img-container">
        <motion.img
          whileHover={{
            marginLeft: "30px",
            transition: { ease: "easeInOut" },
          }}
          src={pizza}
          alt="slices-img"
          className="slices-img"
        />
        <img src={abstract} alt="abstract-vector" className="abstract-vector" />
      </div>
      <div className="build-text">
        <Title>Build your own pizza</Title>
        <Description text="Have fun and choose and build your own pizza." />
        <Link to="/drag-and-drop">
          <Button title="see more" />
        </Link>
      </div>
    </section>
  );
};

export default BuildYourOwnPizza;
