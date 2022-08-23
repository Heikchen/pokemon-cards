import Card from "../Card/Card";
import "./AllCards.css";
import axios from "axios";
import React from "react";
import Spinner from "../Spinner/Spinner";
import FilterCards from "../FilterCards/FilterCards";

function AllCards() {
  const [allCards, setAllCards] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [indexStart, setIndexStart] = React.useState(1);
  const [indexEnd, setIndexEnd] = React.useState(250);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [element, setElement] = React.useState([]);
  const [subtype, setSubtype] = React.useState([]);
  const [cardtype, setCardtype] = React.useState([]);
  const [filter, setFilter] = React.useState([
    { selectElement: "", selectSubType: "", selectCardType: "" },
  ]);
  const filterElement = `types:${filter.selectElement}`;
  const filterCardType = `supertype:${filter.selectCardType}`;
  const filterSubType = `subtypes:${filter.selectSubType}`;

  React.useEffect(() => {
    setFilter({
      ...filter,
      selectCardType: "",
      selectElement: "",
      selectSubType: "",
    });
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
    axios.get("https://api.pokemontcg.io/v2/supertypes").then((response) => {
      setCardtype(response.data.data);
    });
  };
  const handleChange = (event) => {
    const selectName = event.target.name;
    const selectValue = event.target.value;
    const newFilter = {
      ...filter,
      [selectName]: selectValue,
    };
    setFilter(newFilter);
    setPage(1);
    console.log(newFilter);
  };

  const fetchFilter = (filtertype, selectPage) => {
    setIsLoading(true);
    const type = `https://api.pokemontcg.io/v2/cards/?q=${filtertype};page=${selectPage}/`;
    axios.get(type).then((response) => {
      setAllCards(response.data.data);
      console.log(response.data.data, type);
      setIsLoading(false);
    });
  };
  const fetchCards = (selectPage) => {
    setIsLoading(true);
    axios
      .get(`https://api.pokemontcg.io/v2/cards/?page=${selectPage}`)
      .then((response) => {
        setAllCards(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (
      filter.selectElement === "" &&
      filter.selectCardType === "" &&
      filter.selectSubType === ""
    ) {
      fetchCards(page);
      console.log("all", filter, filter.selectElement);
    } else if (
      filter.selectElement !== "" &&
      filter.selectCardType === "" &&
      filter.selectSubType === ""
    ) {
      fetchFilter(filterElement, page);
    } else if (
      filter.selectCardType !== "" &&
      filter.selectElement === "" &&
      filter.selectSubType === ""
    ) {
      fetchFilter(filterCardType, page);
    } else if (
      filter.selectCardType !== "" &&
      filter.selectElement !== "" &&
      filter.selectSubType === ""
    ) {
      fetchFilter(`${filterCardType}%20${filterElement}`, page);
    } else if (
      filter.selectSubType !== "" &&
      filter.selectElement === "" &&
      filter.selectCardType === ""
    ) {
      fetchFilter(filterSubType, page);
    } else if (
      filter.selectSubType !== "" &&
      filter.selectElement !== "" &&
      filter.selectCardType === ""
    ) {
      fetchFilter(`${filterSubType}%20${filterElement}`, page);
    } else if (
      filter.selectSubType !== "" &&
      filter.selectCardType !== "" &&
      filter.selectElement === ""
    ) {
      fetchFilter(`${filterSubType}%20${filterCardType}`, page);
    } else if (
      filter.selectSubType !== "" &&
      filter.selectCardType !== "" &&
      filter.selectElement !== "" &&
      filter.selectElement !== undefined
    ) {
      setIsLoading(true);
      fetchFilter(
        `${filterSubType}%20${filterCardType}%20${filterElement}`,
        page
      );
    }
    window.scrollTo(0, 0);
    if (page > 1) {
      setIsDisabled(false);
      console.log("false");
    } else if (page === 1) {
      setIsDisabled(true);
      console.log("true");
    }
  }, [filter, page]);

  const handleClicknext = () => {
    setPage((page) => page + 1);
    setIndexStart((indexStart) => indexStart + 250);
    setIndexEnd((indexEnd) => indexEnd + 250);
    console.log(page);
  };
  const handleClickprevious = () => {
    setPage((page) => page - 1);
    setIndexStart((indexStart) => indexStart - 250);
    setIndexEnd((indexEnd) => indexEnd - 250);
    console.log(page);
  };

  return (
    <div className="cards-container">
      <h1 className="cards-title">
        Pokémon Cards {indexStart}-{indexEnd}
      </h1>
      <FilterCards
        change={handleChange}
        element={element}
        subtype={subtype}
        cardtype={cardtype}
        selectElement={filter.selectElement}
        selectCardType={filter.selectCardType}
        selectSubType={filter.selectSubType}
      />
      <div className="main-card-container">
        {isLoading ? (
          <Spinner />
        ) : (
          allCards.map((allCardsObject) => (
            <Card key={allCardsObject.id} card={allCardsObject} />
          ))
        )}
      </div>
      <div>
        {isDisabled ? (
          <button
            disabled={true}
            onClick={handleClickprevious}
            className="cards-btn-previous"
          >
            {"<"}
          </button>
        ) : (
          <button
            disabled={false}
            onClick={handleClickprevious}
            className="cards-btn-previous"
          >
            {"<"}
          </button>
        )}

        <button onClick={handleClicknext} className="cards-btn">
          {">"}
        </button>
      </div>
    </div>
  );
}
export default AllCards;
