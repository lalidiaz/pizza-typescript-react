import BackgroundImg from "../assets/background.png";
import PizzaImg from "../assets/pizza.png";
import RosemaryImg from "../assets/rosemary.png";
import BackgroundImgTwo from "../assets/background2.png";

const Landing = () => {
  return (
    <section className="landing-section">
      {/* <img className="background-img" src={BackgroundImg} alt="background" /> */}
      <section className="section-pizza-name">
        {/* <img className="pizza-img" src={PizzaImg} alt="pizza" /> */}
        <h2 className="main-title">Italian Cuisine</h2>
        {/* <img className="rosemary-img" src={RosemaryImg} alt="rosemary" /> */}
      </section>
      {/* <img
        className="backhround-img-2"
        src={BackgroundImgTwo}
        alt="background-two"
      /> */}
    </section>
  );
};

export default Landing;
