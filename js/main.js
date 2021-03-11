/*
  AFFICHAGE DU DAMIER
*/

const BLANC = "#FFFFFF";
const NOIR  = "#000000";

// consuction comme une matrice
// une div qui contient les cases et l'autre qui les empile verticalement

function creerDamier(cote){

  var blanc = false;

  for(i = 0; i < cote; ++i){

    if (cote % 2 == 0) blanc = !blanc; // on inverse sur les damiers pairs pour éviter que les couleurs n'alternent pas sur les lignes
    $("#damier").append("<div class=\"ligne\" id=" + i + " >");

    for (j = 0; j < cote; ++j){
      if (blanc) $("#" + i).append("<div class=\"blanc\" id=" + i.toString() + j.toString() + "></div>");
      else $("#" + i).append("<div class=\"noir\" id=" + i.toString() + j.toString() + "></div>");
      blanc = !blanc;
    }

    $("#damier").append("</div>");

    $(".blanc").css("background-color", BLANC);
    $(".noir").css("background-color", NOIR);

    $("#damier, .ligne").css("display", "flex");
    $("#damier").css("flex-direction", "column")
    $(".ligne").css("flex-direction", "row")


    $(".noir, .blanc").css("padding", "50px")

    $(".ligne").css("display", "flex");
  }
}

function changerEtat(){

}

creerDamier(5);
