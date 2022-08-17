import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import "./fonts/PokemonSolidNormal-xyWR.ttf";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
