import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import "./fonts/PokemonSolidNormal-xyWR.ttf";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
