import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const pokemons = [
    {
      name: "อีเวลทอล",
      type: "fly",
      image:
        "https://th.portal-pokemon.com/play/resources/pokedex/img/pm/89db5688db5488640415bae0c8cda83dc21fc69f.png",
    },
    {
      name: "ซีการ์ด",
      type: "dragon and earth",
      image:
        "https://th.portal-pokemon.com/play/resources/pokedex/img/pm/a9467467bc4dfb1bd65a3751083feece1b2a878c.png",
    },
    {
      name: "พิคาชู",
      type: "electric",
      image:
        "https://th.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png",
    },
    {
      name: "นิโดรัน",
      type: "normal",
      image:
        "https://th.portal-pokemon.com/play/resources/pokedex/img/pm/14179c8ab9c2003fc5b27a29e91e4cd195283d52.png",
    },
    {
      name: "ควิคอน",
      type: "fire",
      image:
        "https://th.portal-pokemon.com/play/resources/pokedex/img/pm/cc96e6a4eee980724ebd725bb8785334d3290074.png",
    },
    {
      name: "วันริกิ",
      type: "grass and poison",
      image:
        "https://th.portal-pokemon.com/play/resources/pokedex/img/pm/0074c7d90ce7d2a6926d28fe777d2bcb0b4ccb0b.png",
    },
  ];

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    setRandomPokemon(pokemons[randomIndex]);
    if (
      selectedPokemon &&
      selectedPokemon.name === pokemons[randomIndex].name
    ) {
      const successAudio = new Audio("../success.mp3");
      successAudio.play();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      const audio = new Audio("../fail.mp3");
      audio.play();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  const handleSelect = (e) => {
    const selectedName = e.target.alt;
    const selectedPokemon = pokemons.find(
      (pokemon) => pokemon.name === selectedName
    );
    setSelectedPokemon(selectedPokemon);
  };

  return (
    <>
      <div className="App" style={{ display: "flex", flexDirection: "column" }}>
        <h1>Pokemons</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selectedPokemon && (
            <div>
              <h2>{selectedPokemon.name}</h2>
              <img
                src={selectedPokemon.image}
                alt={selectedPokemon.name}
                style={{ height: "200px" }}
              />
            </div>
          )}

          {/* if selectedPokemon != null , will display it  */}
          {selectedPokemon && (
            <div>
              <h2>Click to random</h2>
              <img
                onClick={handleRandom}
                style={{ height: "100px" , marginLeft: "50px",  marginRight: "50px" }}
                src="https://assets-v2.lottiefiles.com/a/d12e3930-1177-11ee-b96d-0be88c37ea6a/NQyTAsXQmZ.gif"
              />
            </div>
          )}

          {/* <div style={{}}>
            <img
              onClick={handleRandom}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrd38H00j9Ue2nweAf4OKK3mkB4ZCnDy_DMQ&s"
              alt=""
              style={{ height: "100px" }}
            />


          {/* <div style={{}}>
            <img
              onClick={handleRandom}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrd38H00j9Ue2nweAf4OKK3mkB4ZCnDy_DMQ&s"
              alt=""
              style={{ height: "100px" }}
            />
          </div> */}

          {randomPokemon && (
            <div className="">
              <h2>{randomPokemon.name}</h2>
              <img
                src={randomPokemon.image}
                alt={randomPokemon.name}
                style={{ height: "200px" }}
              />
            </div>
          )}
        </div>

        <div
          className=""
          style={{
            display: "flex",
          }}
        >
          {pokemons.map((pokemon, index) => (
            <div key={index}>
              <h2>{pokemon.name}</h2>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{ height: "200px" }}
                onClick={handleSelect}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
