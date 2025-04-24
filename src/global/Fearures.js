import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scoutDetails: {},
  scoutToken: "",
  scoutKyc: {},
  isAuthenticated: false,
  subscribed: JSON.parse(localStorage.getItem("subscribed")) || false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setScoutDetails: (state, action) => {
      state.scoutDetails = action.payload;
    },
    setScoutToken: (state, action) => {
      state.scoutToken = action.payload;
    },
    setScoutKyc: (state, action) => {
      state.scoutKyc = action.payload;
      state.isAuthenticated = true;
    },
    setSubscribed: (state, action) => {
      state.subscribed = action.payload;
      localStorage.setItem("subscribed", JSON.stringify(action.payload)); 
    },
    logout: (state) => {
      state.scoutDetails = {};
      state.scoutToken = "";
      state.scoutKyc = {};
      state.isAuthenticated = false;
      
    },
  },
});

export const { setScoutDetails, setScoutKyc, setScoutToken, setSubscribed, logout } = userSlice.actions;
export default userSlice.reducer;
