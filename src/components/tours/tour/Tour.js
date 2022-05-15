import React from "react";
import { Link } from "react-router-dom";

function Tour({ data }) {
  return (
    <li key={data.id}>
      <Link to={`/city/${data.id}`}>
        <div className="card">
          <img src={data.image} className="card__image" alt={data.name} />
          <div className="card__header">
            <div className="card__header-text">
              <h3 className="card__title">{data.name}</h3>
              <span>{data.price}</span>
            </div>
          </div>
          <p className="card__description"></p>
        </div>
      </Link>
    </li>
  );
}

export default Tour;
