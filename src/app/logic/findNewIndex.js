import { quotes } from "../data/quotes";

export const findNewIndex = (currentState) => {
  const currentIndex = quotes.findIndex(function (quote) {
    return currentState.text == quote.text;
  });

  return currentIndex + 1 == 10 ? 0 : currentIndex + 1;
};
