import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";
import FullPizza from "./pages/FullPizza";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>

      {/* <NotFound/> */}
      {/* {items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                // мы либо так можем

                // title={obj.title}
                // price={obj.price}
                // url={obj.imageUrl}
                // sizes={obj.sizes}
                // types={obj.types}

                //либо вот так
                {...obj}
              />
            ))} */}
      {/* <PizzaBlock title="Bolatbek" price={500}/>
           <PizzaBlock title="Dana" price={1500}/>
           <PizzaBlock title="Bolatbek" price={500}/>
           <PizzaBlock title="Bolatbek" price={500}/>
           <PizzaBlock title="Dana" price={1500}/>
           <PizzaBlock title="Amandyk" price={100}/> */}
    </div>
  );
}

export default App;
