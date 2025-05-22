import type { MovieType } from "../Services/movieService";

interface MovieFullProps {
  movie: MovieType;
  onClose: () => void;
}

export default function MovieFull({ movie, onClose }: MovieFullProps) {
  return (
    <div className="modal-overlay">
      <div className="moviefull-modal">
        <h2>{movie.nome}</h2>
        <p><strong>Ano:</strong> {movie.ano}</p>
        <p><strong>Gênero:</strong> {movie.genero}</p>
        <p><strong>Diretor:</strong> {movie.diretor}</p>
        <p><strong>Nota IMDB:</strong> {movie.notaIMDB}</p>
        <p><strong>Sinopse:</strong> {movie.sinopse}</p>
        <p className="movie-id"><strong>ID:</strong> {movie.id}</p>
        <button onClick={onClose} className="cancel-button">Voltar</button>
      </div>
    </div>
  );
}
