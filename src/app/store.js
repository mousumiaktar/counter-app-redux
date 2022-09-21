import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import multiplicationReducer from '../features/counter/MultiplicationSlice'


export const store = configureStore({
    reducer: {
        counter : counterReducer,
        multiplication: multiplicationReducer,
    },
  })