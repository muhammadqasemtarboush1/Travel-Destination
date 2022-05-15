// import data from "../../data/db.json";
import Tour from "./tour/Tour";
import "./Tours.css";
function Tours({ data }) {
  return (
    <div>
      <ul className="cards">
        {data.map((element) => {
          return <Tour data={element} key={element.id} />;
        })}
      </ul>
    </div>
  );
}

export default Tours;
