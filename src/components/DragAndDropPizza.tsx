import ingredients from "../data/ingredients.json";
import Image from "./Image";
import "../styles";
import { motion } from "framer-motion";
import emptyPizza from "../assets/1.png";

const DragAndDropPizza = () => {
  return (
    <div className="drag-and-drop">
      <h3 className="drag-and-drop-title">Drag and drop</h3>

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
