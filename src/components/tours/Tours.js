import data from "../../data/db.json";
import "./Tours.css";
function Tours() {
  return (
    <div>
      <ul className="cards">
        {data.map((element, index) => {
          return (
            <li key={element.id}>
              <div className="card">
                <img
                  src={element.image}
                  className="card__image"
                  alt={element.name}
                />
                <div className="card__header">
                  <div className="card__header-text">
                    <h3 className="card__title">{element.name}</h3>
                    <span>{element.price}</span>
                  </div>
                </div>
                <p className="card__description">{element.info}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tours;
