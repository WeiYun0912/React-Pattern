import { useMovieCardContext } from "../../context/MovieCardContext";
const MovieDescription = () => {
  const { movie } = useMovieCardContext();
  return <p className="text-sm text-gray-500">{movie.overview}</p>;
};

export default MovieDescription;
