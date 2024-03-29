import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Welcome from "./pages/Welcome";

//Pour aller chercher les composants du site, on déclare nos "routes" :
//Exemple pour l'accueil :
//"Route", si jamais ton chemin c'est l'accueil du site ("path="/"), alors tu vas me chercher le composant suivant : "Home.js".

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
