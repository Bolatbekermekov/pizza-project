// import { useState } from "react";


export default function Categories({value,onCLickCategory}) {

  // const [activeIndex,setActiveIndex] = useState(0)
  const categories = ["Все","Мясные","Вегетарианская","Гриль","Острые"]
  // function onClickIndex(index){
  //   return(
  //     setActiveIndex(index)
  //   )
  // }
  return (
    <div class="categories">
      <ul>
        {categories.map((categoryname, index)=>(
          <li onClick={()=>{onCLickCategory(index)}} class={value === index ? "active" : ""}>{categoryname}</li>
        ))}
      </ul>
    </div>
  );
}