import "./SearchCard.css";
import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function SearchCard() {
  const [result, setResult] = React.useState([]);

  const pokemon = useParams();

  React.useEffect(() => {
    fetchSearch();
  }, [pokemon]);

  const fetchSearch = () => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards/?q=name:${pokemon.pokemon}`)
      .then((response) => {
        setResult(response.data.data);
        console.log(response.data.data);
      });
  };
  return (
    <div>
      <h1 className="search-cards-title">Pokémon Cards {result.length}</h1>
      <div className="search-cards-container">
        {result.map((resultObject) => (
          <Link to={`/card/${resultObject.id}`}>
            <img
              className="search-cards-image"
              src={resultObject.images.small}
              alt={resultObject.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default SearchCard;
