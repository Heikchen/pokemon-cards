import "./FilterCards.css";
import React from "react";
import axios from "axios";
function FilterCards() {
  const [element, setElement] = React.useState([]);
  const [subtype, setSubtype] = React.useState([]);
  const [cardtype, setCardtype] = React.useState([]);
  React.useEffect(() => {
    fetchElement();
    fetchSubtype();
    fetchCardtype();
  }, []);
  const fetchElement = () => {
    axios.get("https://api.pokemontcg.io/v2/types").then((response) => {
      setElement(response.data.data);
    });
  };
  const fetchSubtype = () => {
    axios.get("https://api.pokemontcg.io/v2/subtypes").then((response) => {
      setSubtype(response.data.data);
    });
  };
  const fetchCardtype = () => {
    axios.get("https://api.pokemontcg.io/v2/subtypes").then((response) => {
      setCardtype(response.data.data);
    });
  };
  return (
    <div className="filter-container">
      <select className="filter-element">
        <option>Element Type</option>
        {element.map((elementObject) => (
          <option>{elementObject}</option>
        ))}
      </select>
      <select className="filter-types">
        <option>Subtype</option>
        {subtype.map((subtypeObject) => (
          <option>{subtypeObject}</option>
        ))}
      </select>
      <select className="filter-card">
        <option>Card Type</option>
        {cardtype.map((cardtypeObject) => (
          <option>{cardtypeObject}</option>
        ))}
      </select>
    </div>
  );
}
export default FilterCards;
