import "../styles";

import { motion } from "framer-motion";
import Title from "../components/Title";

import Button from "../components/Button";
import { Link } from "react-router-dom";

//toppings animation
import emptyPizza from "../assets/1.png";
import topping1 from "../assets/2.png";
import topping2 from "../assets/3.png";
import topping3 from "../assets/4.png";

const MakeYourOwnPizza = () => {
  return (
    <div className="makeyourown-wrapper">
      <div className="makeyourown-text">
        <Title>Make your own pizza</Title>
      </div>

      <div className="makeyourown-toppings-animation">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 3 }}
        >
          <img src={emptyPizza} alt="pizza-empty" className="pizza-empty" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <img
            src={topping1}
            alt="pizza-topping-one"
            className="pizza-topping-one"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 2 }}
        >
          <img
            src={topping2}
            alt="pizza-topping-two"
            className="pizza-topping-two"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5, duration: 2 }}
        >
          <img
            src={topping3}
            alt="pizza-topping-three"
            className="pizza-topping-three"
          />
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ y: 0 }}
        animate={{ y: 70 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
  
      >
        <TiArrowDownOutline color="white" size={50} />
      </motion.div> */}

      <Link to="/drag-and-drop">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 70 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Button title="Drag and Drop" />
        </motion.div>
      </Link>
    </div>
  );
};

export default MakeYourOwnPizza;
