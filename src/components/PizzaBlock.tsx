import { FC, useState } from "react";
import { useDispatch} from "react-redux";
import { addItem } from "../redux/slices/CartdSlice";

type PizzaBlockProps = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types:number[]
};

const PizzaBlock: FC<PizzaBlockProps>= (props) => {
  
  const [countPizza, setCountPizza] = useState(0);
  const [activeSize, setSize] = useState(0);
  const [activeType, setType] = useState(0);
  const typeNames = ["тонкое", "традиционное"];
  const dispatch = useDispatch();
  const onClickItem = () => {
    // Ensure you're referencing the correct state and props
    const item = {
      id: props.id,
      name: props.title, // Assuming you want the title as the name
      imageUrl: props.imageUrl,
      price: props.price,
      size: props.sizes[activeSize], // Use the selected size's value
      types: typeNames[activeType], // Use the selected type's name
    };
    dispatch(addItem(item));
    setCountPizza(countPizza + 1); // Consider if you want this to happen here or separately
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={props.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{props.title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {props.types.map((type, index) => (
            <li
              key={index}
              onClick={() => setType(index)}
              className={activeType === index ? "active" : ""}
            >
              {type === 0 ? typeNames[0] : typeNames[1]}
            </li>
          ))}
          {/* <li className="active">тонкое</li>
          <li>традиционное</li> */}
        </ul>
        <ul>
          {props.sizes.map((size, index) => (
            <li
              key={index}
              onClick={() => setSize(index)}
              className={activeSize === index ? "active" : ""}
            >
              {size}см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{props.price}₽</div>
        <button
          onClick={onClickItem}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{countPizza}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
