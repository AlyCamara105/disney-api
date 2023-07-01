import { configureStore } from "@reduxjs/toolkit";
import pageSizeSlice from "./Slices/pageSizeSlice";

export const store = configureStore({
  reducer: { defaultPageSize: pageSizeSlice },
});
