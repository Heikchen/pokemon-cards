import "./SearchCard.css";
import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";

function SearchCard(props) {
  const [result, setResult] = React.useState([]);
  const location = useLocation();

  React.useEffect(() => {
    console.log(location.state.pokemonSearch);
    fetchSearch();
  }, []);

  const fetchSearch = () => {
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards/?q=name:${location.state.pokemonSearch}`
      )
      .then((response) => {
        setResult(response.data.data);
        console.log(response.data.data);
      });
  };
  return (
    <div>
      <h1 className="search-cards-title">Pokémon Cards {result.length}</h1>
      <div className="search-cards-container">
        {result.map((resultsObject) => (
          <Card key={resultsObject.id} card={resultsObject} />
        ))}
      </div>
    </div>
  );
}
export default SearchCard;
