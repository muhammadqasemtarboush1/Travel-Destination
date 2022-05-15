import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TourDetails from "./components/TourDetails/TourDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/city/:id" index element={<TourDetails />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
