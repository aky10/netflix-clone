import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      //state=>current state of redux slice
      //action=>action that was dispatched

      // below lin means new state should be when the addUser action is dispatched.
      return action.payload; // payload contains the data sent
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
