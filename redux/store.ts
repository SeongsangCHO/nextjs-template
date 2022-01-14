import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import sliceReducer from "redux/slices/slice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: { sliceReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const makeStore = (context: Context) => store;

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    NGL: any;
    initRDKitModule: any;
  }
}
