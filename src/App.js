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
            element={<Detailcard addToMyCards={addToMyCards} />}
          />
          <Route
            path="/mycards"
            element={<MyCards selectmyCards={selectmyCards} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
