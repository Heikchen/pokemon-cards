import "./FilterCards.css";
import React from "react";
import axios from "axios";
function FilterCards(props) {
  let countElement = 1;
  return (
    <div className="filter-container">
      <select
        className="filter-element"
        value={props.selectElement || ""}
        onChange={props.change}
      >
        <option value="">Element Type</option>
        {props.element.map((elementObject) => (
          <option key={countElement++} value={elementObject}>
            {elementObject}
          </option>
        ))}
      </select>
      <select
        className="filter-types"
        value={props.selectSubType || ""}
        onChange={props.changesubtype}
      >
        <option value="">Subtype</option>
        {props.subtype.map((subtypeObject) => (
          <option key={subtypeObject} value={subtypeObject.replace(/\s/g, ".")}>
            {subtypeObject}
          </option>
        ))}
      </select>
      <select
        className="filter-card"
        value={props.selectCardType || ""}
        onChange={props.changeCard}
      >
        <option value="">Card Type</option>
        {props.cardtype.map((cardtypeObject) => (
          <option key={cardtypeObject} value={cardtypeObject}>
            {cardtypeObject}
          </option>
        ))}
      </select>
    </div>
  );
}
export default FilterCards;
