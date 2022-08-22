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
  const [selectElement, setSelectElement] = React.useState("");
  const [selectCardType, setSelectCardType] = React.useState("");
  const [selectSubType, setSelectSubType] = React.useState("");

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
    axios.get("https://api.pokemontcg.io/v2/supertypes").then((response) => {
      setCardtype(response.data.data);
    });
  };
  const handleChangeElement = (event) => {
    setSelectElement(event.target.value);
    setPage(1);
    console.log(selectElement);
  };
  const handleChangeCard = (event) => {
    setSelectCardType(event.target.value);
    setPage(1);
    console.log(selectCardType);
  };
  const handleChangeSubtype = (event) => {
    setSelectSubType(event.target.value);

    setPage(1);
    console.log(selectSubType);
  };

  const fetchFilterElement = (element, selectPage) => {
    setIsLoading(true);
    const type = `https://api.pokemontcg.io/v2/cards/?q=types:${element};page=${selectPage}/`;
    axios.get(type).then((response) => {
      setAllCards(response.data.data);
      console.log(response.data.data, type);
      setIsLoading(false);
    });
  };
  const fetchFilterCard = (cardType, selectPage) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards/?q=supertype:${cardType};page=${selectPage}/`
      )
      .then((response) => {
        setAllCards(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  };
  const fetchFilterSubtype = (subtype, selectPage) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards/?q=subtypes:${subtype};page=${selectPage}/`
      )
      .then((response) => {
        setAllCards(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  };
  const fetchCardElement = (cardType, element, selectPage) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards/?q=supertype:${cardType}%20types:${element};page=${selectPage}/`
      )
      .then((response) => {
        setAllCards(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  };
  const fetchsubElement = (subtype, element, selectPage) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards/?q=types:${element}%20subtypes:${subtype};page=${selectPage}/`
      )
      .then((response) => {
        setAllCards(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  };
  const fetchsubCard = (subtype, cardtype, selectPage) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards/?q=supertype:${cardtype}%20subtypes:${subtype};page=${selectPage}/`
      )
      .then((response) => {
        setAllCards(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  };
  const fetchsubCardElement = (subtype, cardtype, element, selectPage) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards/?q=supertype:${cardtype}%20types:${element}%20subtypes:${subtype};page=${selectPage}/`
      )
      .then((response) => {
        setAllCards(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    if (
      selectElement.length > 0 &&
      selectCardType === "" &&
      selectSubType === ""
    ) {
      fetchFilterElement(selectElement, page);
    } else if (
      selectCardType.length > 0 &&
      selectElement === "" &&
      selectSubType === ""
    ) {
      fetchFilterCard(selectCardType, page);
    } else if (
      selectCardType.length > 0 &&
      selectElement.length > 0 &&
      selectSubType === ""
    ) {
      fetchCardElement(selectCardType, selectElement, page);
    } else if (
      selectSubType.length > 0 &&
      selectElement === "" &&
      selectCardType === ""
    ) {
      fetchFilterSubtype(selectSubType, page);
    } else if (
      selectSubType.length > 0 &&
      selectElement.length > 0 &&
      selectCardType === ""
    ) {
      fetchsubElement(selectSubType, selectElement, page);
    } else if (
      selectSubType.length > 0 &&
      selectCardType.length > 0 &&
      selectElement === ""
    ) {
      fetchsubCard(selectSubType, selectCardType, page);
    } else if (
      selectSubType.length > 0 &&
      selectCardType.length > 0 &&
      selectElement.length > 0
    ) {
      fetchsubCardElement(selectSubType, selectCardType, selectElement, page);
    } else {
      fetchCards(page);
    }
  }, [selectElement, selectCardType, selectSubType]);

  React.useEffect(() => {
    if (selectElement === "") {
      fetchCards(page);
      console.log("all");
    } else {
      fetchFilterElement(selectElement, page);
      console.log("filter", selectElement);
    }
    window.scrollTo(0, 0);
    if (page > 1) {
      setIsDisabled(false);
      console.log("false");
    } else if (page === 1) {
      setIsDisabled(true);
      console.log("true");
    }
  }, [page]);

  const fetchCards = (selectPage) => {
    setIsLoading(true);
    const link = `https://api.pokemontcg.io/v2/cards/?page=${selectPage}`;
    axios.get(link).then((response) => {
      setAllCards(response.data.data);
      console.log(response.data.data, link);
      setIsLoading(false);
    });
  };

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
        change={handleChangeElement}
        element={element}
        subtype={subtype}
        cardtype={cardtype}
        selectElement={selectElement}
        selectCardType={selectCardType}
        selectSubType={selectSubType}
        changeCard={handleChangeCard}
        changesubtype={handleChangeSubtype}
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
