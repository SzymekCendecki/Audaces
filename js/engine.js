document.addEventListener("DOMContentLoaded", () => {
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

var url = "http://localhost:3000";

//info button
$(".btnInfo").on("click", function(){
  $.ajax({
    url: url + "/menu",
    type: "json",
    method: "GET"
  }).done(function(response){
    $("#descriptionMenu").text(response[0].btnInfo).addClass("descriptionMenu");
  }).fail(function(error){
    console.log("Something going wrong with Your code");
   });
});

//licence button
$(".btnLicence").on("click", function(){
  $.ajax({
    url: url + "/menu",
    type: "json",
    method: "GET"
  }).done(function(response){
    $("#descriptionMenu").text(response[0].btnLicence).addClass("descriptionMenu");
  }).fail(function(error){
    console.log("Something going wrong with Your code");
   });
});

//tutorial button
$(".btnTutorial").on("click", function(){
  $.ajax({
    url: url + "/menu",
    type: "json",
    method: "GET"
  }).done(function(response){
    $("#descriptionMenu").text(response[0].btnTutorial).addClass("descriptionMenu");
  }).fail(function(error){
    console.log("Something going wrong with Your code");
   });
});

});
