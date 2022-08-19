import "./Detailcard.css";
import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Detailcard() {
  const [oneCard, setOneCard] = React.useState([]);
  const [holofoil, setHolofoil] = React.useState(false);
  const [normal, setNormal] = React.useState(false);
  const [firstedition, setFirstedition] = React.useState(false);
  const [unlimited, setUnlimited] = React.useState(false);
  const [reverseholofoil, setReverseHolofoil] = React.useState(false);
  const [attacks, setAttacks] = React.useState([]);
  const [weakness, setWeakness] = React.useState([]);
  const [symbol, setSymbol] = React.useState([]);
  let edition = "response.data.data.tcgplayer.prices.1stEdition";
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
        if (response.data.data.tcgplayer.prices.holofoil !== undefined) {
          console.log("not undefined");
          setHolofoil(true);
        }
        if (response.data.data.tcgplayer.prices.normal !== undefined) {
          console.log("not undefined");
          setNormal(true);
        }
        if (response.data.data.tcgplayer.prices.reverseHolofoil !== undefined) {
          console.log("not undefined");
          setReverseHolofoil(true);
        }
        if (edition !== undefined) {
          console.log("not undefined");
          setFirstedition(true);
        }
        if (response.data.data.tcgplayer.prices.unlimited !== undefined) {
          console.log("not undefined");
          setUnlimited(true);
        }
      });
  };
  return (
    <div className="detail-card">
      <img
        className="detail-card-image"
        src={oneCard.images?.large}
        alt={oneCard.name}
      />
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
          <a className="detail-card-market-link" href={oneCard.tcgplayer?.url}>
            From TCGPlyer
          </a>
          <p className="detail-card-market-update">
            Last Updated: {oneCard.tcgplayer?.updatedAt}
          </p>

          {normal ? (
            <div className="detail-card-market-prices-normal">
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Normal Market
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.normal.market}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">Normal Low</h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.normal.low}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">Normal Mid</h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.normal.mid}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">Normal High</h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.normal.high}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}

          {holofoil ? (
            <div className="detail-card-market-prices-holofoil">
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Holofoil Market
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer?.prices.holofoil.market}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">Holofoil Low</h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.holofoil.low}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">Holofoil Mid</h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.holofoil.mid}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Holofoil High
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.holofoil.high}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}

          {reverseholofoil ? (
            <div className="detail-card-market-prices-reverseholofoil">
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Reverse Holofoil Market
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer?.prices.reverseHolofoil.market}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Reverse Holofoil Low
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.reverseHolofoil.low}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Reverse Holofoil Mid
                </h2>

                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.reverseHolofoil.mid}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Reverse Holofoil High
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.reverseHolofoil.high}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}

          {firstedition ? (
            <div className="detail-card-market-prices-firstedition">
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  1st Edition Market
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.market}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  1st Edition Low
                </h2>
                <p className="detail-card-market-detail-price">
                  ${{ edition }.low}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  1st Edition Mid
                </h2>
                <p className="detail-card-market-detail-price">
                  ${{ edition }.mid}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  1st Edition High
                </h2>
                <p className="detail-card-market-detail-price">
                  ${{ edition }.high}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {unlimited ? (
            <div className="detail-card-market-prices-unlimited">
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Unlimited Market
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer?.prices.unlimited.market}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Unlimited Low
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.unlimited.low}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Unlimited Mid
                </h2>

                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.unlimited.mid}
                </p>
              </div>
              <div className="detail-card-market-detail">
                <h2 className="detail-card-market-detail-name">
                  Unlimited High
                </h2>
                <p className="detail-card-market-detail-price">
                  ${oneCard.tcgplayer.prices.unlimited.high}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="detail-card-attacks">
          <h1 className="detail-card-attacks-title">Attacks</h1>
          {attacks !== undefined ? (
            attacks.map((attacksObject) => (
              <div className="detail-card-attacks-info">
                <h2 className="detail-card-attacks-name">
                  {attacksObject.name}
                </h2>
                <p className="detail-card-attacks-text">{attacksObject.text}</p>
              </div>
            ))
          ) : (
            <p>Not available</p>
          )}
        </div>
        <div className="detail-card-short-info">
          <div className="info-left">
            <div>
              <h1 className="info-name">Weakness</h1>
              {attacks !== undefined ? (
                weakness.map((weaknessObject) => (
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
              <h2 className="info-text">{oneCard.nationalPokedexNumbers}</h2>
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
  );
}

export default Detailcard;
