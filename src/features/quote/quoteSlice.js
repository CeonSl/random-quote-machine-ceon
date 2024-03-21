import { createSlice } from "@reduxjs/toolkit";
import { quotes } from "../../app/data/quotes";
import { randomNumber } from "../../app/logic/getRandomNumber";
import { findNewIndex } from "../../app/logic/findNewIndex";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: () => {
    const initialRandomNumber = randomNumber();
    return {
      text: quotes[initialRandomNumber].text,
      author: quotes[initialRandomNumber].author,
    };
  },
  reducers: {
    changeCurrentQuote: (state) => {
      const newIndex = findNewIndex(state);
      state.text = quotes[newIndex].text;
      state.author = quotes[newIndex].author;
    },
  },
});

export const { changeCurrentQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
