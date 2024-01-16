import React from "react";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4 transform transition duration-500 hover:scale-110">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
