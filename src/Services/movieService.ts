import api from "./api";

export interface MovieType {
  id?: string;
  nome: string;
  genero: string;
  ano: string;
  sinopse: string;
  diretor: string;
  notaIMDB: number;
}

const a = "catalogoFilmes";

const getAll = () => api.get<MovieType[]>(`${a}`);
const get = (id: string) => api.get<MovieType>(`${a}/${id}`);
const register = (json: MovieType) => api.post<MovieType>(`${a}`, json);
const exclude = (id: string) => api.delete(`${a}/${id}`);
const edit = (id: string, json: MovieType) => api.put<MovieType>(`${a}/${id}`, json);

const MovieService = {
  getAll,
  get,
  register,
  exclude,
  edit
};

export default MovieService;
