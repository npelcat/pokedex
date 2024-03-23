import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" - pas d'auto-complétion, faire le chemin comme si on était dans le dossier "public"*/}
      <img src="./Pokeball.png" alt="logo pokeball" />
      <h3>Poké-World</h3>
    </div>
  );
};

export default Logo;
