let intro = require("./intro/intro.js");
let mainMenu = require("./intro/mainMenu.js");
let arrays = require("./arrays.js");
let heroCreator = require("./heroCreator.js");
let firstSlide = require("./slides/firstSlide.js");
let secondSlide = require("./slides/secondSlide.js");
let thirdSlide = require("./slides/thirdSlide.js");
let fourthSlide = require("./slides/fourthSlide.js");
let fifthSlide = require("./slides/fifthSlide.js");
let sixthSlide = require("./slides/sixthSlide.js");
let seventhSlide = require("./slides/seventhSlide.js");

document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

// hidden elements
$("#title, #startOptionsGame, #hello, .slider, #slider").hide();

//intro - inscription and title
setTimeout(intro.hideInscription, 5000);
setTimeout(intro.showTitle, 7500);
setTimeout(intro.hideTitle, 12000);

//main Menu
setTimeout(mainMenu.startOptionsGame, 14500);

//buttons info, licence, tutorial, new game
$(".btnInfo").on("click", () =>{ mainMenu.info(); });
$(".btnLicence").on("click", () =>{ mainMenu.licence(); });
$(".btnTutorial").on("click", () =>{mainMenu.tutorial(); });

//Creator of hero
//slider
$(".btnNewGame").on("click", () => {
heroCreator.hideElements();
heroCreator.showCreator();

  let slideCount = $('#slider ul li').length;
	let slideWidth = $('#slider ul li').width();
	let slideHeight = $('#slider ul li').height();
	let sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	$('#slider ul li:last-child').prependTo('#slider ul');

  function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    //seventh slide
    let addAllInfo = () => {
      let race = firstSlide.race;
      let occupation = secondSlide.occupation;

      let force = (firstSlide.mainFeaturesRace0 + secondSlide.mainFeaturesOccupation0 + thirdSlide.forcePoint);
      let strenght = (firstSlide.mainFeaturesRace1 + secondSlide.mainFeaturesOccupation1 + thirdSlide.strenghtPoint);
      let skill= (firstSlide.mainFeaturesRace2 + secondSlide.mainFeaturesOccupation2 + thirdSlide.skillPoint);
      let intellectuals = (firstSlide.mainFeaturesRace3 + secondSlide.mainFeaturesOccupation4 + thirdSlide.intellectualsPoint);
      let charisma = (firstSlide.mainFeaturesRace4 + secondSlide.mainFeaturesOccupation4 + thirdSlide.charismaPoint);

      $("#raceFromFile").text(race);
      $("#occupationFromFile").text(occupation);

      $("#forceFromFile").text(force);
      $("#strenghtFromFile").text(strenght);
      $("#skillFromFile").text(skill);
      $("#intelectualsFromFile").text(intellectuals);
      $("#charismaFromFile").text(charisma);

      $("#sexFromFile").text(fourthSlide.sex)
      $("#hairFromFile").text(fourthSlide.hair);
      $("#eyesFromFile").text(fourthSlide.eyes);
      $("#weightFromFile").text(fourthSlide.weight);
      $("#heightFromFile").text(fourthSlide.height);
      $("#equipmentFromFile").text(fifthSlide.equipArray);
      $("#skillsFromFile").text(sixthSlide.skillArray);
    }

    $('button.control_prev').click(function () {
      addAllInfo();
      moveLeft();
    });

    $('button.control_next').click(function () {
      addAllInfo();
      moveRight();
    });
});

//first slide - choose race
$("#chooseRace input").on("click", function(){ firstSlide.chooseRace(); });

//second slide - choose occupation
$("#chooseOccupation input").on("click", function(){ secondSlide.chooseOccupation(); });

//third slide choose features
//force point and tooltip for force points
$("#force").on("click", () => { thirdSlide.forcePoints(); });
  thirdSlide.forceTooltip();

//strenght
$("#strenght").on("click", () => { thirdSlide.strenghtPoints(); });
  thirdSlide.strenghtTooltip();

//skill
$("#skill").on("click", () => {thirdSlide.skillPoints(); });
  thirdSlide.skillTooltip();

//intellectuals
$("#intellectuals").on("click", () => {thirdSlide.intellectualsPoints(); });
  thirdSlide.intellectualsTooltip();

//charisma
$("#charisma").on("click", () => {thirdSlide.charismaPoints(); });
  thirdSlide.charismaTooltip();

//fourth slide choose feature part 2
$(".sex input").on("click", () =>{ fourthSlide.sexCheck(); });
$(".hairColor input").on("click", () =>{ fourthSlide.hairColorCheck(); });
$(".eyesColor input").on("click", () =>{ fourthSlide.eyesColorCheck(); });
$(".weight input").on("click", () =>{ fourthSlide.weightCheck(); });
$(".height input").on("click", () =>{ fourthSlide.heightCheck(); });

//fifth slide choose equipment
$("#chooseEquipment input").on("click", function(){ fifthSlide.equipment(); });

//sixth slide choose skill
$("#chooseSkill input").on("click", function(){ sixthSlide.skill(); });

});
