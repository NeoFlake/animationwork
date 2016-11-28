// Permet d'exécuter le script uniquement quand la page est chargé
document.addEventListener("DOMContentLoaded", function() {

  const squareElt = document.querySelector(".square");

  squareElt.addEventListener("click", function (){

    if(squareElt.classList.contains("selected")){

      squareElt.classList.remove("selected");

    }

    else {

      squareElt.classList.add("selected");

    }

  });

});
