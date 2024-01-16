import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import VideoBackground from "./VideoBackground";

const WatchTrailer = () => {
  const [searchParams] = useSearchParams();
  const [trailerMilGya, setTrailerMilGya] = useState(null);
  const currentPlayingMovieId = searchParams.get("v");
  //   console.log(currentPlayingMovieId);
  useEffect(() => {
    trailerVideo();
  }, []);

  const trailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        currentPlayingMovieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerMilGya(trailer);
  };
  if (!trailerMilGya) return;
  //   console.log(trailerMilGya.key);
  return (
    // <VideoBackground movieId={currentPlayingMovieId} />
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerMilGya?.key +
          "?&autoplay=1&mute=1;start=2"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default WatchTrailer;
