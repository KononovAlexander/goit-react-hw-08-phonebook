import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action){
      state.filterValue = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const {setFilter} = filterSlice.actions;