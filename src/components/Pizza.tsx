interface PizzaProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}

interface Props {
  pizza: PizzaProps;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const { name, description, price, image } = pizza;
  return (
    <div className="pizza-individual-card">
      <li>
        <img className="individual-img" src={image} alt="pizza" />
        <p className="individual-name">{name}</p>
        <p className="individual-description">{description}</p>
        <section className="price-btn">
          <p className="individual-price">${price}</p>
          <button className="btn">Add to the cart</button>
        </section>
      </li>
    </div>
  );
};

export default Pizza;
