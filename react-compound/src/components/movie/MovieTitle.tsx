import { useMovieCardContext } from "../../context/MovieCardContext";

const MovieTitle = () => {
  const { movie } = useMovieCardContext();
  return <p className="text-lg">{movie.name}</p>;
};

export default MovieTitle;
