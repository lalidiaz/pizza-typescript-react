import ingredients from "../data/ingredients.json";
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
              whileHover={{ cursor: "grabbing" }}
              whileTap={{ cursor: "grabbing" }}
              key={id}
            >
              <motion.img
                drag
                whileHover={{ cursor: "grabbing" }}
                whileTap={{ cursor: "grabbing" }}
                src={image}
                alt={name}
              />
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default DragAndDropPizza;
