import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/card/${props.card.id}`}>
      <div>
        <img
          className="all-cards-image"
          src={props.card.images?.small}
          alt={props.card.name}
        />
      </div>
    </Link>
  );
}
export default Card;
