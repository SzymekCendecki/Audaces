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
let firstP = require("./firstParagraph.js");
let secondP = require("./secondParagraph.js");
let thirdP = require("./thirdParagraph.js");

document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

// hidden elements
$("#title, #startOptionsGame, #hello, .slider, #slider, #gameIntro, #mainPanel, #dialogPanel").hide();

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

//wybór imienia
let choosenName = $("#choosenName");

//sprawdzenie wyboru imienia
$("#nameAccept").on("click", function(){

  let name = $("#giveName").val().replace(/\d/g,'');

  if(name == ""){
    $("#nameFromFile").text("podaj imię").css("color", "red");
  }else{
    choosenName.text(name);
    $("#nameFromFile").text(name);
      $("#nameFromFile").css("color", "black");
  }
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
$(".main input").on("click", () =>{
  fourthSlide.sexCheck();
  fourthSlide.hairColorCheck();
  fourthSlide.eyesColorCheck();
  fourthSlide.weightCheck();
  fourthSlide.heightCheck();
  fourthSlide.skinCheck();
 });


//fifth slide choose equipment
$("#chooseEquipment input").on("click", function(){ fifthSlide.equipment(); });

//sixth slide choose skill
$("#chooseSkill input").on("click", function(){ sixthSlide.skill(); });

//seventh slide
let addAllInfo = () => {
//sprawdzenie wybrania rasy, profesji, płci, włosów, koloru oczu, wagi, wzrostu i skóry
let rFF = $("#raceFromFile");
let oFF = $("#occupationFromFile");
let sexFF = $("#sexFromFile");
let hFF = $("#hairFromFile");
let eyesFF = $("#eyesFromFile");
let wFF = $("#weightFromFile");
let heightFF = $("#heightFromFile");
let skinFF = $("#skinFromFile");
let nameFF = $("#nameFromFile");

function checkRadio(inputRadio, zz, dd){
  if( inputRadio === undefined){
    zz.text("wybierz " + dd);
  }else{
    zz.text(inputRadio).css("color", "black");
  }
}

checkRadio(firstSlide.race, rFF, "rasę");
checkRadio(secondSlide.occupation, oFF, "profesję");
checkRadio(fourthSlide.sex, sexFF,  "płeć");
checkRadio(fourthSlide.hair, hFF, "włosy");
checkRadio(fourthSlide.eyes, eyesFF, "kolor oczu");
checkRadio(fourthSlide.weight, wFF, "wagę");
checkRadio(fourthSlide.height, heightFF, "wzrost");
checkRadio(fourthSlide.skin, skinFF, "skórę");

//sprawdzenie wylosowania punktów cech
let fFF = $("#forceFromFile");
let sFF = $("#strenghtFromFile");
let skFF = $("#skillFromFile");
let iFF = $("#intelectualsFromFile");
let cFF = $("#charismaFromFile");

function check2 (race, occupation, randomPoints, ll){
  if(!isNaN(race) && !isNaN(occupation) && !isNaN(randomPoints)){
      ll.text((race + occupation + randomPoints)).css("color", "black");
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
    zb.text(array).css("color", "black");
  }
}

checkArray(fifthSlide.equipArray, equipFF, "ekwipunek");
checkArray(sixthSlide.skillArray, skillsFF, "umiejętności");

//button game disabled/enabled
let textRace = rFF.text();
let textOccupation = oFF.text();
let textSex = sexFF.text();
let textName = nameFF.text();

let textHair = hFF.text();
let textEyes = eyesFF.text();
let textWeight = wFF.text();
let textHeight = heightFF.text();
let textSkin = skinFF.text();

let textForce = fFF.text();
let textStrenght = sFF.text();
let textSkill = skFF.text();
let textIntellectuals = iFF.text();
let textCharisma = cFF.text();

function checkButtonGame(a, b, c, d, e, f, g, h, i, j, k, l, m, n){
  if (a == "wybierz rasę" || b == "wybierz profesję" || c == "wybierz płeć" || d == "wybierz włosy" || e == "wybierz kolor oczu" || f == "wybierz wagę" || g == "wybierz wzrost" ||  h == "wybierz rasę, profesję i wylosuj punkty" || i == "wybierz rasę, profesję i wylosuj punkty" || j == "wybierz rasę, profesję i wylosuj punkty" || k == "wybierz rasę, profesję i wylosuj punkty" || l == "wybierz rasę, profesję i wylosuj punkty" || m == "wybierz skórę" || n =="podaj imię" || n == ""){
    $("#game").addClass("red").prop("disabled", true);
  }else{

    $("#game").prop("disabled", false).removeClass("red" ).addClass("green");
  }
}

checkButtonGame(textRace, textOccupation, textSex, textHair, textEyes, textWeight, textForce, textStrenght, textSkill, textIntellectuals, textCharisma, textSkin, textName);

$("#game").on("click",  () =>{
  //enabled button game
  // heroArray = [name, race, occupation, sex, hair, eyes, weight, height, skin]
  let heroArrayFeatures1 = [];

  //heroArrayFeatures2 = [force, strenght, skill, intellectuals, charisma]
  let heroArrayFeatures2 = [];

  // heroEquip = [equipment];
  let heroEquip = fifthSlide.equipArray;

  // heroEquip = [skills];
  let heroSkills = sixthSlide.skillArray;

  //tablica ze złotem -stan początkowy
  let gold = [0];

heroArrayFeatures1.push(textName);
heroArrayFeatures1.push(textRace);
heroArrayFeatures1.push(textOccupation);
heroArrayFeatures1.push(textSex);
heroArrayFeatures1.push(textHair);
heroArrayFeatures1.push(textEyes);
heroArrayFeatures1.push(textWeight);
heroArrayFeatures1.push(textHeight);
heroArrayFeatures1.push(textSkin);

heroArrayFeatures2.push(parseInt(textForce));
heroArrayFeatures2.push(parseInt(textStrenght));
heroArrayFeatures2.push(parseInt(textSkill));
heroArrayFeatures2.push(parseInt(textIntellectuals));
heroArrayFeatures2.push(parseInt(textCharisma));

$("#slider").fadeOut(650)
$("#gameIntro").delay(650).fadeIn(650);

$("#newGame").on("click", function(){
  $(this).parent().fadeOut(650);
  $("#mainPanel").delay(2000).fadeIn(650);
});

//przyciski głównego panelu gry
//zbudowanie zawartości okna dialogowego pod przyciskiem cech

function createFeaturesDialog(){
let dialog =  document.querySelector("#dialogPanelDescription");
let dialog2 =  document.querySelector("#dialogPanelDescription2");
dialog.innerHTML = heroCreator.features1;
dialog2.innerHTML = heroCreator.features2;

// heroArray = [name, race, occupation, sex, hair, eyes, weight, height, skin]
$("#descriptionName").text(heroArrayFeatures1[0]);
$("#descriptionRace").text(heroArrayFeatures1[1]);
$("#descriptionOccupation").text(heroArrayFeatures1[2]);
$("#descriptionSex").text(heroArrayFeatures1[3]);
$("#descriptionHair").text(heroArrayFeatures1[4]);
$("#descriptionEyes").text(heroArrayFeatures1[5]);
$("#descriptionWeight").text(heroArrayFeatures1[6]);
$("#descriptionHeight").text(heroArrayFeatures1[7]);
$("#descriptionSkin").text(heroArrayFeatures1[8]);

//heroArrayFeatures2 = [force, strenght, skill, intellectuals, charisma]
$("#descriptionForce").text(heroArrayFeatures2[0]);
$("#descriptionStrenght").text(heroArrayFeatures2[1]);
$("#descriptionSkill").text(heroArrayFeatures2[2]);
$("#descriptionIntellectuals").text(heroArrayFeatures2[3]);
$("#descriptionCharisma").text(heroArrayFeatures2[4]);
}

//przycisk cech
$("#features2").on("click", function(){
  $("#dialogPanel").fadeIn(500);
  createFeaturesDialog();
});

//przycisk ekwipunku
  $("#equip").on("click", function(){
  $("#dialogPanel").fadeIn(500);
  $("#dialogPanelDescription").text(heroEquip);
  $("#dialogPanelDescription2").text("złoto: " + gold[0]);
});

//przycisk umiejętności
$("#skills").on("click", function(){
  $("#dialogPanel").fadeIn(500);
  $("#dialogPanelDescription").text(heroSkills);
  $("#dialogPanelDescription2").text("");
});

//przycisk zadań
$("#task").on("click", function(){
  $("#dialogPanel").fadeIn(500);
  $("#dialogPanelDescription").text("Oddać paczkę mnichowi w przygranicznej wiosce.");
  $("#dialogPanelDescription2").text("");
});

//funkcja zamykająca dialogPanel
$("#close").on("click", function(){
    $("#dialogPanel").fadeOut(500);
});



//pierwszy paragraf
firstP.firstP();
$("#wardrobe").addClass("green");
$("#chest").addClass("green");
$("#leave").addClass("red");

//przycisk rozglądania się - pierwszy tekst
$("#lookingAround").on("click", function(){
  main.append(firstP.roomText).addClass("classIndent");
});

//przycisk badania szafy i zabierania płaszcza - pierwszy tekst
$("#wardrobe").on("click", function(){
  main.append(firstP.wardrobeText);

let btnCoat = document.createElement("button");
btnCoat.id = "coat";
btnCoat.innerText = "weź płaszcz";

let roomList = document.querySelector("#roomList");
roomList.appendChild(btnCoat);
$(this).remove();

//przycik zabrania płaszcza - pierwszy tekst
$("#coat").on("click", function (){
  main.append(" Płaszcz wzięty.");
  heroEquip.push("płaszcz");
  $(this).remove();
});
});

//przycisk sprawdzenia skrzyni i zabierania złota
$("#chest").on("click", function(){
  main.append(firstP.chestText);

  let btnGold = document.createElement("button");
    btnGold.id = "gold";
    btnGold.innerText = "weź złoto";

    let roomList = document.querySelector("#roomList");
    roomList.appendChild(btnGold);
    $(this).remove();

//przycik zabrania złoto
  $("#gold").on("click", function (){
    let goldChest = gold[0] + 12;
    gold.splice(0, 1, goldChest);
    main.append(" Złoto zabrane.");
    $(this).remove();
  });
});

//przycisk zabierania paczki
$("#takePackage").on("click", function (){
  main.append(" Paczka została zabrana.");
  heroEquip.push("paczka");
  $(this).remove();
  $("#leave").removeClass("red").addClass("green").prop("disabled", false);
});

//przycisk opuszczenia pomieszczenia
$("#leave").on("click", function(){
document.querySelector("#main").removeChild(document.querySelector("#text"));
document.querySelector("#main").removeChild(document.querySelector("#roomList"));





//drugi paragraf
secondP.secondP();

//przycisk rozglądania się - ulica
$("#lookingAround").on("click", function(){
  main.append(secondP.streetText);
});
$("#marketBtn").addClass("green");


//przycisk targ - przejście do paragrafu trzeciego - targowiska
$("#marketBtn").on("click", function(){
  document.querySelector("#main").removeChild(document.querySelector("#text"));
  document.querySelector("#main").removeChild(document.querySelector("#street"));




  //paragraf trzeci
  thirdP.thirdP();
    $("#caravan").addClass("green");

    //przycisk rozglądania się - targ
   $("#lookingAround").on("click", function(){
     main.append(thirdP.marketText).addClass("classIndent");
   });


});




});

});//zamknięcie zdarzenia game linia 234
}

});
