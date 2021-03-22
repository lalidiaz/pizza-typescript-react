import woman from "../assets/woman-pizza.jpg";

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="text-wrapper">
        <h4>Welcome to the family.</h4>
        <h2>MEET DON PEPPE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta
          ad iio voluptas veritatis!
        </p>
      </div>
      <img src={woman} alt="pizza-show" className="about-img" />
    </section>
  );
};

export default About;
