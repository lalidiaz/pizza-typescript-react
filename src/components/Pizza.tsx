interface PizzaProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: PizzaProps;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const { name, description, price } = pizza;
  return (
    <li>
      <p>{name}</p>
      <p>{description}</p>
      <p>${price}</p>
    </li>
  );
};

export default Pizza;
