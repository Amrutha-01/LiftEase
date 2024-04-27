import React from "react";
import "./LEWorkGet.css";

export default function LEWorkGet(props) {
  const { data } = props;
  const { title, description, cardsData } = data;

  return (
    <div className="LEWorkGet">
      <div className="top-part">
        <h1>{title}</h1>
        <div className="vertical"></div>
        <p>{description}</p>
      </div>
      <div className="bottom-part">
        {cardsData.map((item) => (
          <div className="card">
            <img src={item.CardImg} className="bottom-part-img" />
            <h3>{item.cardTitle}</h3>
            <p>{item.cardDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
