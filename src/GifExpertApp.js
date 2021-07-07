import React, { useState } from "react";
import AddHero from "./components/AddHero";
import GifGrid from "./components/GifGrid";
import "./assets/sass/components/giftExpertApp.sass";

const GifExpertApp = () => {
  const [heroes, setHeroes] = useState(["Saitama"]);

  const heroesList = heroes.map((heroe) => (
    <GifGrid key={heroe} hero={heroe} />
  ));

  return (
    <main className="main">
      <h1 className="animate__animated animate__bounce main__title">
        GifExpert App
      </h1>

      <AddHero setHeroes={setHeroes} />

      <hr></hr>

      {heroesList}
    </main>
  );
};

export default GifExpertApp;
