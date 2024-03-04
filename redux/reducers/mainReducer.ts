import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: [],
};

const mapSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = mapSlice.actions;
export default mapSlice.reducer;
