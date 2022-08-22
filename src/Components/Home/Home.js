import BrowseSets from "../BrowseSets/BrowseSets";
import Search from "../Search/Search";
import "./Home.css";
import React from "react";
import axios from "axios";
import BrowseCards from "../BrowseCards/BrowseCards";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [cardSets, setCardSets] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [pokemon, setPokemon] = React.useState([]);
  let navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setPokemon(event.target.value);

      navigate("/search", {
        state: {
          pokemonSearch: event.target.value,
        },
      });

      console.log(event.target.value);
    }
  };

  React.useEffect(() => {
    fetchSets();
  }, []);
  React.useEffect(() => {
    fetchCards();
  }, []);
  const fetchSets = () => {
    axios.get("https://api.pokemontcg.io/v2/sets").then((response) => {
      const sets = response.data.data;
      setCardSets(sets);
    });
  };
  const fetchCards = () => {
    axios.get("https://api.pokemontcg.io/v2/cards").then((response) => {
      setCards(response.data.data);
    });
  };

  return (
    <div>
      <Search change={handleKeyDown} />
      <div className="main-sets-container">
        <h1 className="set-header">Browse Sets</h1>
        <div className="browse-sets-container">
          {cardSets.slice(0, 4).map((setsObject) => (
            <BrowseSets key={setsObject.id} sets={setsObject} />
          ))}
        </div>
        <Link to="/allsets" className="more-sets">
          See More {">"}
        </Link>
      </div>
      <div className="main-cards-container">
        <h1 className="cards-header">Browse Cards</h1>
        <div className="browse-cards-container">
          {cards.slice(10, 14).map((cardObject) => (
            <BrowseCards key={cardObject.id} cards={cardObject} />
          ))}
        </div>
        <Link className="more-sets" to="/allcards">
          See More {">"}
        </Link>
      </div>
    </div>
  );
}
export default Home;
