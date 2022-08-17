import "./BrowseSets.css";
function BrowseSets(props) {
  return (
    <div className="set-container">
      <img className="set-image" src={props.sets.images.logo} />
      <div className="set-info">
        <h2 className="set-title">{props.sets.name}</h2>
        <p className="set-release">Released: {props.sets.releaseDate}</p>
      </div>
    </div>
  );
}
export default BrowseSets;
