import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.player = null
      state.isAuthenticated = false
    },
  },
})

export const { setUser, setPlayer, logout } = userSlice.actions
export default userSlice.reducer
