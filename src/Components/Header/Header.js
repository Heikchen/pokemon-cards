import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <h1 className="header-title">Pokémon</h1>
      </Link>

      <div className="header-links-container">
        <Link className="header-link" to="/allcards">
          All Pokémon Cards
        </Link>
        <a className="header-link" href="#">
          My Cards
        </a>
        <Link className="header-link" to="/allsets">
          Sets
        </Link>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}
export default Header;
