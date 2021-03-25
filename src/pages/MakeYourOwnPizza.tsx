import Title from "../components/Title";
import "../styles";
import ingredients from "../data/ingredients.json";
import Image from "../components/Image";
import abstract from "../assets/vector-yellow.png";
import abstractTwo from "../assets/vector-2.png";
import abstractThree from "../assets/vector-blue1.png";

const MakeYourOwnPizza = () => {
  return (
    <div className="makeyourown-wrapper">
      <div className="makeyourown-text">
        <div className="makeyourown-title">
          <Title>make your own pizza</Title>
          <div className="makeyourown-ingredients-list">
            <ul className="makeyourown-ul">
              {ingredients.map((ingredient) => {
                const { id, name } = ingredient;
                return (
                  <li className="makeyourown-li" key={id}>
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <img src={abstractTwo} alt="vector-abstract" className="makeyourown-abstractTwo" />
        <img src={abstract} alt="vector-abstract" className="makeyourown-abstract" />
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
        <img
          src={abstractThree}
          alt="abstract-shape"
          className="makeyourown-blue"
        />
      </div>
    </div>
  );
};

export default MakeYourOwnPizza;
