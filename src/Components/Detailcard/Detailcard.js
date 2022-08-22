import "./Detailcard.css";
import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Detailcard() {
  const [oneCard, setOneCard] = React.useState([]);

  const [attacks, setAttacks] = React.useState([]);
  const [weakness, setWeakness] = React.useState([]);
  const [symbol, setSymbol] = React.useState([]);
  let urlParamId = useParams().id;
  React.useEffect(() => {
    if (urlParamId !== undefined) {
      fetchOneCard(urlParamId);
    }
  }, [urlParamId]);

  const fetchOneCard = (index) => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards/${index}`)
      .then((response) => {
        setOneCard(response.data.data);
        setAttacks(response.data.data.attacks);
        setWeakness(response.data.data.weaknesses);
        setSymbol(response.data.data.set.images.symbol);
      });
  };
  return (
    <div>
      <Link to={"/allcards"}>
        <button className="back-all-cards"> {"<"} </button>
      </Link>
      <div className="detail-card">
        <div className="detail-card-left">
          <img
            className="detail-card-image"
            src={oneCard.images?.large}
            alt={oneCard.name}
          />
          <h2 className="detail-card-add">Add to my Cards</h2>
          <div className="detail-card-btn">
            <button className="detail-card-add-btn">+</button>
            <button className="detail-card-minus-btn">-</button>
          </div>
        </div>
        <div className="detail-card-info">
          <div className="detail-card-basic">
            <h1 className="detail-card-basic-name">{oneCard.name}</h1>
            <p className="detail-card-basic-type">
              {oneCard.supertype} - {oneCard.subtypes}
            </p>
            <p className="detail-card-basic-basic">
              HP {oneCard.hp} - {oneCard.types}
            </p>
          </div>
          <div className="detail-card-market">
            <h1 className="detail-card-market-title">Prices</h1>
            <a
              className="detail-card-market-link"
              href={oneCard.tcgplayer?.url}
            >
              From TCGPlyer
            </a>
            <p className="detail-card-market-update">
              Last Updated: {oneCard.tcgplayer?.updatedAt}
            </p>
            {oneCard.tcgplayer?.prices &&
              Object.keys(oneCard.tcgplayer.prices).map((priceItem) => (
                <>
                  {console.log(priceItem)}
                  <div
                    className={`detail-card-market-prices-${priceItem.toLowerCase()}`}
                  >
                    <div className="detail-card-market-detail">
                      <h2 className="detail-card-market-detail-name">
                        {priceItem} Market
                      </h2>
                      <p className="detail-card-market-detail-price">
                        ${oneCard.tcgplayer.prices[priceItem]?.market}
                      </p>
                    </div>
                    <div className="detail-card-market-detail">
                      <h2 className="detail-card-market-detail-name">
                        {priceItem} Low
                      </h2>
                      <p className="detail-card-market-detail-price">
                        ${oneCard.tcgplayer.prices[priceItem]?.low}
                      </p>
                    </div>
                    <div className="detail-card-market-detail">
                      <h2 className="detail-card-market-detail-name">
                        {priceItem} Mid
                      </h2>
                      <p className="detail-card-market-detail-price">
                        ${oneCard.tcgplayer.prices[priceItem]?.mid}
                      </p>
                    </div>
                    <div className="detail-card-market-detail">
                      <h2 className="detail-card-market-detail-name">
                        {priceItem} High
                      </h2>
                      <p className="detail-card-market-detail-price">
                        ${oneCard.tcgplayer.prices[priceItem]?.high}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            {/* ) : (
            ""
 )} */}
            <div className="detail-card-attacks">
              <h1 className="detail-card-attacks-title">Attacks</h1>
              {attacks !== undefined ? (
                Array.isArray(attacks) ? (
                  attacks?.map((attacksObject) => (
                    <div className="detail-card-attacks-info">
                      <h2 className="detail-card-attacks-name">
                        {attacksObject.name}
                      </h2>
                      <p className="detail-card-attacks-text">
                        {attacksObject.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="detail-card-attacks-info">
                    <h2 className="detail-card-attacks-name">{attacks.name}</h2>
                    <p className="detail-card-attacks-text">{attacks.text}</p>
                  </div>
                )
              ) : (
                <p>Not available</p>
              )}
            </div>
            <div className="detail-card-short-info">
              <div className="info-left">
                <div>
                  <h1 className="info-name">Weakness</h1>
                  {weakness !== undefined ? (
                    weakness?.map((weaknessObject) => (
                      <h2 className="info-text">
                        {weaknessObject.type} {weaknessObject.value}
                      </h2>
                    ))
                  ) : (
                    <p>Not available</p>
                  )}
                </div>
                <div>
                  <h1 className="info-name">Rarity</h1>
                  <h2 className="info-text">{oneCard.rarity}</h2>
                </div>
                <div>
                  <h1 className="info-name">Number</h1>
                  <h2 className="info-text">
                    {oneCard.number} / {oneCard.set?.total}
                  </h2>
                </div>
              </div>
              <div className="info-right">
                <div>
                  <h1 className="info-name">Pokedex Number</h1>
                  <h2 className="info-text">
                    {oneCard.nationalPokedexNumbers}
                  </h2>
                </div>
                <div>
                  <h1 className="info-name">Artist</h1>
                  <h2 className="info-text">{oneCard.artist}</h2>
                </div>

                <div>
                  <h1 className="info-name">Set</h1>
                  <Link to={`/set/${oneCard.set?.id}`}>
                    <div className="info-set">
                      <h2 className="info-text-image">{oneCard.set?.name}</h2>
                      <img
                        className="info-image"
                        src={symbol}
                        alt={oneCard.set?.name}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <p className="detail-card-rule">{oneCard.rules}</p>
            <div className="detail-card-legalities">
              <div className="detail-card-legalities-container">
                <p className="detail-card-legalities-name">Standard</p>
                {oneCard.legalities?.standard !== undefined ? (
                  <p className="detail-card-legalities-legal">Legal</p>
                ) : (
                  <p className="detail-card-legalities-notlegal">Not Legal</p>
                )}
              </div>
              <div className="detail-card-legalities-container">
                <p className="detail-card-legalities-name">Expanded</p>
                {oneCard.legalities?.expanded !== undefined ? (
                  <p className="detail-card-legalities-legal">Legal</p>
                ) : (
                  <p className="detail-card-legalities-notlegal">Not Legal</p>
                )}
              </div>
              <div className="detail-card-legalities-container">
                <p className="detail-card-legalities-name">Unlimited</p>
                {oneCard.legalities?.unlimited !== undefined ? (
                  <p className="detail-card-legalities-legal">Legal</p>
                ) : (
                  <p className="detail-card-legalities-notlegal">Not Legal</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailcard;
