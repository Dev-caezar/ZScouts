import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player: null,
  isAuthenticated: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
      state.isAuthenticated = true;
    },
    logoutPlayer: (state) => {
      state.player = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setPlayer, logoutPlayer } = playerSlice.actions;
export default playerSlice.reducer;
