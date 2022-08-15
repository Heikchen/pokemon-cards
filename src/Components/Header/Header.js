import "./Header.css";
function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">Pokemon</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Search Card..."
        />
        <button className="search-btn">{">"}</button>
      </div>
      <div className="header-links-container">
        <a className="header-link" href="#">
          All Pokemon Cards
        </a>
        <a className="header-link" href="#">
          My Cards
        </a>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}
export default Header;
