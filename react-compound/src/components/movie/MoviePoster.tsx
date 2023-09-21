import { useMovieCardContext } from "../../context/MovieCardContext";

const MoviePoster = () => {
  const { movie } = useMovieCardContext();
  return (
    <img
      src={movie.poster_path}
      className="max-w-full object-cover h-auto rounded-t-lg"
      alt="movie poster"
    />
  );
};

export default MoviePoster;
