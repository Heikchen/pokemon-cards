import Card from "../Card/Card";
import "./AllCards.css";
import axios from "axios";
import React from "react";
import Spinner from "../Spinner/Spinner";
import FilterCards from "../FilterCards/FilterCards";

function AllCards() {
  const [allCards, setAllCards] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [indexStart, setIndexStart] = React.useState(1);
  const [indexEnd, setIndexEnd] = React.useState(250);
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    fetchCards(page);
    window.scrollTo(0, 0);
    if (page > 1) {
      setIsDisabled(false);
      console.log("false");
    } else if (page === 1) {
      setIsDisabled(true);
      console.log("true");
    }
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

  const handleClicknext = () => {
    setPage((page) => page + 1);
    setIndexStart((indexStart) => indexStart + 250);
    setIndexEnd((indexEnd) => indexEnd + 250);
    console.log(page);
  };
  const handleClickprevious = () => {
    setPage((page) => page - 1);
    setIndexStart((indexStart) => indexStart - 250);
    setIndexEnd((indexEnd) => indexEnd - 250);
    console.log(page);
  };

  return (
    <div className="cards-container">
      <h1 className="cards-title">
        Pokémon Cards {indexStart}-{indexEnd}
      </h1>
      <FilterCards />
      <div className="main-card-container">
        {isLoading ? (
          <Spinner />
        ) : (
          allCards.map((allCardsObject) => (
            <Card key={allCardsObject.id} card={allCardsObject} />
          ))
        )}
      </div>
      <div>
        {isDisabled ? (
          <button
            disabled={true}
            onClick={handleClickprevious}
            className="cards-btn-previous"
          >
            {"<"}
          </button>
        ) : (
          <button
            disabled={false}
            onClick={handleClickprevious}
            className="cards-btn-previous"
          >
            {"<"}
          </button>
        )}

        <button onClick={handleClicknext} className="cards-btn">
          {">"}
        </button>
      </div>
    </div>
  );
}
export default AllCards;
