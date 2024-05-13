import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    userState: {},
    taskListState: {},
    counterState: {},
  },
});

export default store;
