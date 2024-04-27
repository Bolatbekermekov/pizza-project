import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params,thunkAPI)=>{
  const {order,sortBy,category,search,currentPage} = params
  const {data} = await axios.get(
    `https://6601091987c91a116419eeef.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}&sortBy=${sortBy}&order=${order}`
  );

  // if (data.lenght > 0){
  //   return thunkAPI.fulfillWithValue("Много пиццов")
  // }
  return data
})



const initialState = {
  totalprice: 0,
  items: [],
};

const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {


    setItems(state, action) {
      state.items = action.payload
  
    },
   
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPizzas.pending, (state) => {
                state.isLoading = true;

        console.log("Идет отправка запроса");
      })
      .addCase(getPizzas.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false;
        console.log(state,"Все ок");
      })
      .addCase(getPizzas.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.error.message;
        state.isLoading = false;
        state.items = []
        console.log("Была ошибка");
      });
  }
  // extraReducers:{
  //   [getPizzas.pending]: (state,action)=>{
  //     console.log("Идет отправка запроса");
  //   },
  //   [getPizzas.fulfilled]: (state,action)=>{
  //     console.log(state, "Все ок");
  //   },
  //   [getPizzas.rejected]: (state,action)=>{
  //     console.log("Была ошибка");
  //   }
  // },
  
});



export const {setItems, } = pizzasSlice.actions;

export default pizzasSlice.reducer;
