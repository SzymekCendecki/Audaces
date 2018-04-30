document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//random Hero button and create Hero button
$("#randomHero").on("mouseenter", () => {
  $("#chooseBtnsDescription").text("Losowanie postaci oraz automatyczne rozpoczęcie gry.").addClass("randomHeroDescription");
});

$("#randomHero").on("mouseleave", () => {
  $("#chooseBtnsDescription").text("").removeClass("randomHeroDescription");
});

});