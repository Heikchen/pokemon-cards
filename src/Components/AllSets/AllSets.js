import "./AllSets.css";
import React from "react";
import axios from "axios";
import Set from "../Set/Set";
import Spinner from "../Spinner/Spinner";

function AllSets() {
  const [allSets, setAllSets] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    fetchAllSets();
  }, []);

  const fetchAllSets = () => {
    setIsLoading(true);
    axios.get("https://api.pokemontcg.io/v2/sets").then((response) => {
      setAllSets(response.data.data);
      setIsLoading(false);
    });
  };
  return (
    <div className="all-sets-container">
      <h1 className="all-sets-title">Pokémon Sets</h1>
      <div className="all-sets-cards">
        {isLoading ? (
          <Spinner />
        ) : (
          allSets.map((allSetsObject) => (
            <Set key={allSetsObject.id} allsets={allSetsObject} />
          ))
        )}
      </div>
    </div>
  );
}

export default AllSets;
