document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

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

// hidden elements
$("#title, #startOptionsGame, #hello, #chooseBtns").hide();

});