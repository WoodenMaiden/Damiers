/*
  AFFICHAGE DU DAMIER
*/

const BLANC = "#FFFFFF";
const WHITE = "#000000";

// consuction comme une matrice
// une div qui contient les cases et l'autre qui les empile verticalement

function creerDamier(cote){

  var blanc = false;

  for(i = 0; i < cote; ++i){

    if (cote % 2 == 0) blanc = !blanc; // on inverse sur les damiers pairs pour éviter que les couleurs n'alternent passur les lignes
    $("body").append("<div class=\"ligne\">");

    for (j = 0; j < cote; ++j){
      if (blanc) $("body").append("<div class=\"blanc\"> </div>");
      else $("body").append("<div class=\"noir\"> </div>");
      blanc = !blanc;
    }

    $("body").append("</div>");
  }
}


creerDamier(5);
