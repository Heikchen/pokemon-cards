import { useParams, Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./Detailset.css";
import Spinner from "../Spinner/Spinner";

function Detailset() {
  const [oneSet, setoneSet] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  let urlParamId = useParams().id;
  React.useEffect(() => {
    if (urlParamId !== undefined) {
      fetchOneSet(urlParamId);
    }
  }, [urlParamId]);

  const fetchOneSet = (index) => {
    setIsLoading(true);
    axios
      .get(`https://api.pokemontcg.io/v2/cards/?q=set.id:${index}`)
      .then((response) => {
        setoneSet(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  };
  return (
    <div className="one-set-container">
      <h1 className="one-set-title">
        Set: {oneSet[0]?.set.id} - {oneSet[0]?.set.total} Cards
      </h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="one-set">
          {oneSet.map((oneSetObject) => (
            <Link to={`/card/${oneSetObject.id}`}>
              <img
                key={oneSetObject.id}
                className="one-set-image"
                src={oneSetObject.images.small}
                alt={oneSetObject.name}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detailset;
