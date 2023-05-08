import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './alert'
import authReducer from './authentication'

const store = configureStore({
  reducer: {
    alerts: alertReducer,
    auth: authReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store