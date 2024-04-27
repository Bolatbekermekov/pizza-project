import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "популярности (DESK)", sortProperty: "rating" },
  currentPage:1
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  // initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType: (state,action) =>{
      state.sort = action.payload
    },
    setCurrentPage: (state,action) =>{
      state.currentPage = action.payload
    },
    setFilters(state,action){
      console.log("Received in setFilters:", action.payload);

      state.categoryId = action.payload.categoryId

      state.currentPage = action.payload.currentPage
      state.sort = action.payload.sort
    }
  },
});

export const selectFilter = (state)=>state.filterSlice
export const selectSort = (state)=>state.filterSlice.sort

export const { setCategoryId, setSortType,setCurrentPage,setFilters } = filterSlice.actions;

export default filterSlice.reducer;
