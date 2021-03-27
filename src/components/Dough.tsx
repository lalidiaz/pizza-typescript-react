import Title from "../components/Title";
import Button from "../components/Button";
import pizzaDoughOne from "../assets/dough.png";
import pizzaDoughTwo from "../assets/pizza-dough2.png";
import abstract from "../assets/vector-blue1.png";
import vector from "../assets/vector-4.png";
import "../styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dough = () => {
  return (
    <div className="dough-wrapper">
      <section className="dough-text">
        <Title>It's all anout the dough</Title>
        <Link to="/about">
          <Button title="See more" />
        </Link>
      </section>
      <section className="dough-images">
        <motion.img
          whileHover={{
            marginRight: "15px",
            transition: { ease: "easeInOut" },
          }}
          src={pizzaDoughOne}
          alt="dough"
          className="hands-dough-img"
        />
        <motion.img
          whileHover={{
            marginRight: "15px",
            marginTop: "15px",
            transition: { ease: "easeInOut" },
          }}
          src={pizzaDoughTwo}
          alt="dough"
          className="dough-img"
        />
        <img src={abstract} alt="dough" className="abstract-img" />
        <img src={vector} alt="dough" className="vector-img" />
      </section>
    </div>
  );
};

export default Dough;
