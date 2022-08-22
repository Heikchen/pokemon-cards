import "./BrowseCards.css";
import { Link } from "react-router-dom";
function BrowseCards(props) {
  return (
    <Link to={`/card/${props.cards.id}`}>
      <div>
        <img
          className="browse-cards-image"
          src={props.cards.images.small}
          alt={props.cards.name}
        />
      </div>
    </Link>
  );
}
export default BrowseCards;
