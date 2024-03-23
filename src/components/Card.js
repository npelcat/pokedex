import React from "react";

const Card = ({ pokemon }) => {
  return (
    <li className="card">
      <img src={pokemon.img} alt={"photo" + pokemon.name} />
      <div className="title">
        <h2>
          {pokemon.num}
          {". "} <br />
          {pokemon.name}
        </h2>
      </div>
      <div className="infos">
        <p>
          <div className="undertitle">Type:</div>
          {pokemon.type.map((type) => {
            return <div>{type}</div>;
          })}
        </p>
        <p>
          <div className="undertitle">Poids:</div> <br />
          {pokemon.weight}
        </p>
        <p>
          <div className="undertitle">Taille:</div>
          <br />
          {pokemon.height}
        </p>
        <p>
          <div className="undertitle">Faiblesses:</div>
          {pokemon.weaknesses.map((weaknesses) => (
            <div>{weaknesses}</div>
          ))}
        </p>
      </div>
    </li>
  );
};

export default Card;
