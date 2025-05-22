import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { MovieType } from "../Services/movieService";
import MovieService from "../Services/movieService";
import Movie from "../Components/Movie";
import MovieFull from "./MovieFull";


export default function DeleteMovie(){
    const [id,setId] = useState("");
    const [notFound,setNotFound] = useState(false);
    const [movie,setMovie] = useState<MovieType | null>(null);
    const [verMais,setVerMais] = useState<MovieType | null>(null);

    const navigate = useNavigate();

    const handleCancelar = () =>{
        navigate("/");
    }

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
        setMovie(null);
    }

    const handleIdSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        try{
            const response = await MovieService.get(id);
            setNotFound(false);
            setMovie(response.data);
        
        }catch (error){
            console.error("Erro no get: "+error);
            setId("");
            setMovie(null);
            setNotFound(true);
        }
    }

    const handleExcluir = async () => {
        try{
            MovieService.exclude(id);
            navigate("/");
        } catch (error){
            console.error("Erro ao excluir"+error);
        }
    }

    return(
        <>
            <div className="delete-container">
            <h2>Deletar Filme</h2>
            <form className="register-form" onSubmit={handleIdSubmit}>
                <label>
                ID:
                <input type="number" name="id" onChange={handleIdChange} required />
                </label>
                <div className="form-buttons">
                    <button type="submit" className="submit-button">Buscar</button>
                    <button type="button" className="cancel-button" onClick={handleCancelar} >Cancelar</button>
                </div>
            </form>

                {(id!=="" && movie) && (
                    <div className="movie-to-delete">
                        <Movie movie={movie} onVerMais={setVerMais} />

                        <div className="form-buttons">
                            <button type="button" className="submit-button" onClick={handleExcluir}>Excluir</button>
                            <button type="button" className="cancel-button" onClick={handleCancelar}>Cancelar</button>
                        </div>
                        
                    </div>
                )}
                {verMais && (
                    <MovieFull
                    movie={verMais}
                    onClose={() => setVerMais(null)}
                    />
                )}

            {(notFound) && (
                <div className="not-found">Filme não encontrado.</div>
            )}

            </div>
        </>
    )
}