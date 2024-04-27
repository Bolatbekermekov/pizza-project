import { useContext, useEffect, useRef, useState } from "react";
import Categories from "../components/Categories";
import Sort, { sortItems } from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { getPizzas, setItems } from "../redux/slices/pizzasSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchValue } = useContext(SearchContext);
  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const { isLoading, error } = useSelector((state) => state.pizzasSlice);

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  // const [categoryId, setCategoryId] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [sortType, setSortType] = useState({
  //   name: "популярности",
  //   sortProperty: "rating",
  // });

  // const categoryId = useSelector((state) => state.filterSlice.categoryId);
  // const sortType = useSelector((state)=>state.filterSlice.sort.sortProperty)
  const items = useSelector((state) => state.pizzasSlice.items);
  const { categoryId, sort, currentPage } = useSelector(selectFilter);
  // console.log("required",categoryId);
  const sortType = sort.sortProperty;

  // const onChangeCategoryId = (id) => {
  //   dispatch(setCategoryId(id));
  // };

  const fetchPizzas = async () => {
    // setIsLoading(true);

    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    //   fetch(
    //     `https://6601091987c91a116419eeef.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}&sortBy=${sortBy}&order=${order}`
    //   )
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((arr) => {
    //       if (Array.isArray(arr)) {
    //         setItems(arr);
    //         setIsLoading(false);
    //       } else {
    //         setItems([]);
    //       }
    //     });
    //   window.scrollTo(0, 0); //it is return the top of the page
    // }, [categoryId, sortType, searchValue, currentPage]);

    try {
      // const res = await axios.get(

      // const {data} = await axios.get(
      //   `https://6601091987c91a116419eeef.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}&sortBy=${sortBy}&order=${order}`
      // );
      // dispatch(setItems(data))

      dispatch(getPizzas({ order, sortBy, category, search, currentPage }));
    } catch (error) {
      alert("Не удалось загрузить пиццы");
      dispatch(setItems([]));
      console.log(error);
    }
    // axios
    //   .get(
    //     `https://6601091987c91a116419eeef.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}&sortBy=${sortBy}&order=${order}`
    //   )
    //   .then((res) => {
    //     setItems(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setItems([]);
    //   });
  };
console.log('window',window.location);
  useEffect(() => {
    // Only navigate if the state has changed after the component has mounted (not on the initial mount)
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId: categoryId,
        sortProperty: sort.sortProperty,
        currentPage: currentPage,
      });
      navigate(`?${queryString}`);
    } else {
      isMounted.current = true;
    }
  }, [categoryId, sort.sortProperty, currentPage, navigate]);

  useEffect(() => {
    // This useEffect is now only responsible for initializing state from URL parameters
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortURL =
        sortItems.find((obj) => obj.sortProperty === params.sortProperty) ||
        sortItems[0];
      dispatch(
        setFilters({
          categoryId: Number(params.categoryId || 0),
          currentPage: params.currentPage || 1,
          sort: sortURL,
        })
      );
      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, , searchValue, currentPage]);

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
            onCLickCategory={(index) => dispatch(setCategoryId(index))}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {error ? (
          <div className="content__error-info">
            <h2>{error}🥲</h2>
            <p>
              К сожалению, не удалось получить питсы.Попробуйте повторить
              попытку позже.
            </p>
          </div>
        ) : (
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : pizzas}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          onChangePage={(number) => dispatch(setCurrentPage(number))}
        />
        <br />
        <br />
      </div>
    </>
  );
};
