import "./MyCards.css";
import React from "react";
import Card from "../Card/Card";

function MyCards(props) {
  const uniqueCards = Array.from(new Set(props.selectmyCards));

  console.log(uniqueCards);
  console.log(props.selectmyCards);

  return (
    <div>
      <h1 className="my-card-header">My Cards</h1>
      <div className="my-cards">
        {props.selectmyCards.map((myCardsObject) => (
          <div className="my-card-container" key={myCardsObject.id}>
            <h1 className="my-card-title">{myCardsObject.name}</h1>
            <Card key={myCardsObject.id} card={myCardsObject} />
            <div className="my-card-buttons">
              <div className="my-card-button-container">
                <button className="my-card-add-btn">+</button>
                <button className="my-card-minus-btn">-</button>
              </div>
              <p className="my-card-count">{myCardsObject.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCards;
