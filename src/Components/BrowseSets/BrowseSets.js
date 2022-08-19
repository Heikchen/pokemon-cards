import "./BrowseSets.css";
import { Link } from "react-router-dom";
function BrowseSets(props) {
  return (
    <Link to={`/set/${props.sets.id}`}>
      <div className="set-container">
        <img
          className="set-image"
          src={props.sets.images.logo}
          alt={props.sets.name}
        />
        <div className="set-info">
          <h2 className="set-title">{props.sets.name}</h2>
          <p className="set-release">Released: {props.sets.releaseDate}</p>
        </div>
      </div>
    </Link>
  );
}
export default BrowseSets;
