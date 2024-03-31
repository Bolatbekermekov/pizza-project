// import { useState } from "react";

export default function Categories({ value, onCLickCategory }) {
  // const [activeIndex,setActiveIndex] = useState(0)
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];
  // function onClickIndex(index){
  //   return(
  //     setActiveIndex(index)
  //   )
  // }
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryname, index) => (
          <li
            key={index}
            onClick={() => {
              onCLickCategory(index);
            }}
            className={value === index ? "active" : ""}
          >
            {categoryname}
          </li>
        ))}
      </ul>
    </div>
  );
}
