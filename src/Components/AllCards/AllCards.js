import Card from "../Card/Card";
import "./AllCards.css";
import axios from "axios";
import React from "react";
import Spinner from "../Spinner/Spinner";

function AllCards() {
  const [allCards, setAllCards] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [indexStart, setIndexStart] = React.useState(1);
  const [indexEnd, setIndexEnd] = React.useState(250);

  React.useEffect(() => {
    fetchCards(page);
    window.scrollTo(0, 0);
  }, [page]);

  const fetchCards = (selectPage) => {
    setIsLoading(true);
    const link = `https://api.pokemontcg.io/v2/cards/?page=${selectPage}`;
    axios.get(link).then((response) => {
      setAllCards(response.data.data);
      console.log(response.data.data, link);
      setIsLoading(false);
    });
  };

  const handleClick = () => {
    setPage((page) => page + 1);
    setIndexStart((indexStart) => indexStart + 250);
    setIndexEnd((indexEnd) => indexEnd + 250);
    console.log(page);
  };
  return (
    <div className="cards-container">
      <h1 className="cards-title">
        Pokémon Cards {indexStart}-{indexEnd}
      </h1>
      <div className="main-cards-container">
        {isLoading ? (
          <Spinner />
        ) : (
          allCards.map((allCardsObject) => (
            <Card key={allCardsObject.id} card={allCardsObject} />
          ))
        )}
      </div>
      <button onClick={handleClick} className="cards-btn">
        More
      </button>
    </div>
  );
}
export default AllCards;
