import { GamesCarousel } from "./GamesCarousel";
import { LogoNidoNoText } from "./LogoNidoNoText";
import { Button } from "./Button";

import tavern from "../assets/tavern.jpg";
import bgSheet from "../assets/village.png";
import mordenkainen from "../assets/mordenkainen.webp";
import sheets from "../assets/sheets.png";
import faerun from "../assets/faerun-grey.png";

export function Homepage(): JSX.Element {
  return (
    <div className="flex-v-between homepage">
      <img src={tavern} alt="tavern" className="top-image" />

      <main className="flex-v-center home-about-nido">
        <h1>Nido Retold</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          officia error officiis tenetur accusamus, cumque exercitationem labore
          pariatur excepturi tempore! Ducimus aut perferendis eligendi a illo
          iure nihil ipsum odio? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Magni officia error officiis tenetur accusamus,
          cumque exercitationem labore pariatur excepturi tempore! Ducimus aut
          perferendis eligendi a illo iure nihil ipsum odio? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Magni officia error officiis
          tenetur accusamus, cumque exercitationem labore pariatur excepturi
          tempore! Ducimus aut perferendis eligendi a illo iure nihil ipsum
          odio?
        </p>
        <div className="home-about-decoration">
          {" "}
          <img src="../src/assets/home-decoration.png" alt="Home Decoration" />
          <div className="flex-h-center home-about-logo">
            <LogoNidoNoText />
          </div>
        </div>
      </main>

      <section className="flex-v-center grey-scroll-background home-games-list">
        <h2>Sessioni del Mese</h2>
        <GamesCarousel />
      </section>

      <section className="flex-h-between home-sheet-creation">
        <div></div>
        <div className="flex-v-center home-sheet-content">
          <div className="flex-v-between home-content-text white-text">
            <h2>Crea La Tua Scheda</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
          <Button
            style="home-sheet-button"
            content="Crea Ora"
            onClick={() => {
              return;
            }}
          />
        </div>
        <div className="flex-h-center absolute-no-click home-sheet-bg">
          <img src={bgSheet} alt="background" />
        </div>
        <img
          src={mordenkainen}
          alt="Mordenkainen"
          className="absolute-no-click home-mordenkainen"
        />
        <img
          src={sheets}
          alt="sheets"
          className="absolute-no-click home-sheets-img"
        />
      </section>

      <section className="flex-h-between grey-scroll-background home-world">
        <div className="flex-v-center home-world-content">
          <div className="flex-v-center home-content-text black-text">
            <h2>Un Mondo in continua evoluzione</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <Button
            style="home-world-button"
            content="Entra nel Mondo"
            onClick={() => {
              return;
            }}
          />
        </div>
        <div></div>
        <img
          src={faerun}
          alt="Faerun"
          className="absolute-no-click home-world-img"
        />
      </section>
    </div>
  );
}
