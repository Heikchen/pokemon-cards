import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./Detailset.css";

function SetsDetail() {
  const [oneSet, setoneSet] = React.useState([]);
  let urlParamId = useParams().id;
  React.useEffect(() => {
    if (urlParamId !== undefined) {
      fetchOneSet(urlParamId);
    }
  }, [urlParamId]);

  const fetchOneSet = (index) => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards/?q=set.id:${index}`)
      .then((response) => {
        setoneSet(response.data.data);
        console.log(oneSet[0].set.id);
      });
  };
  return (
    <div className="one-set-container">
      <h1 className="one-set-title">Set: {oneSet[0].set.id}</h1>
      <div className="one-set">
        {oneSet.map((oneSetObject) => (
          <img
            key={oneSetObject.id}
            className="one-set-image"
            src={oneSetObject.images.small}
          />
        ))}
      </div>
    </div>
  );
}

export default SetsDetail;
