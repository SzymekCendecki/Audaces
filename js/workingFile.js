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

let textEquip = equipFF.text();
let textSkills = skillsFF.text();

function checkButtonGame(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p){
  if (a == "wybierz rasę" || b == "wybierz profesję" || c == "wybierz płeć" || d == "wybierz włosy" || e == "wybierz kolor oczu" || f == "wybierz wagę" || g == "wybierz wzrost" ||  h == "wybierz rasę, profesję i wylosuj punkty" || i == "wybierz rasę, profesję i wylosuj punkty" || j == "wybierz rasę, profesję i wylosuj punkty" || k == "wybierz rasę, profesję i wylosuj punkty" || l == "wybierz rasę, profesję i wylosuj punkty" || m == "wybierz ekwipunek" || n == "wybierz umiejętności" || m == "" || n == "" || o == "wybierz skórę" || p =="podaj imię" || p == ""){
    $("#game").prop("disabled", true);
  }else{
    $("#game").prop("disabled", false);
  }
}

checkButtonGame(textRace, textOccupation, textSex, textHair, textEyes, textWeight, textForce, textStrenght, textSkill, textIntellectuals, textCharisma, textEquip, textSkills, textSkin, textName);

$("#game").on("click",  () =>{
  //enabled button game
  // heroArray = [name, race, occupation, sex, hair, eyes, weight, height, skin]
  let heroArrayFeatures1 = [];

  //heroArrayFeatures2 = [force, strenght, skill, intellectuals, charisma]
  let heroArrayFeatures2 = [];

  // heroEquip = [equipment];
  let heroEquip = [];

  // heroEquip = [skills];
  let heroSkills = [];

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

heroEquip.push(fifthSlide.equipArray);
heroSkills.push(sixthSlide.skillArray);

$("#slider").fadeOut(650)
$("#gameIntro").delay(650).fadeIn(650);

$("#newGame").on("click", function(){
  $(this).parent().fadeOut(650);
  $("#mainPanel").delay(2000).fadeIn(650);
});

//przyciski głównego panelu gry
//zbudowanie zawartości okna dialogowego pod przyciskiem cech

function createFeaturesDialog(){
let allFeatures = "<div id='name'><p id='descriptionTitleName'>Imię</p><p id='descriptionName'></p></div><div id='race'><p id='descriptionTitleRace'>Rasa</p><p id='descriptionRace'></p></div><div id='occupation'><p id='descriptionTitleOccupation'>Profesja</p><p id='descriptionOccupation'></p></div><div id='sex'><p id='descriptionTitleSex'>Płeć</p><p id='descriptionSex'></p></div><div id='hair'><p id='descriptionTitleHair'>Kolor włosów</p><p id='descriptionHair'></p></div><div id='eyes'><p id='descriptionTitleEyes'>Kolor oczu</p><p id='descriptionEyes'></p></div><div id='weight'><p id='descriptionTitleWeight'>Waga</p><p id='descriptionWeight'></p></div><div id='height'><p id='descriptionTitleHeight'>Wzrost</p><p id='descriptionHeight'></p><p id='descriptionTitleSkin'>Kolor skóry</p><p id='descriptionSkin'></p></div></div><div id='force'><p id='descriptionTitleForce'>Siła</p><p id='descriptionForce'></p></div><div id='strenght'><p id='descriptionTitleStrenght'>Wytrzymałość</p><p id='descriptionStrenght'></p></div><div id='skill'><p id='descriptionTitleSkill'>Zręczność</p><p id='descriptionSkill'></p></div><div id='intellectuals'><p id='descriptionTitleIntellectuals'>Inteligencja</p><p id='descriptionIntellectuals'></p></div><div id='charisma'><p id='descriptionTitleCharisma'>Charyzma</p><p id='descriptionCharisma'></p></div>";

let dialog =  document.querySelector("#dialogPanelDescription");
dialog.innerHTML = allFeatures;

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
});

//przycisk umiejętności
$("#skills").on("click", function(){
  $("#dialogPanel").fadeIn(500);
  $("#dialogPanelDescription").text(heroSkills);
});

//przycisk złota
$("#goldArray").on("click", function(){
  $("#dialogPanel").fadeIn(500);
  $("#dialogPanelDescription").text(gold[0]);
});

//przycisk zadań
function tasks(){
  let tasks = "<ul><li>Oddać paczkę mnichowi w przygranicznej wiosce.</li></ul>";

  let dialog = document.querySelector("#dialogPanelDescription");
  dialog.innerHTML = tasks;
}

$("#task").on("click", function(){
  $("#dialogPanel").fadeIn(500);
  tasks();
});

//funkcja zamykająca dialogPanel
$("#close").on("click", function(){
    $("#dialogPanel").fadeOut(500);
});

//pierwszy tekst w grze - początek
function firstText(){
  let text = "<p id='main'>Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?<ul id='roomList'><button id='lookingAround'>rozejrzyj się</button><button id='wardrobe'>zbadaj szafę</button><button id='chest'>zbadaj szkrzynię</button><button id='takePackage'>weź paczkę</button><button id='leave'>wyjdź z pomieszczenia</button></ul></p>";

  let gameDescription = document.querySelector("#gameDescription");
  gameDescription.innerHTML = text;

  $("#leave").prop("disabled", true);
}
firstText();

//przycisk rozglądania się - pierwszy tekst
$("#lookingAround").on("click", function(){
  main.append(" Pokój jak pokój. Stół, łóżko, szafa, skrzynia.");
});

//przycisk badania szafy i zabierania płaszcza - pierwszy tekst
$("#wardrobe").on("click", function(){
  main.append("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę, w której wisi płaszcz.");

let btnCoat = document.createElement("button");
btnCoat.id = "coat";
btnCoat.innerText = "weź płaszcz";

let roomList = document.querySelector("#roomList");
roomList.appendChild(btnCoat);
$(this).remove();

//przycik zabrania płaszcza- pierwszy tekst
$("#coat").on("click", function (){
  main.append(" Płaszcz wzięty.");
  heroEquip.push("płaszcz");
  $(this).remove();
});
});

//przycisk sprawdzenia skrzyni i zabierania złota
$("#chest").on("click", function(){
  main.append(" Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. W śodku znajduje się 12 sztuk złotych monet.");

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
  $("#leave").prop("disabled", false);
});

//przycisk opuszczenia pomieszczenia
$("#leave").on("click", function(){
  let parent = document.querySelector("#gameDescription");
  let firstChild = document.querySelector("#main");
  let secondChild = document.querySelector("#roomList");
  parent.removeChild(firstChild);
  parent.removeChild(secondChild);

function secondText(){
  let text = "<p id='main'>Stoisz przed domem. Aby udać się do wyznaczonego celu, najlepiej zabrać się z jakąś karawaną. Idziesz w kierunku bramy miasta. Przy bramie znajduje się targ. To dobry czas i miejsce, aby uzupełnić zapasy na dalszą podróż. <ul id='street'><button id='lookingAround'>rozejrzyj się</button><button id='market'>targ</button></ul></p>";

let gameDescription = document.querySelector("#gameDescription");
gameDescription.innerHTML = text;
}
secondText();

//przycisk rozglądania się - ulica
$("#lookingAround").on("click", function(){
  main.append(" Typowa ulica dzielnicy Najemników, miasta Erharuf. Częściowo brukowana. Pobliskie budynki są niskie i drewniane, maksymalnie jednopiętrowe. Nic specjalnego.");
});

$("#market").on("click", function(){
  let parent = document.querySelector("#gameDescription");
  let firstChild = document.querySelector("#main");
  let secondChild = document.querySelector("#street");
  parent.removeChild(firstChild);
  parent.removeChild(secondChild);

  function marketText(){
     let text = "<p id='main'>Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy.<ul id='buyItems'><button id='tent'>namiot - 5szt. zł.</button><button id='bag'>torba 1szt. zł</button><button id='blanket'>derka - 1szt. zł</button><button id='lamp'>lampa - 1szt. zł</button><button id='rope'>lina - 1szt. zł</button><button id='food'>racja żyw. - 1szt. zł</button><button id='dagger'>sztylet - 8szt. zł</button><button id='woodenStick'>pałka drewniana - 4szt. zł</button><button id='buckler'>puklerz - 12szt. zł</button></ul><ul id='market'><button id='lookingAround'>rozejrzyj się</button><button id='caravan'>karawana</button></ul></p>";

     let gameDescription = document.querySelector("#gameDescription");
     gameDescription.innerHTML = text;
   }
   marketText();

//zakupu namiotu
   $("#tent").on("click", function(){
     if(gold[0] > 5){
       heroEquip.push("namiot");
       let newGold = (gold[0] - 5);
       gold.splice(0, 1, newGold);
     }else{
         function goldNone(){
           let infoGold = "<p>Nie masz tyle złota</p>";
           let dialog = document.querySelector("#dialogPanelDescription");
           dialog.innerHTML = infoGold;
         }
         $("#dialogPanel").fadeIn(500);
         goldNone();
     }
   });

   //zakupu torby
      $("#bag").on("click", function(){
        if(gold[0] > 1){
          heroEquip.push("torba");
          let newGold = (gold[0] - 1);
          gold.splice(0, 1, newGold);
        }else{
            function goldNone(){
              let infoGold = "<p>Nie masz tyle złota</p>";
              let dialog = document.querySelector("#dialogPanelDescription");
              dialog.innerHTML = infoGold;
            }
            $("#dialogPanel").fadeIn(500);
            goldNone();
        }
      });

      //zakupu derki
         $("#blanket").on("click", function(){
           if(gold[0] > 1){
             heroEquip.push("derka");
             let newGold = (gold[0] - 1);
             gold.splice(0, 1, newGold);
           }else{
               function goldNone(){
                 let infoGold = "<p>Nie masz tyle złota</p>";
                 let dialog = document.querySelector("#dialogPanelDescription");
                 dialog.innerHTML = infoGold;
               }
               $("#dialogPanel").fadeIn(500);
               goldNone();
           }
         });

         //zakupu lampy
            $("#lamp").on("click", function(){
              if(gold[0] > 1){
                heroEquip.push("lampa");
                let newGold = (gold[0] - 1);
                gold.splice(0, 1, newGold);
              }else{
                  function goldNone(){
                    let infoGold = "<p>Nie masz tyle złota</p>";
                    let dialog = document.querySelector("#dialogPanelDescription");
                    dialog.innerHTML = infoGold;
                  }
                  $("#dialogPanel").fadeIn(500);
                  goldNone();
              }
            });

            //zakup liny
               $("#rope").on("click", function(){
                 if(gold[0] > 1){
                   heroEquip.push("lina");
                   let newGold = (gold[0] - 1);
                   gold.splice(0, 1, newGold);
                 }else{
                     function goldNone(){
                       let infoGold = "<p>Nie masz tyle złota</p>";
                       let dialog = document.querySelector("#dialogPanelDescription");
                       dialog.innerHTML = infoGold;
                     }
                     $("#dialogPanel").fadeIn(500);
                     goldNone();
                 }
               });

               //zakup jedzenia
                  $("#food").on("click", function(){
                    if(gold[0] > 1){
                      heroEquip.push("racja żyw.");
                      let newGold = (gold[0] - 1);
                      gold.splice(0, 1, newGold);
                    }else{
                        function goldNone(){
                          let infoGold = "<p>Nie masz tyle złota</p>";
                          let dialog = document.querySelector("#dialogPanelDescription");
                          dialog.innerHTML = infoGold;
                        }
                        $("#dialogPanel").fadeIn(500);
                        goldNone();
                    }
                  });

                  //zakup sztyletu
                     $("#dagger").on("click", function(){
                       if(gold[0] > 1){
                         heroEquip.push("sztylet");
                         let newGold = (gold[0] - 8);
                         gold.splice(0, 1, newGold);
                       }else{
                           function goldNone(){
                             let infoGold = "<p>Nie masz tyle złota</p>";
                             let dialog = document.querySelector("#dialogPanelDescription");
                             dialog.innerHTML = infoGold;
                           }
                           $("#dialogPanel").fadeIn(500);
                           goldNone();
                       }
                     });

                     //zakup pałki drewnianej
                        $("#woodenStick").on("click", function(){
                          if(gold[0] > 1){
                            heroEquip.push("drewniana pałka");
                            let newGold = (gold[0] - 4);
                            gold.splice(0, 1, newGold);
                          }else{
                              function goldNone(){
                                let infoGold = "<p>Nie masz tyle złota</p>";
                                let dialog = document.querySelector("#dialogPanelDescription");
                                dialog.innerHTML = infoGold;
                              }
                              $("#dialogPanel").fadeIn(500);
                              goldNone();
                          }
                        });

                        //zakup puklerz
                           $("#buckler").on("click", function(){
                             if(gold[0] > 1){
                               heroEquip.push("puklerz");
                               let newGold = (gold[0] - 12);
                               gold.splice(0, 1, newGold);
                             }else{
                                 function goldNone(){
                                   let infoGold = "<p>Nie masz tyle złota</p>";
                                   let dialog = document.querySelector("#dialogPanelDescription");
                                   dialog.innerHTML = infoGold;
                                 }
                                 $("#dialogPanel").fadeIn(500);
                                 goldNone();
                             }
                           });

   //przycisk rozglądania się - targ
   $("#lookingAround").on("click", function(){
     main.append(" Niewielki targ, na którym okoliczni mieszczkańcy mogą dokonywać swoich zakupów.");
   });

   $("#caravan").on("click", function(){
     let parent = document.querySelector("#gameDescription");
     let firstChild = document.querySelector("#main");
     let secondChild = document.querySelector("#buyItems");
     let thirdChild = document.querySelector("#market");
     parent.removeChild(firstChild);
     parent.removeChild(secondChild);
     parent.removeChild(thirdChild);

     function caravanSquare(){
        let text = "<p id='main'>W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski?<ul id='caravanPlace'><button id='lookingAround'>rozejrzyj się</button><button id='ask'>zapytaj</button></ul></p>";

        let gameDescription = document.querySelector("#gameDescription");
        gameDescription.innerHTML = text;
      }

      caravanSquare();

      $("#lookingAround").on("click", function(){
        main.append(" Za sobą masz bramę do miasta oraz wysokie mury miasta Erharuf. Przed sobą widzisz wielki plac, na którym karawany mogą przygotować się do podróży. W dali widniej ciemna linia  prastarego lasu.");
      });

      $("#ask").on("click", function(){
        let caravanPlace = document.querySelector("#caravanPlace");
        let ask = document.querySelector("#ask");
        caravanPlace.removeChild(ask);

        let accept2 = document.createElement("button");
        accept2.id = "accept";
        accept2.innerText = "zgódź się";
        caravanPlace.appendChild(accept2);
        main.append(" Podchodzisz bliżej. Widzisz postać krasnoluda, który wydziera się w niebo głosy i pogania wszystkich wokół. Gdy jesteś już blisko, pytasz: 'Mości krasnoludzie, czy ta karawana jedzie do wioski na pograniczu?' 'Że co? Aaaa... Tak! Jedziemy dalej, ale będziemy przez nią przejeżdżać. Jak chcesz się zabrać to musisz się pospiesz z wsiadaniem. Na ostatnim wozie jest jeszcze trochę miejsca.'- odpowiedział i wrócił do swoich obowiązków ");

        $("#accept").on("click", function(){
          let parent = document.querySelector("#gameDescription");
          let firstChild = document.querySelector("#main");
          let secondChild = document.querySelector("#caravanPlace");
          parent.removeChild(firstChild);
          parent.removeChild(secondChild);

          function caravan(){
            let text = "<p id='main'>Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...<ul id='journeyStart'><button id='lookingAround'>rozejrzyj się</button><button id='startJourney'>dalej</button></ul></p>";

            let gameDescription = document.querySelector("#gameDescription");
            gameDescription.innerHTML = text;
          }
          caravan();

          $("#lookingAround").on("click", function(){
              main.append(" Widzisz kilka paczek na wozie, szczelnie opakowane, woźnicę, orka, ziewającego, w oczekiwaniu na odjazd.");
          });

          $("#startJourney").on("click", function(){
            let parent = document.querySelector("#gameDescription");
            let firstChild = document.querySelector("#main");
            let secondChild = document.querySelector("#journeyStart");
            parent.removeChild(firstChild);
            parent.removeChild(secondChild);

            function journey(){
                let textJourney = "<p id='main'>Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy musieli walczyć!.<ul id='firstFight'><button id='fight'>walka</button><button id='further'>dalej</button></ul></p>";

                let gameDescription = document.querySelector("#gameDescription");
                gameDescription.innerHTML = textJourney;

                $("#further").prop("disabled", true);
              }

              journey();

              $("#fight").on("click", function(){
                $("#fight").prop("disabled", true);
                let fightValue = heroArrayFeatures2[0] + heroArrayFeatures2[1] + heroArrayFeatures2[2] +  heroArrayFeatures2[3] + heroArrayFeatures2[4];
                console.log(fightValue);

              main.append("Twój Ekwipunek to: " + heroEquip);
                console.log(heroEquip.length);
                let arr = [...heroEquip];
                console.log(arr);
              for(let i=0; i<heroEquip.length; i++){
                let weaponBtn = document.createElement("button");
                weaponBtn.id = i;
                weaponBtn.innerText = heroEquip[i];

                main.append(weaponBtn);
              }

              });

              $("#further").on("click", function(){

              });

          });
        });
      });
    });
});

});//zamknięcie zdarzenia opuszczania pomieszczenia linia 409

});//zamknięcie zdarzenia game linia 234
}

});
