import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './slices/auth.slice'

const rootReducer = combineReducers({
    auth : authReducer
})

export const store = configureStore({
  reducer: rootReducer
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
