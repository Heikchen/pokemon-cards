import "./BrowseCards.css";
function BrowseCards(props) {
  return (
    <div>
      <img className="browse-cards-image" src={props.cards.images.large} />
    </div>
  );
}
export default BrowseCards;
