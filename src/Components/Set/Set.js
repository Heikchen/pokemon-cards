import "./Set.css";
import { Link } from "react-router-dom";

function Set(props) {
  return (
    <Link to={`/set/${props.allsets.id}`}>
      <div className="sets-container">
        <img
          src={props.allsets.images.logo}
          className="sets-image"
          alt={props.allsets.name}
        />
        <div className="sets-info">
          <h1 className="sets-title">{props.allsets.name}</h1>
          <p className="sets-release">Released: {props.allsets.releaseDate}</p>
          <p className="sets-total">Total: {props.allsets.total}</p>
        </div>
      </div>
    </Link>
  );
}

export default Set;
