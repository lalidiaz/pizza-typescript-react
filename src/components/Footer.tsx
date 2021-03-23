import { AiFillInstagram } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      © 2021- 2022 SATURNINA. All rights reserved.
      <section className="footer-social-media">
        <div className="footer-social-box">
          <AiFillInstagram size={20} />
        </div>
        <div className="footer-social-box">
          <SiFacebook size={20} />
        </div>
        <div className="footer-social-box">
          <IoLogoTiktok size={20} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
