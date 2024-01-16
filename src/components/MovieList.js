import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation, Pagination]);

const MovieList = ({ title, movies }) => {
  const [slidesPerGroup, setSlidesPerGroup] = useState(2);

  const handleResize = () => {
    const slidesInView = Math.floor(window.innerWidth / 144); // Adjust 200 to your slide width
    setSlidesPerGroup(slidesInView);
  };

  return (
    <div className="movie-slider mb-8">
      <h1 className="mb-3 text-[30px] text-[#e5e5e5]">{title}</h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={16}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        onResize={handleResize}
        className="mySwiper flex overflow-visibleF "
      >
        {movies?.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className={`
               w-52  md:w-36
             cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded `}
          >
            <Link to={"/watch?v=" + movie.id}>
              <MovieCard posterPath={movie.poster_path} movieId={movie.id} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
