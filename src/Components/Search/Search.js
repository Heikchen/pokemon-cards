import "./Search.css";
function Search() {
  return (
    <div>
      <div className="search-container">
        <h1 className="home-title">Pokemon TCG</h1>
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Search Pokémon Card..."
        />
      </div>
    </div>
  );
}
export default Search;
