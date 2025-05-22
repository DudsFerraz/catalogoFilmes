import type {MovieType} from "../Services/movieService";

interface MovieProps {
  movie: MovieType;
  onVerMais: (movie: MovieType) => void;
}

export default function Movie({ movie, onVerMais }: MovieProps) {
  return (
    <div className="movie-card">
      <div className="movie-header">
        <h2 className="movie-title">{movie.nome}</h2>
        <span className="movie-year">{movie.ano}</span>
      </div>
      <div className="movie-details">
        <p className="movie-genre">{movie.genero}</p>
      </div>
      <button onClick={() => onVerMais(movie)} className="submit-button">Ver mais</button>
    </div>
  );
}
