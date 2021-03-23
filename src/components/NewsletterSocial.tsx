import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import Title from "../components/Title";
import Button from "../components/Button";

const NewsletterSocial = () => {
  return (
    <section className="newsletter-wrapper">
      <div className="social">
        <AiOutlineInstagram size={40} />
        <IoLogoTiktok size={40} />
        <AiOutlineFacebook size={40} />
      </div>
      <div className="letter">
        <BsEnvelope size={100} />
        <div className="line" />
        <Title text="The latest on Saturnina pizza" />
      </div>
      <div className="email-btn">
        <input placeholder="Email adress" />
        <Button title="send" />
      </div>
    </section>
  );
};

export default NewsletterSocial;
