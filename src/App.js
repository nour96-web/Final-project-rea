import { useState } from "react";
import "./App.css";
import Entete from "./components/Entete";
import FoodListe from "./components/FoodListe";
import Boxes from "./components/Boxes";
import Galery from "./components/Galery";
import Footer from "./components/Footer";
import Slideshow from "./components/Slideshow";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Entete />
      <Slideshow />
      <FoodListe />
      <Boxes />
      <Galery />
      <Footer />
    </div>
  );
}

export default App;
