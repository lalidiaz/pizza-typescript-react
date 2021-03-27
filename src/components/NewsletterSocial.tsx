import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import Title from "../components/Title";
import Button from "../components/Button";
import { motion } from "framer-motion";

const NewsletterSocial = () => {
  return (
    <section className="newsletter-wrapper">
      <div className="newsletter-social">
        <motion.div
          whileTap={{ rotate: 360, scale: 0.75 }}
          whileHover={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="newsletter-icon"
        >
          <AiOutlineInstagram size={40} />
        </motion.div>
        <motion.div
          whileTap={{ rotate: 360, scale: 0.75 }}
          whileHover={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="newsletter-icon"
        >
          <IoLogoTiktok size={40} />
        </motion.div>
        <motion.div
          whileTap={{ rotate: 360, scale: 0.75 }}
          whileHover={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="newsletter-icon"
        >
          <AiOutlineFacebook size={40} />
        </motion.div>
      </div>
      <div className="newsletter-letter">
        <BsEnvelope size={100} />
        <div className="newsletter-line" />
        <Title>The latest on Saturnina pizza</Title>
      </div>
      <div className="newsletter-btn-input">
        <input placeholder="Email adress" className="newsletter-input" />
        <Button title="send" />
      </div>
    </section>
  );
};

export default NewsletterSocial;
