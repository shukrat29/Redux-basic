import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count--;
    },
  },
});

const { reducer, actions } = counterSlice;

export default reducer;
