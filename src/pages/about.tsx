import saturninaOne from "../assets/saturnina1.jpeg";
import saturninaTwo from "../assets/woman-pizza.jpg";
import Title from "../components/Title";
import Description from "../components/Description";
import vectorOne from "../assets/vector-blue.png";
import vectorTwo from "../assets/vector-2.png";
import vectorThree from "../assets/vector-4.png";
import vectorFour from "../assets/vector-blue1.png";
import vectorSix from "../assets/vector-pink2.png";

import { motion } from "framer-motion";


const About = () => {
  return (
    <section className="about-wrapper">
      <img
        src={vectorOne}
        alt="abstract-vector"
        className="about-abstract-one"
      />
      <img
        src={vectorTwo}
        alt="abstract-vector"
        className="about-abstract-two"
      />
      <img
        src={vectorSix}
        alt="abstract-vector"
        className="about-abstract-six"
      />
      <div className="about-text">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 3 }}
          className="about-title-animation"
        >
          <Title>Hi, I am Saturnina.</Title>
        </motion.div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.8, duration: 3 }}
          className="about-description-box"
        >
          <Description text="Saturnina is a symbol of courage." />
          <Description text="She used to be the Creative Director at a very important agency in Mexico. After losing his job due to the Covid pandemic, he had to reinvent himself and step out of his comfort zone. She began to learn to cook, without knowing how to cook even a boiled egg, Saturnina today has her own pizzeria. She gives work to many women who suffered the consequences of the Covid and today she can earn the money to live." />
          <Description text="She believes that the magical seasoning of her pizzas is the love and passion with which she cooks them." />
        </motion.div>
      </div>
      <div className="about-images">
        <motion.img
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5, duration: 1.5 }}
          src={saturninaOne}
          alt="saturina-cooking"
          className="saturnina-one-img"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 3 }}
          src={saturninaTwo}
          alt="saturina-cooking"
          className="saturnina-two-img"
        />
        <img
          src={vectorThree}
          alt="abstract-vector"
          className="about-abstract-three"
        />
        <img
          src={vectorFour}
          alt="abstract-vector"
          className="about-abstract-four"
        />
      </div>
    </section>
  );
};

export default About;
