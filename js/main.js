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

    if (cote % 2 == 0) !blanc; // on inverse sur les damiers pairs pour éviter ques les couleurs nalternent passur les lignes

    var insertTxt = "";

    for (j = 0; i < cote; ++j){
      if (blanc) insertTxt += "<div class=\"blanc\"> </div>";
      else insertTxt += "<div class=\"noir\"> </div>";
    }

  }
}



