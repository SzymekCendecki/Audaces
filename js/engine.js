document.addEventListener("DOMContentLoaded", function () {
console.log("DOM fully loaded and parsed!");

// hidden elements
$("#title, #startOptionsGame, #hello").hide();

//intro
//inscription
let hideInscription = () => {
  $("#inscriptions").fadeOut(2000);
}
setTimeout(hideInscription, 5000);

//title
let showTitle = () => {
  $("#title").fadeIn(2000);
}
setTimeout(showTitle, 7500);

let hideTitle = () => {
  $("#title").fadeOut(2000);
}
setTimeout(hideTitle, 12000);

//Start of game - option choice
let startOptionsGame = () => {
  $("#startOptionsGame, #hello").fadeIn(2000);
  $("body").css("backgroundColor", "beige");
}
setTimeout(startOptionsGame, 14500);


});
