import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <h1 className="header-title">Pokémon</h1>
      </Link>

      <div className="header-links-container">
        <a className="header-link" href="#">
          All Pokémon Cards
        </a>
        <a className="header-link" href="#">
          My Cards
        </a>
        <a className="header-link" href="#">
          Sets
        </a>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}
export default Header;
