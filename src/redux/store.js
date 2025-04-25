import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

export default store;
