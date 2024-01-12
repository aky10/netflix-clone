import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchMovie = useRef(null);

  const handleSearchClick = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=student&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);
    dispatch(
      addSearchMovieResult({
        searchMovieName: searchMovie.current.value,
        searchMovieResults: json.results,
      })
    );
  };
  return (
    <div className="pt-[40%] py-2 md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-2/3 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4 col-span-9 rounded-lg"
          ref={searchMovie}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
