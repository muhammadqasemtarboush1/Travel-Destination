import React from "react";

function Tour({ data }) {
  return (
    <li key={data.id}>
      <div className="card">
        <img src={data.image} className="card__image" alt={data.name} />
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">{data.name}</h3>
            <span>{data.price}</span>
          </div>
        </div>
        {/* <p className="card__description">{data.info}</p> */}
      </div>
    </li>
  );
}

export default Tour;
