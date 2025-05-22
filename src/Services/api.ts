import axios from "axios";

const api = axios.create({
    baseURL: "https://682467c965ba0580339a263d.mockapi.io/api/filmes"
});

export default api;