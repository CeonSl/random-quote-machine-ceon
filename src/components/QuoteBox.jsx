import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeCurrentQuote } from "../features/quote/quoteSlice";
import TwitterIcon from "./icons/TwitterIcon";

function QuoteBox() {
  const quote = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  return (
    <div id="quote-box">
      <div className="quote-buttons-box">
        <p id="text">{quote.text}</p>
        <button id="new-quote" onClick={() => dispatch(changeCurrentQuote())}>
          New Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text="${quote.text}" ${
            quote.author
          } ${encodeURIComponent("#")}quotes`}
          target="_blank"
          id="tweet-quote"
        >
          Tweet it
          <TwitterIcon />
        </a>
      </div>
      <span id="author">{quote.author}</span>
    </div>
  );
}

export default QuoteBox;
