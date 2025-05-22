import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div>
            <h1>404 Not Found</h1>
            <h2>A url digitada leva a uma pagina que nao existe. Clique no botao abaixo para voltar a Home</h2>
            <Link to={"/"}>Home</Link>
        </div>
    )
}