import type { TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import mainReducer from "./reducers/mainReducer";

const store = configureStore({
  reducer: {
    map: mainReducer,
  },
});

// Declare Typed Definitions
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
