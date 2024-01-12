import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovieResult } from "../utils/gptSlice";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  dispatch(
    addSearchMovieResult({
      searchMovieName: null,
      searchMovieResults: null,
    })
  );

  if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
