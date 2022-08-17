import BrowseSets from "../BrowseSets/BrowseSets";
import Search from "../Search/Search";
import "./Home.css";
import React from "react";
import axios from "axios";

function Home() {
  const [cardSets, setCardSets] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/sets").then((response) => {
      setCardSets(response.data);
    });
  }, []);
  return (
    <div>
      <Search />
      <BrowseSets />
    </div>
  );
}
export default Home;
