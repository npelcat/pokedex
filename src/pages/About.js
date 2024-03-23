import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <div className="about">
        <p className="about-app">
          L'idée de créer une application Pokémon est née d'un exercice, durant
          ma formation à Ada Tech School.
          <br />
          <br />
          Initialement conçue en Python pour trier les données de Pokémon à
          partir d'un fichier JSON, l'exercice m'a donné envie d'aller plus loin
          et de créer cette interface graphique.
          <br />
          J'ai donc décidé de ne pas laisser ces 151 petits êtres qui ont marqué
          mon enfance et mes récréations prendre la poussière au fond d'un
          dossier.
          <br />
          <br />
          Une conversion en React et quelques lignes de CSS plus tard, voici le
          résultat.
          <br />
          <br />
          Vous souvenez-vous de tous leurs noms ? Quel était votre préféré ?
          <br />
          <br />
          Je vous souhaite une bonne régression...
        </p>
        <img src="./bulbi.png" alt="photo Bulbizarre" />
        <br />
        <p className="about-me">
          Je suis Nadège, passionnée par le développement web, avec un amour
          particulier pour le Frontend et le langage JavaScript.
          <br />
          <br />
          Vous pouvez en savoir un peu plus{" "}
          <a href="https://portfolio-nad-cat.vercel.app/" target="blank">
            ici
          </a>
          , ou retrouver tous mes projets GitHub de ce{" "}
          <a href="https://github.com/npelcat" target="blank">
            côté
          </a>{" "}
          !
          <br />
          <br />A bientôt !
        </p>
      </div>
    </div>
  );
};

export default About;
