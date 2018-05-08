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

//seventh slide
let addAllInfo = () => {

//sprawdzenie wybrania rasy, profesji, płci, włosów, koloru oczu, waki i zwrostu
let rFF = $("#raceFromFile");
let oFF = $("#occupationFromFile");
let sexFF = $("#sexFromFile");
let hFF = $("#hairFromFile");
let eyesFF = $("#eyesFromFile");
let wFF = $("#weightFromFile");
let heightFF = $("#heightFromFile");

function checkRadio(inputRadio, zz, dd){
  if( inputRadio === undefined){
    zz.text("wybierz " + dd);
  }else{
    zz.text(inputRadio);
  }
}

checkRadio(firstSlide.race, rFF, "rasę");
checkRadio(secondSlide.occupation, oFF, "profesję");
checkRadio(fourthSlide.sex, sexFF,  "płeć");
checkRadio(fourthSlide.hair, hFF, "włosy");
checkRadio(fourthSlide.eyes, eyesFF, "kolor oczu");
checkRadio(fourthSlide.weight, wFF, "wagę");
checkRadio(fourthSlide.height, heightFF, "wzrost");

//sprawdzenie wylosowania punktów cech
let fFF = $("#forceFromFile");
let sFF = $("#strenghtFromFile");
let skFF = $("#skillFromFile");
let iFF = $("#intelectualsFromFile");
let cFF = $("#charismaFromFile");

function check2 (race, occupation, randomPoints, ll){
  if(!isNaN(race) && !isNaN(occupation) && !isNaN(randomPoints)){
      ll.text((race + occupation + randomPoints));
  }else{
      ll.text("wybierz rasę, profesję i wylosuj punkty");
  }
}

check2(firstSlide.mainFeaturesRace0, secondSlide.mainFeaturesOccupation0, thirdSlide.forcePoint, fFF);
check2(firstSlide.mainFeaturesRace1, secondSlide.mainFeaturesOccupation1, thirdSlide.strenghtPoint, sFF);
check2(firstSlide.mainFeaturesRace2, secondSlide.mainFeaturesOccupation2, thirdSlide.skillPoint, skFF);
check2(firstSlide.mainFeaturesRace3, secondSlide.mainFeaturesOccupation3, thirdSlide.intellectualsPoint, iFF);
check2(firstSlide.mainFeaturesRace4, secondSlide.mainFeaturesOccupation4, thirdSlide.charismaPoint, cFF);

//sprawdzenie wybrania ekwipunku oraz umiejętności
let equipFF = $("#equipmentFromFile");
let skillsFF = $("#skillsFromFile");

function checkArray(array, zb, dh){
  if(array === undefined){
    zb.text("wybierz " + dh);
  }else{
    zb.text(array);
  }
}

checkArray(fifthSlide.equipArray, equipFF, "ekwipunek");
checkArray(sixthSlide.skillArray, skillsFF, "umiejętności");

//button game disabled/enabled
let textRace = rFF.text();
let textOccupation = oFF.text();
let textSex = sexFF.text();

let textHair = hFF.text();
let textEyes = eyesFF.text();
let textWeight = wFF.text();
let textHeight = heightFF.text();

let textForce = fFF.text();
let textStrenght = sFF.text();
let textSkill = skFF.text();
let textIntellectuals = iFF.text();
let textCharisma = cFF.text();

let textEquip = equipFF.text();
let textSkills = skillsFF.text();

function checkButtonGame(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o){
  if (a == "wybierz rasę" || b == "wybierz profesję" || c == "wybierz płeć" || d == "wybierz włosy" || e == "wybierz kolor oczu" || f == "wybierz wagę" || g == "wybierz wzrost" || h == "wybierz rasę, profesję i wylosuj punkty" || i == "wybierz rasę, profesję i wylosuj punkty" || j == "wybierz rasę, profesję i wylosuj punkty" || k == "wybierz rasę, profesję i wylosuj punkty" || l == "wybierz rasę, profesję i wylosuj punkty" || m == "wybierz ekwipunek" || n == "wybierz umiejętności" || m == "" || n == ""){
    $("#game").prop("disabled", true);
  }else{
    $("#game").prop("disabled", false);
  }
}

checkButtonGame(textRace, textOccupation, textSex, textHair, textEyes, textWeight, textForce, textStrenght, textSkill, textIntellectuals, textCharisma, textEquip, textSkills);
}

});
