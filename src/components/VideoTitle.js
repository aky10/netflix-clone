import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  console.log(movieId);
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-2xl w-1/2 md:text-6xl md:w-screen font-bold">
        {title}
      </h2>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <Link to={"/watch?v=" + movieId}>
          <button className="bg-gray-500  text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg font-semibold hover:bg-opacity-80">
            ▶ Play
          </button>
        </Link>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-black py-2 px-8 text-xl rounded-lg font-semibold">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
