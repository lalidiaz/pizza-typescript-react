import Title from "../components/Title";
import Button from "../components/Button";
import pizzaDoughOne from "../assets/dough.png";
import pizzaDoughTwo from "../assets/pizza-dough2.png";
import abstract from "../assets/vector-blue1.png";
import vector from "../assets/vector-4.png";
import "../styles";

const Dough = () => {
  return (
    <div className="dough-wrapper">
      <section className="dough-text">
        <Title text="IT'S ALL ABOUT THE DOUGH" />
        <Button title="See more" />
      </section>
      <section className="dough-images">
        <img src={pizzaDoughOne} alt="dough" className="hands-dough-img" />
        <img src={pizzaDoughTwo} alt="dough" className="dough-img" />
        <img src={abstract} alt="dough" className="abstract-img" />
        <img src={vector} alt="dough" className="vector-img" />
      </section>
    </div>
  );
};

export default Dough;
