import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TCurrentUser } from "../types/types"

function saveUser(user: TCurrentUser) {
  localStorage.setItem('APP_USER', JSON.stringify(user));
}

function getUser(): TCurrentUser {
  const user = localStorage.getItem('APP_USER');
  return user ? JSON.parse(user) : null;
}

function removeUser(): void {
  localStorage.removeItem('APP_USER');
}

const initialState: TCurrentUser = getUser()

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TCurrentUser>) => {
      saveUser(action.payload)
      return action.payload
    },
    unsetUser: (state) => {
      removeUser()
      return null
    }
  }
})
export const { setUser, unsetUser } = authenticationSlice.actions
export default authenticationSlice.reducer