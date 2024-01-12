import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { searchMovieName, searchMovieResults } = useSelector(
    (store) => store.gpt
  );

  if (!searchMovieName) {
    return null;
  }
  return (
    <div className="p-4 bg-black text-white bg-opacity-90">
      <div>
        <MovieList title={searchMovieName} movies={searchMovieResults} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
