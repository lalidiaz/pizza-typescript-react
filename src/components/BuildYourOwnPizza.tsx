import pizza from "../assets/pizza-slices.png";
import "../styles";
import Button from "../components/Button";
import Title from "../components/Title";
import Description from "../components/Description";
import abstract from "../assets/vector-3.png";

const BuildYourOwnPizza = () => {
  return (
    <section className="build-wrapper">
      <div className="img-container">
        <img src={pizza} alt="slices-img" className="slices-img" />
        <img src={abstract} alt="abstract-vector" className="abstract-vector" />
      </div>
      <div className="build-text">
        <Title text="Build your own pizza" />
        <Description text="Lorem knldjbwjkbgojmflengpngw2nenpkqen;kgn;kenglkewnblnbgjowebglenlek" />
        <Button title="see more" />
      </div>
    </section>
  );
};

export default BuildYourOwnPizza;
