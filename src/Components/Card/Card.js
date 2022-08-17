import "./Card.css";

function Card(props) {
  return (
    <div>
      <img className="all-cards-image" src={props.card.images.small} />
    </div>
  );
}
export default Card;
