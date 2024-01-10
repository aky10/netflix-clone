import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-12 text-xl rounded-lg font-semibold hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 bg-white text-black p-2 px-12 text-xl rounded-lg font-semibold">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
