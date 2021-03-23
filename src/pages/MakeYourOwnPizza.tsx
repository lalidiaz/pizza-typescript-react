import Title from "../components/Title";
import "../styles";
import ingredients from "../data/ingredients.json";
import Image from "../components/Image";
import abstract from "../assets/vector-yellow.png";
import abstractTwo from "../assets/vector-2.png";

const MakeYourOwnPizza = () => {
  return (
    <div className="makeyourown-wrapper">
      <div className="makeyourown-text">
        <div className="makeyourown-title">
          <Title>make your own pizza</Title>
        </div>
        <img src={abstractTwo} alt="vector-abstract" className="abstractTwo" />

        <img src={abstract} alt="vector-abstract" className="abstract" />
      </div>
      <div className="makeyourown-images">
        {ingredients.map((ingredient) => {
          const { id, name, image } = ingredient;
          return (
            <article key={id}>
              <Image src={image} alt={name} />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default MakeYourOwnPizza;
