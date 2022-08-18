import "./FilterCards.css";
import React from "react";
import axios from "axios";
function FilterCards() {
  const [element, setElement] = React.useState([]);
  const [subtype, setSubtype] = React.useState([]);
  const [cardtype, setCardtype] = React.useState([]);
  const [selectElement, setSelectElement] = React.useState("");
  const [filterElement, setFilterElement] = React.useState([]);
  let countElement = 1;
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
  const handleChangeElement = (event) => {
    setSelectElement(event.target.value);
    console.log(selectElement);
  };
  const fetchFilterElement = (element) => {
    const type = `https://api.pokemontcg.io/v2/cards/?q=types:${element}`;
    axios.get(type).then((response) => {
      setFilterElement(response.data.data);
      console.log(response.data.data);
    });
  };
  React.useEffect(() => {
    if (selectElement.length > 0) {
      fetchFilterElement(selectElement);
    }
  }, [selectElement]);
  return (
    <div className="filter-container">
      <select
        className="filter-element"
        value={selectElement || ""}
        onChange={handleChangeElement}
      >
        <option>Element Type</option>
        {element.map((elementObject) => (
          <option key={countElement++} value={elementObject}>
            {elementObject}
          </option>
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
