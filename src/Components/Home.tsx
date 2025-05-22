import { useEffect, useState } from "react";
import movieService from "../Services/movieService";
import type { MovieType } from "../Services/movieService";
import Movie from "../Components/Movie";
import MovieFull from "../Components/MovieFull";

export default function Home() {
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieService.getAll();
        setMovies(response.data);
      } catch (error) {
        console.log("Falha no get:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      {movies ? (
        <ul className="movie-list">
          {movies.map((m) => (
            <li className="movie-item" key={m.id}>
              <Movie movie={m} onVerMais={setSelectedMovie} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Carregando filmes...</div>
      )}

      {selectedMovie && (
        <MovieFull
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
