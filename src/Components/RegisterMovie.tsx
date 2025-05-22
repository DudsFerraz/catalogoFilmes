import { useState } from "react"
import type { MovieType } from "../Services/movieService"
import MovieService from "../Services/movieService";
import {useNavigate } from "react-router-dom";

export default function RegisterMovie(){
    const [form,setForm] = useState<MovieType>({
        nome: "",
        genero: "",
        ano: "",
        sinopse: "",
        diretor: "",
        notaIMDB: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try{
            await MovieService.register(form);
            //alert("Filme registrado com sucesso!");
            navigate("/");
        }catch (error){
            console.error("Erro no post:"+error);
        }
    }

    const handleCancelar = () => {
        navigate("/")
    }

    return(
         <div className="register-container">
            <h2>Registrar Filme</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>
                Nome:
                <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
                </label>

                <label>
                Gênero:
                <input type="text" name="genero" value={form.genero} onChange={handleChange} required />
                </label>

                <label>
                Ano de Lançamento:
                <input type="number" name="ano" value={form.ano} onChange={handleChange} required />
                </label>

                <label>
                Sinopse:
                <textarea name="sinopse" value={form.sinopse} onChange={handleChange} rows={4} required />
                </label>

                <label>
                Diretor:
                <input type="text" name="diretor" value={form.diretor} onChange={handleChange} required />
                </label>

                <label>
                Nota IMDB:
                <input type="number" max={10} min={0} step={0.1} name="notaIMDB" value={form.notaIMDB} onChange={handleChange} required />
                </label>

                <button type="submit" className="submit-button">Registrar</button>
                <button type="button" className="cancel-button" onClick={handleCancelar}>Cancelar</button>
            </form>
    </div>
        
    )
}