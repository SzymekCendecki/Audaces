document.addEventListener("DOMContentLoaded", function () {
console.log("DOM fully loaded and parsed!");

//created intro
$('body').html($('<div>', {class: 'mainContainer'}));

let mainContainerDiv = $(".mainContainer");
let unfaithfulDogsDiv = $("<div class='unfaithfulDogs'>");
mainContainerDiv.append(unfaithfulDogsDiv);
$(".unfaithfulDogs").text("NIEWIERNE PSY");
});
