import pizzaConcept from "../assets/bck-2.jpeg";
import { CgArrowLongRight } from "react-icons/cg";
import "../styles/index";
import Title from "../components/Title";
import Description from "../components/Description";

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
        <button className="concept-see-more">
          <CgArrowLongRight />
          See More
        </button>
      </div>
      <div className="image-concept">
        <img src={pizzaConcept} alt="concept-pizza" />
      </div>
    </section>
  );
};
export default Concept;
