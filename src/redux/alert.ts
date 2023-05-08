import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TAlert } from "../types/types"

const initialState: TAlert[] = []

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<TAlert>) => {
      state.push(action.payload)
    }
  }
})
export const { addAlert } = alertSlice.actions
export default alertSlice.reducer