import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerDetails: {},
  playerToken: "",
  playerKyc:"",
  isAuthenticated: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerDetails: (state, action) => {
      state.playerDetails = action.payload;
      state.isAuthenticated = true;
    },
    setPlayerKyc: (state, action) => {
      state.playerKyc = action.payload;
      state.isAuthenticated = true;
    },
    setPlayerToken: (state, action) => {
      state.playerToken = action.payload;
      state.isAuthenticated = true;
    },
    logoutPlayer: (state) => {
      state.playerDetails ={};
      state.playerToken = "",
      state.isAuthenticated = false
    },
  },
});

export const { setPlayerDetails,setPlayerToken,setPlayerKyc, logoutPlayer } = playerSlice.actions;
export default playerSlice.reducer;
