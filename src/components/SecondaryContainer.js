import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondrayContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="  h-screen md:h-auto bg-black mt-0 md:-mt-32 pl-2 md:pl-12 relative z-20">
        {/* <div className="mt-0 md:-mt-32 pl-2 md:pl-12 relative z-20 "> */}
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        {/* </div> */}
      </div>
    )
  );
};

export default SecondrayContainer;
