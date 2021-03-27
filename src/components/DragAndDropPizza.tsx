import ingredients from "../data/ingredients.json";
import Image from "./Image";
import "../styles";
import { motion } from "framer-motion";
import emptyPizza from "../assets/1.png";
import Title from "../components/Title";

const DragAndDropPizza = () => {
  return (
    <div className="drag-and-drop-wrapper">
      <Title>Drag and drop </Title>

      <img src={emptyPizza} alt="pizza-empty" className="pizza-empty-drag" />
      
      <div className="drag-and-drop-images">
        {ingredients.map((ingredient) => {
          const { id, name, image } = ingredient;
          return (
            <motion.article drag whileTap={{ cursor: "grabbing" }} key={id}>
              <Image src={image} alt={name} />
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default DragAndDropPizza;
