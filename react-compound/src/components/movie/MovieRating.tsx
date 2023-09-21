import good from "../../assets/good.png";
import { useMovieCardContext } from "../../context/MovieCardContext";

const MovieRate = () => {
  const { movie } = useMovieCardContext();
  return (
    <div className="flex w-full mt-2">
      <img src={good} width={20} />
      <span className="text-sm font-bold">{movie.rating}</span>
    </div>
  );
};

export default MovieRate;
