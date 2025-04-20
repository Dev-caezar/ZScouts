import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  scoutDetails: {},
  scoutToken: "",
  scoutKyc: {},
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setScoutDetails: (state, action) => {
      state.scoutDetails = action.payload
      state.isAuthenticated = true
    },
    setScoutToken: (state, action) => {
      state.scoutToken = action.payload
      state.isAuthenticated = true
    },
    setScoutKyc: (state, action) => {
      state.scoutKyc = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.scoutDetails = {}
      state.scoutToken = "";
      state.scoutKyc= {}
      state.isAuthenticated = false
    },
  },
})

export const { setScoutDetails, setScoutKyc,setScoutToken, logout } = userSlice.actions
export default userSlice.reducer
