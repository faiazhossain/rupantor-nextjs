import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rupantorData: false,
};

const mapSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setRupantorData: (state, action) => {
      state.rupantorData = action.payload;
    },
  },
});

export const { setRupantorData } = mapSlice.actions;
export default mapSlice.reducer;
