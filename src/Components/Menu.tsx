import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header className="menu-container">
      <h1 className="menu-title">Catálogo de Filmes</h1>
      <nav className="menu-nav">
        <Link to="/">Início</Link>
        <Link to="/registerMovie">Registrar</Link>
        <Link to="/editMovie">Editar</Link>
        <Link to="/deleteMovie">Excluir</Link>
      </nav>
    </header>
  );
}