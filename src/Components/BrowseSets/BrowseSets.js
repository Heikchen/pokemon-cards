import "./BrowseSets.css";
function BrowseSets() {
  return (
    <div className="browse-sets-container">
      <h1>Browse Sets</h1>
      <div className="set-container">
        <img
          className="set-image"
          src="https://images.pokemontcg.io/base1/symbol.png"
        />
        <div className="set-info">
          <h2 className="set-title">Base</h2>
          <p className="set-release">Released: 1999/01/09</p>
        </div>
      </div>
    </div>
  );
}
export default BrowseSets;
