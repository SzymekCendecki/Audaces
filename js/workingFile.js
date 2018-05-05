let intro = require("./intro/intro.js");
let mainMenu = require("./intro/mainMenu.js");
let arrays = require("./arrays.js");
let heroCreator = require("./heroCreator.js");
let firstSlide = require("./slides/firstSlide.js");
let secondSlide = require("./slides/secondSlide.js");
let thirdSlide = require("./slides/thirdSlide.js");
let fourthSlide = require("./slides/fourthSlide.js");

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

    $('button.control_prev').click(function () { moveLeft(); });
    $('button.control_next').click(function () { moveRight(); });
});

//first slide - choose race
$("#chooseRace input").on("click", function(){
  firstSlide.chooseRace();
});

//second slide - choose occupation
$("#chooseOccupation input").on("click", function(){
  secondSlide.chooseOccupation();
});

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
$("#chooseEquipment input").on("click", function(){
	let equipmentArray = [];
  $.each($("input[name='weapon']:checked"), function(){
                equipmentArray.push($(this).val());
            });

console.log("sprzęt: " + equipmentArray.join(", "));
});

let bonusesArray = [-5, -3, -2, 4, 5, 10];
//współczynniki z profesji
//wojownik siła +5, wytrzymałość +5
//złoczyńca zręczność +10
//mag charyzma +5, inteligencja +5

//współczynniki z rasy
//człowiek zero dla wszystkich cech
//elf siła -5, wytrzymałość -5, inteligencja +5, charyzma +5
//krasnolud siła +4, wytrzymałość +4, zręczność -2,  charyzma -3
//ork siła +5, wytrzymałość +5, inteligencja -5, charyzma -5


});
