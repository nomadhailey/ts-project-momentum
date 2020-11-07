import React, { useState } from "react";
import quotes from "./quotesDB";
import { MdReplay } from "react-icons/md";
import { StyledDiv } from "./Quotes.style";

export default function Quotes() {
  const [random, setRandom] = useState({
    quote: quotes[0].quote,
    author: quotes[0].author,
  });
  const { quote, author } = random;

  const randomQuote = () => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
  };

  const changeQuote = () => {
    const generateRandomQuote = randomQuote();
    setRandom({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author,
    });
  };

  return (
    <StyledDiv className="quotesContainer">
      <div className="quotes">
        <q>{quote}</q>
      </div>
      <div className="author">
        <span>{author}</span>
        <MdReplay className="replay" onClick={changeQuote} />
      </div>
    </StyledDiv>
  );
}
