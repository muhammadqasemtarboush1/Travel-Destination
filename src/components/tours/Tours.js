import data from "../../data/db.json";
import Tour from "./tour/Tour";
import "./Tours.css";
function Tours() {
  return (
    <div>
      <ul className="cards">
        {data.map((element, index) => {
          return <Tour data={element} />;
        })}
      </ul>
    </div>
  );
}

export default Tours;
