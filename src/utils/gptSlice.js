import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchMovieName: null,
    searchMovieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchMovieResult: (state, action) => {
      const { searchMovieName, searchMovieResults } = action.payload;
      state.searchMovieName = searchMovieName;
      state.searchMovieResults = searchMovieResults;
    },
  },
});

export const { toggleGptSearchView, addSearchMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
