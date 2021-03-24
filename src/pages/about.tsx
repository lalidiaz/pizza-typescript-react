import saturninaOne from "../assets/saturnina1.jpeg";
import saturninaTwo from "../assets/woman-pizza.jpg";
import Title from "../components/Title";
import Description from "../components/Description";
import vectorOne from "../assets/vector-blue.png";
import vectorTwo from "../assets/vector-2.png";
import vectorThree from "../assets/vector-4.png";
import vectorFour from "../assets/vector-blue1.png";
import vectorFive from "../assets/vector-pink.png";
import vectorSix from "../assets/vector-pink2.png";

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
        <Title>Hi, I am Saturnina.</Title>
        <Description text="Saturnina is a symbol of courage." />
        <Description text="She used to be the Creative Director at a very important agency in Mexico. After losing his job due to the Covid pandemic, he had to reinvent himself and step out of his comfort zone. She began to learn to cook, without knowing how to cook even a boiled egg, Saturnina today has her own pizzeria. She gives work to many women who suffered the consequences of the Covid and today she can earn the money to live." />
        <Description text="She believes that the magical seasoning of her pizzas is the love and passion with which she cooks them." />
      </div>
      <div className="about-images">
        <img
          src={saturninaOne}
          alt="saturina-cooking"
          className="saturnina-one-img"
        />
        <img
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
        <img
          src={vectorFive}
          alt="abstract-vector"
          className="about-abstract-five"
        />
      </div>
    </section>
  );
};

export default About;
