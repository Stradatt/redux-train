import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import {postAPI} from "../services/PostsService";


const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})
export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(postAPI.middleware)
  })
}

export type Rootstate = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDicpatch = AppStore['dispatch']