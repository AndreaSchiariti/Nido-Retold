import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ButtonIconNoBg } from "./ButtonIconNoBg";

import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const singleGames = [game1, game2, game1, game2];

export function GamesCarousel(): JSX.Element {
  const [sessions, setSessions] = useState<string[]>(singleGames);
  const linkCentralIndex = sessions.length;
  const [imageIndex, setImageIndex] = useState<number>(linkCentralIndex);

  const games = [...sessions, ...sessions, ...sessions];

  const transition = useRef<boolean>(true);

  useEffect(() => {
    const maxIndex = games.length;

    // I use variable in order to calculate where to start the
    // illusion for the infinite carousel loop

    // Starting index for middle array
    const middleSetStart = linkCentralIndex; 

    // Ending index for the middle array
    const middleSetEnd = linkCentralIndex + sessions.length - 1; 

   
    if (imageIndex < linkCentralIndex) {
      // For the left scroll the carousel goes to the end of the middle array
      transition.current = false;
      setTimeout(() => {
        //The codes takes the total array length and from that takes out the
        //difference between last index of the middle array and the
        //current index. Since we are working with the total array lenght in
        //order to "land" on tthe right index we need to subtract 1
        setImageIndex(maxIndex - (middleSetEnd - imageIndex) - 1);
      }, 300);
    } else if (imageIndex >= maxIndex - linkCentralIndex) {
      //For the Right scroll the carousel goes back to the beginning of the middle array
      //in this case we take the total of the array and subtract the index of the middle array.
      //By subtracting it to the current index we may end up with 0 if even or 1 if it's odd.
      // To this we add the starting index of the array so we find the corresponding index
      //in the middle array.
      transition.current = false;
      setTimeout(() => {
        setImageIndex(
          middleSetStart + (imageIndex - (maxIndex - linkCentralIndex))
        );
      }, 300);
    } else {
      transition.current = true;
    }
  }, [imageIndex, linkCentralIndex]);

  const carouselContainerStyle = {
    translate: `${-51.8 * imageIndex}%`,
    transition: transition.current ? "translate 0.3s linear" : "none",
  };

  useEffect(() => {
    console.log(imageIndex);
    console.log(carouselContainerStyle);
  }, [imageIndex]);

  useEffect(() => {
    console.log(sessions);
  }, [sessions]);

  function handleScrollCarouselLeft() {
    setImageIndex((index) => index + 2);
  }

  function handleScrollCarouselRight() {
    setImageIndex((index) => index - 2);
  }

  return (
    <div className="flex-h-center games-carousel">
      {sessions.length > 2 && (
        <ButtonIconNoBg
          style="button-games-carousel"
          Icon={FaChevronLeft}
          onClick={handleScrollCarouselRight}
        />
      )}
      <div className="flex-h-center games-images">
        {sessions.length > 1 && (
          <div
            className="games-carousel-container"
            style={carouselContainerStyle}
          >
            {games.map((game, index) => (
              <Link to="" key={index}>
                <img src={game} alt="Game" />
              </Link>
            ))}
          </div>
        )}

        {sessions.length === 1 && (
          <Link to="">
            <img src={sessions[0]} alt="Game" />
          </Link>
        )}
      </div>
      {sessions.length > 2 && (
        <ButtonIconNoBg
          style="button-games-carousel"
          Icon={FaChevronRight}
          onClick={handleScrollCarouselLeft}
        />
      )}
    </div>
  );
}
