import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import "./fonts/PokemonSolidNormal-xyWR.ttf";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCards from "./Components/AllCards/AllCards";
import AllSets from "./Components/AllSets/AllSets";
import Detailset from "./Components/Detailset/Detailset";
import Detailcard from "./Components/Detailcard/Detailcard";
import SearchCard from "./Components/SearchCard/SearchCard";
import MyCards from "./Components/MyCards/MyCards";

function App() {
  const [selectmyCards, setSelectMyCards] = React.useState([]);
  const [ownCard, setOwnCard] = React.useState([]);

  const addToMyCards = (cardToAdd) => {
    const doesCardExistInDeck = selectmyCards.find(
      (card) => card.id === cardToAdd.id
    );

    if (!doesCardExistInDeck) {
      setSelectMyCards([...selectmyCards, { ...cardToAdd, count: 1 }]);
    } else {
      console.log(cardToAdd);
      const newCardList = selectmyCards.map((card) => {
        if (card.id === cardToAdd.id) {
          card.count += 1;
          return { ...card };
        } else {
          return { ...card };
        }
      });

      setSelectMyCards(newCardList);
    }
  };
  const removeMyCards = (removeFromCard) => {
    const removeCardList = selectmyCards.map((card) => {
      if (card.id === removeFromCard.id) {
        if (card.count > 1) {
          card.count -= 1;
          console.log(card);
          return { ...card };
        } else if (card.count === 1) {
          return null;
        }
      } else if (card.id !== removeFromCard.id) {
        return { ...card };
      }
    });

    const newList = removeCardList.filter((item) => item !== null);
    setSelectMyCards(newList);
    console.log(selectmyCards);
  };

  const addCard = (cardToAdd) => {
    const newCardList = selectmyCards.map((card) => {
      if (card.id === cardToAdd) {
        card.count += 1;
        return { ...card };
      } else {
        return { ...card };
      }
    });

    setSelectMyCards(newCardList);
  };
  const removeCard = (removeCard) => {
    const removeCardList = selectmyCards.map((card) => {
      if (card.id === removeCard) {
        if (card.count > 1) {
          card.count -= 1;
          console.log(card);
          return { ...card };
        } else if (card.count === 1) {
          return null;
        }
      } else if (card.id !== removeCard) {
        return { ...card };
      }
    });

    const newList = removeCardList.filter((item) => item !== null);
    setSelectMyCards(newList);
    console.log(selectmyCards);
  };
  const handleOwnCards = (countOwnCards) => {
    const countCards = selectmyCards.map((card) => {
      console.log(countOwnCards);
      if (card.id === countOwnCards.id) {
        console.log(card.count);
        return card.count;
      } else {
        return;
      }
    });
    console.log(countCards);
    const newCards = countCards.filter((item) => item !== undefined);
    console.log(newCards);
    setOwnCard(newCards);
    console.log(ownCard);
  };
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/allcards" element={<AllCards />} />
          <Route path="/search" element={<SearchCard />} />
          <Route path="/allsets" element={<AllSets />} />
          <Route path="/set/:id" element={<Detailset />} />
          <Route
            path="/card/:id"
            element={
              <Detailcard
                addToMyCards={addToMyCards}
                removeMyCards={removeMyCards}
                handleOwnCards={handleOwnCards}
                ownCards={selectmyCards}
                showCount={ownCard}
              />
            }
          />
          <Route
            path="/mycards"
            element={
              <MyCards
                selectmyCards={selectmyCards}
                addCard={addCard}
                removeCard={removeCard}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
