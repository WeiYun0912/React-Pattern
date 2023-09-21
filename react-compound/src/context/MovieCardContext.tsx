import { createContext, useContext } from "react";
import { Movie } from "../types";

const MovieCardContext = createContext<{ movie: Movie } | null>(null);

export const useMovieCardContext = () => {
  const context = useContext(MovieCardContext);

  if (!context) throw new Error("Error...");

  return context;
};

export default MovieCardContext;
