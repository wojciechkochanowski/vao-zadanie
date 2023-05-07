import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    auth: (state = {}, action) => state
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store