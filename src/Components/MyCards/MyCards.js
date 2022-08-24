import "./MyCards.css";
import React from "react";
import Card from "../Card/Card";

function MyCards(props) {
  console.log(props.selectmyCards);

  return (
    <div>
      <h1 className="my-card-header">My Cards</h1>
      <div className="my-cards">
        {props.selectmyCards?.map((myCardsObject) => (
          <div className="my-card-container" key={myCardsObject.id}>
            <h1 className="my-card-title">{myCardsObject.name}</h1>
            <Card key={myCardsObject.id} card={myCardsObject} />
            <div className="my-card-buttons">
              <div className="my-card-button-container">
                <button
                  className="my-card-add-btn"
                  onClick={() => props.addCard(myCardsObject.id)}
                >
                  +
                </button>
                <button
                  className="my-card-minus-btn"
                  onClick={() => props.removeCard(myCardsObject.id)}
                >
                  -
                </button>
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
