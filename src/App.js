import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import "./fonts/PokemonSolidNormal-xyWR.ttf";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCards from "./Components/AllCards/AllCards";
import AllSets from "./Components/AllSets/AllSets";
import Detailset from "./Components/Detailset/Detailset";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcards" element={<AllCards />} />
          <Route path="/allsets" element={<AllSets />} />
          <Route path="/set/:id" element={<Detailset />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
