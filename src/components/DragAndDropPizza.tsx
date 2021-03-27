import ingredients from "../data/ingredients.json";
import Image from "./Image";
import "../styles";
import { motion } from "framer-motion";
import emptyPizza from "../assets/1.png";
import Title from "../components/Title";

const DragAndDropPizza = () => {
  return (
    <div className="drag-and-drop-wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <Title>Drag and drop </Title>
      </motion.div>

      <img src={emptyPizza} alt="pizza-empty" className="pizza-empty-drag" />

      <div className="drag-and-drop-images">
        {ingredients.map((ingredient) => {
          const { id, name, image } = ingredient;
          return (
            <motion.article
              drag
              whileTap={{ cursor: "grabbing" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              key={id}
            >
              <Image src={image} alt={name} />
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default DragAndDropPizza;
