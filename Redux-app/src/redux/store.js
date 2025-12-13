import { configureStore } from '@reduxjs/toolkit'
import counterReducer from'../redux/counterslice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
})


