import { useState } from "react"
import type { MovieType } from "../Services/movieService";
import MovieService from "../Services/movieService";
import { useNavigate } from "react-router-dom";

export default function EditMovie(){
    const [id,setId] = useState("");
    const [notFound,setNotFound] = useState(false);

    const resetForm = () =>{
        return{
            nome: "",
            genero: "",
            ano: "",
            sinopse: "",
            diretor: "",
            notaIMDB: 0
        }
    }

    const [form,setForm] = useState<MovieType>(resetForm);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate();

    const handleCancelar = () =>{
        navigate("/");
    }

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
        setForm(resetForm);
    }

    const handleIdSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        try{
            const response = await MovieService.get(id);
            setForm(response.data);
            setNotFound(false);
        }catch (error){
            console.error("Erro no get: "+error);
            setId("");
            setNotFound(true);
            setForm(resetForm);
        }
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try{
            await MovieService.edit(id,form);
            navigate("/");
        }catch (error){
            console.error("Erro no put: "+error);
        }
    }

    return(
        <div className="edit-container">
            <h2>Editar Filme</h2>
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

            {(id!=="" && form.nome!=="") && (
                <div>
                    <form className="register-form" onSubmit={handleFormSubmit}>
                        <label>
                        Nome:
                        <input type="text" name="nome" value={form.nome} onChange={handleFormChange} required />
                        </label>

                        <label>
                        Gênero:
                        <input type="text" name="genero" value={form.genero} onChange={handleFormChange} required />
                        </label>

                        <label>
                        Ano de Lançamento:
                        <input type="number" name="ano" value={form.ano} onChange={handleFormChange} required />
                        </label>

                        <label>
                        Sinopse:
                        <textarea name="sinopse" value={form.sinopse} onChange={handleFormChange} rows={4} required />
                        </label>

                        <label>
                        Diretor:
                        <input type="text" name="diretor" value={form.diretor} onChange={handleFormChange} required />
                        </label>

                        <label>
                        Nota IMDB:
                        <input type="number" max={10} min={0} step={0.1} name="notaIMDB" value={form.notaIMDB} onChange={handleFormChange} required />
                        </label>
                        
                        <button type="submit" className="submit-button">Alterar</button>
                        <button type="button" className="cancel-button" onClick={handleCancelar}>Cancelar</button>
                    </form>
                </div>
            )}
            {(notFound) && (
                <div className="not-found">Filme não encontrado.</div>
            )}

        </div>
    )
}