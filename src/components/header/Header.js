import Navbar from "../Navbar/Navbar";
import "./Header.css";
function Header() {
  return (
    <>
      <header>
        <Navbar />
        <br />
        <div className="">
          <h1 className="">Welcome To Travel Destination</h1>
          <p>You can see a list of the most visited places around the world</p>
        </div>
      </header>
    </>
  );
}

export default Header;
