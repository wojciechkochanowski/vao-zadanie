import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './alert'

const store = configureStore({
  reducer: {
    alerts: alertReducer,
    auth: (state = {}, action) => state
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store