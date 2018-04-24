document.addEventListener("DOMContentLoaded", function () {
console.log("DOM fully loaded and parsed!");

//main container added to body
$('body').html($('<div>', {class: 'mainContainer'}));

//prefabrication of main elements
let mainContainerDiv = $(".mainContainer");
let newDiv = $("<div>");

//INTRO
//inscription NIEWIERNE Psy added to main container
mainContainerDiv.append(newDiv);
newDiv.addClass("unfaithfulDogs").text("NIEWIERNE PSY");

// animated removing inscription NIEWIRNE PSY
hideInscription = () => {
  $(".unfaithfulDogs").animate({opacity: "0"}, 3000);
}
setTimeout(hideInscription, 4000);

});
