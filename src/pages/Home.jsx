import { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

export const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    fetch(
      `https://6601091987c91a116419eeef.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        if (Array.isArray(arr)) {
          setItems(arr);
          setIsLoading(false);
        } else {
          setItems([]);
        }
      });
    window.scrollTo(0, 0); //it is return the top of the page
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas =
    items?.map((obj) => <PizzaBlock key={obj.id} {...obj} />) || [];

  ////SEARCH----------------------------

  // const pizaas = items.filter((obj)=>{
  //   if( obj.title && obj.title.toLowerCase().includes(searchValue.toLowerCase())){
  //     return true;
  //   }
  //   return false;
  // }).map(((obj) => <PizzaBlock key={obj.id} {...obj} />))

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onCLickCategory={(index) => setCategoryId(index)}
          />
          <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas}
        </div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
        <br />
        <br />
      </div>
    </>
  );
};
