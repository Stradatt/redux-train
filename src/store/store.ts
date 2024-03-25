import {configureStore} from "@reduxjs/toolkit";

export const setupStore = () => {
  return configureStore({
      reducer: {

      }
  })
}

export type Rootstate = ReturnType<typeof setupStore.getState>
export type AppStore = ReturnType<typeof setupStore>
