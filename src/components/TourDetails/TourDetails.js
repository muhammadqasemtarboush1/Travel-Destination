import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/db.json";
function TourDetails() {
  let { id } = useParams();
  let tour = data.filter((city) => city.id === id);
  const [seeMore, setSeeMore] = useState(false);

  const handellSeeMore = () => {
    setSeeMore(!seeMore);
  };
  return (
    <div className="card">
      <img src={tour[0].image} className="card__image" alt={tour[0].name} />
      <div className="card__header">
        <div className="card__header-text">
          <h3 className="card__title">{tour[0].name}</h3>
          <span>{tour[0].price}</span>
        </div>
      </div>
      <span>
        {!seeMore && tour[0].info.substring(0, 87)}
        {seeMore && tour[0].info}
        <button variant="info" onClick={handellSeeMore}>
          {seeMore ? "See Less" : "See More"}
        </button>
      </span>
      <p className="card__description"></p>
    </div>
  );
}

export default TourDetails;

//   const [show,setShow]=useState(false);
//   function handelshow  (){
//     setShow(!show)
//   }

//   return (
//     <div key={id}>

//         <img src={tour[0].image}  className="cardimage" alt="" />
//          <div className="">
//            <div className="cardheader">
//              <svg className="cardarc" xmlns="http://www.w3.org/2000/svg%22%3E<path /></svg>
//              <img className="cardthumb" src={tour[0].image} alt={tour[0].alter} />
//              <div className="cardheader-text">
//                <h3 className="cardtitle">Name : {tour[0].name} </h3>
//                <div className='cardtagline'><h6>ID : {tour[0].id}</h6></div>
//                <span className="cardstatus">
//                {!show && tour[0].info.substring(0,87) }
//                {show && tour[0].info}
//                <button variant="info" onClick={handelshow}>{show ? 'See Less' : 'See More'}</button>
//                </span>
//              </div>
//            </div>

//          </div>

//     </div>
//   )
// }
