// import Footer from "../footer/Footer";
// import Header from "../header/Header";
import Tours from "../tours/Tours";
import data from "../../data/db.json";

import "./Home.css";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Tours data={data} />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
