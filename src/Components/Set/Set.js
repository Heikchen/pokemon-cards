import "./Set.css";

function Set(props) {
  return (
    <div className="sets-container">
      <img src={props.allsets.images.logo} className="sets-image" />
      <div className="sets-info">
        <h1 className="sets-title">{props.allsets.name}</h1>
        <p className="sets-release">Released: {props.allsets.releaseDate}</p>
        <p className="sets-total">Total: {props.allsets.total}</p>
      </div>
    </div>
  );
}

export default Set;
