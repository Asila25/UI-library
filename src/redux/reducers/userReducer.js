import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "Jone Doe", age: 23, email: "jonhdoe@gmail.com" },
  ],
  reducers: {
    //reducer functions
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      return state.filter((u) => u.id !== action.payload);
    },
    updateUser: (state, action) => {
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return { ...u, ...action.payload };
        }
        return u;
      });
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
