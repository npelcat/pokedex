import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../pokedex.json";

const Pokemons = () => {
  //STATE
  //La seule façon de pouvoir modifier la data, c'est de passer par setData.
  const [rangeValue, setRangeValue] = useState(36);
  const radios = [
    "Grass",
    "Poison",
    "Fire",
    "Ice",
    "Flying",
    "Psychic",
    "Water",
    "Ground",
    "Rock",
    "Electric",
    "Bug",
    "Normal",
    "Fighting",
    "Ghost",
    "Dragon",
  ];
  const [selectedRadio, setSelectedRadio] = useState("");

  //RENDER
  /*Le slice permet de découper le tableau data, ici on découpe de 0 à rangeValue (valeur de l'input range) */
  /* Le .map permet de parcourir le tableau data et de créer un composant Card pour chaque élément du tableau. */
  // Le "onChange" dans l'input permet de changer la valeur de l'input range (grâce au setter crée plus haut) et donc de changer le nombre de pays affichés.
  return (
    <div className="pokemons">
      <ul className="filters-container">
        <div className="range">
          <div>{rangeValue} </div>
          <span>0</span>
          <input
            type="range"
            min="1"
            max="151"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />{" "}
          <span>151</span>
        </div>
        <div className="radio-group">
          {radios.map((type) => {
            return (
              <li>
                <input
                  type="radio"
                  id={type}
                  name="pokemonRadio"
                  checked={type === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.id)}
                />
                <label htmlFor={type}>{type}</label>
              </li>
            );
          })}
        </div>
      </ul>
      {/*Si selectedRadio est vrai, on affiche le bouton "Annuler la recherche".
      Au clique, setSelectedRadio reçoit des "", ce qui annule la recherche car il passe à false.*/}
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data.pokemon
          .filter(
            (pokemon) =>
              selectedRadio === "" ||
              pokemon.type.some((pokemonType) => pokemonType === selectedRadio)
          )
          .slice(0, rangeValue)
          .map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
          ))}
      </ul>
    </div>
  );
};

export default Pokemons;
