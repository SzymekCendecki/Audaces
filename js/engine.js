/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var intro = __webpack_require__(3);
var mainMenu = __webpack_require__(4);
var arrays = __webpack_require__(5);
var heroCreator = __webpack_require__(6);
var firstSlide = __webpack_require__(7);
var secondSlide = __webpack_require__(8);
var thirdSlide = __webpack_require__(9);
var fourthSlide = __webpack_require__(10);
var fifthSlide = __webpack_require__(11);
var sixthSlide = __webpack_require__(12);
var seventhSlide = __webpack_require__(0);
var firstP = __webpack_require__(13);
var secondP = __webpack_require__(14);
var thirdP = __webpack_require__(15);
var fourthP = __webpack_require__(16);
var fifthP = __webpack_require__(17);
var sixthP = __webpack_require__(18);
var seventhP = __webpack_require__(19);
var eightP = __webpack_require__(20);

document.addEventListener("DOMContentLoaded", function () {
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
  $(".btnInfo").on("click", function () {
    mainMenu.info();
  });
  $(".btnLicence").on("click", function () {
    mainMenu.licence();
  });
  $(".btnTutorial").on("click", function () {
    mainMenu.tutorial();
  });

  //Creator of hero
  //slider
  $(".btnNewGame").on("click", function () {
    heroCreator.hideElements();
    heroCreator.showCreator();

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
      $('#slider ul').animate({
        left: +slideWidth
      }, 200, function () {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('left', '');
      });
    };

    function moveRight() {
      $('#slider ul').animate({
        left: -slideWidth
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
  var choosenName = $("#choosenName");

  //sprawdzenie wyboru imienia
  $("#nameAccept").on("click", function () {

    var name = $("#giveName").val().replace(/\d/g, '');

    if (name == "") {
      $("#nameFromFile").text("podaj imię").css("color", "red");
    } else {
      choosenName.text(name);
      $("#nameFromFile").text(name);
      $("#nameFromFile").css("color", "black");
    }
  });

  //first slide - choose race
  $("#chooseRace input").on("click", function () {
    firstSlide.chooseRace();
  });

  //second slide - choose occupation
  $("#chooseOccupation input").on("click", function () {
    secondSlide.chooseOccupation();
  });

  //third slide choose features
  //force point and tooltip for force points
  $("#force").on("click", function () {
    thirdSlide.forcePoints();
  });
  thirdSlide.forceTooltip();

  //strenght
  $("#strenght").on("click", function () {
    thirdSlide.strenghtPoints();
  });
  thirdSlide.strenghtTooltip();

  //skill
  $("#skill").on("click", function () {
    thirdSlide.skillPoints();
  });
  thirdSlide.skillTooltip();

  //intellectuals
  $("#intellectuals").on("click", function () {
    thirdSlide.intellectualsPoints();
  });
  thirdSlide.intellectualsTooltip();

  //charisma
  $("#charisma").on("click", function () {
    thirdSlide.charismaPoints();
  });
  thirdSlide.charismaTooltip();

  //fourth slide choose feature part 2
  $(".main input").on("click", function () {
    fourthSlide.sexCheck();
    fourthSlide.hairColorCheck();
    fourthSlide.eyesColorCheck();
    fourthSlide.weightCheck();
    fourthSlide.heightCheck();
    fourthSlide.skinCheck();
  });

  //fifth slide choose equipment
  $("#chooseEquipment input").on("click", function () {
    fifthSlide.equipment();
  });

  //sixth slide choose skill
  $("#chooseSkill input").on("click", function () {
    sixthSlide.skill();
  });

  //seventh slide
  var addAllInfo = function addAllInfo() {
    //sprawdzenie wybrania rasy, profesji, płci, włosów, koloru oczu, wagi, wzrostu i skóry
    var rFF = $("#raceFromFile");
    var oFF = $("#occupationFromFile");
    var sexFF = $("#sexFromFile");
    var hFF = $("#hairFromFile");
    var eyesFF = $("#eyesFromFile");
    var wFF = $("#weightFromFile");
    var heightFF = $("#heightFromFile");
    var skinFF = $("#skinFromFile");
    var nameFF = $("#nameFromFile");

    function checkRadio(inputRadio, zz, dd) {
      if (inputRadio === undefined) {
        zz.text("wybierz " + dd);
      } else {
        zz.text(inputRadio).css("color", "black");
      }
    }

    checkRadio(firstSlide.race, rFF, "rasę");
    checkRadio(secondSlide.occupation, oFF, "profesję");
    checkRadio(fourthSlide.sex, sexFF, "płeć");
    checkRadio(fourthSlide.hair, hFF, "włosy");
    checkRadio(fourthSlide.eyes, eyesFF, "kolor oczu");
    checkRadio(fourthSlide.weight, wFF, "wagę");
    checkRadio(fourthSlide.height, heightFF, "wzrost");
    checkRadio(fourthSlide.skin, skinFF, "skórę");

    //sprawdzenie wylosowania punktów cech
    var fFF = $("#forceFromFile");
    var sFF = $("#strenghtFromFile");
    var skFF = $("#skillFromFile");
    var iFF = $("#intelectualsFromFile");
    var cFF = $("#charismaFromFile");

    function check2(race, occupation, randomPoints, ll) {
      if (!isNaN(race) && !isNaN(occupation) && !isNaN(randomPoints)) {
        ll.text(race + occupation + randomPoints).css("color", "black");
      } else {
        ll.text("wybierz rasę, profesję i wylosuj punkty");
      }
    }

    check2(firstSlide.mainFeaturesRace0, secondSlide.mainFeaturesOccupation0, thirdSlide.forcePoint, fFF);
    check2(firstSlide.mainFeaturesRace1, secondSlide.mainFeaturesOccupation1, thirdSlide.strenghtPoint, sFF);
    check2(firstSlide.mainFeaturesRace2, secondSlide.mainFeaturesOccupation2, thirdSlide.skillPoint, skFF);
    check2(firstSlide.mainFeaturesRace3, secondSlide.mainFeaturesOccupation3, thirdSlide.intellectualsPoint, iFF);
    check2(firstSlide.mainFeaturesRace4, secondSlide.mainFeaturesOccupation4, thirdSlide.charismaPoint, cFF);

    //sprawdzenie wybrania ekwipunku oraz umiejętności
    var equipFF = $("#equipmentFromFile");
    var skillsFF = $("#skillsFromFile");

    function checkArray(array, zb, dh) {
      if (array === undefined) {
        zb.text("wybierz " + dh);
      } else {
        zb.text(array).css("color", "black");
      }
    }

    checkArray(fifthSlide.equipArray, equipFF, "ekwipunek");
    checkArray(sixthSlide.skillArray, skillsFF, "umiejętności");

    //button game disabled/enabled
    var textRace = rFF.text();
    var textOccupation = oFF.text();
    var textSex = sexFF.text();
    var textName = nameFF.text();

    var textHair = hFF.text();
    var textEyes = eyesFF.text();
    var textWeight = wFF.text();
    var textHeight = heightFF.text();
    var textSkin = skinFF.text();

    var textForce = fFF.text();
    var textStrenght = sFF.text();
    var textSkill = skFF.text();
    var textIntellectuals = iFF.text();
    var textCharisma = cFF.text();

    function checkButtonGame(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
      if (a == "wybierz rasę" || b == "wybierz profesję" || c == "wybierz płeć" || d == "wybierz włosy" || e == "wybierz kolor oczu" || f == "wybierz wagę" || g == "wybierz wzrost" || h == "wybierz rasę, profesję i wylosuj punkty" || i == "wybierz rasę, profesję i wylosuj punkty" || j == "wybierz rasę, profesję i wylosuj punkty" || k == "wybierz rasę, profesję i wylosuj punkty" || l == "wybierz rasę, profesję i wylosuj punkty" || m == "wybierz skórę" || n == "podaj imię" || n == "") {
        $("#game").addClass("red").prop("disabled", true);
      } else {

        $("#game").prop("disabled", false).removeClass("red").addClass("green");
      }
    }

    checkButtonGame(textRace, textOccupation, textSex, textHair, textEyes, textWeight, textForce, textStrenght, textSkill, textIntellectuals, textCharisma, textSkin, textName);

    $("#game").on("click", function () {
      //enabled button game
      // heroArray = [name, race, occupation, sex, hair, eyes, weight, height, skin]
      var heroArrayFeatures1 = [];

      //heroArrayFeatures2 = [force, strenght, skill, intellectuals, charisma]
      var heroArrayFeatures2 = [];

      // heroEquip = [equipment];
      var heroEquip = fifthSlide.equipArray;

      // heroEquip = [skills];
      var heroSkills = sixthSlide.skillArray;

      //tablica ze złotem -stan początkowy
      var gold = [0];

      // tablica z zadaniami

      var tasks = ["Oddać paczkę mnichowi w przygranicznej wiosce."];

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

      $("#slider").fadeOut(650);
      $("#gameIntro").delay(650).fadeIn(650);

      $("#newGame").on("click", function () {
        $(this).parent().fadeOut(650);
        $("#mainPanel").delay(2000).fadeIn(650);
      });

      //przyciski głównego panelu gry
      //zbudowanie zawartości okna dialogowego pod przyciskiem cech

      function createFeaturesDialog() {
        var dialog = document.querySelector("#dialogPanelDescription");
        var dialog2 = document.querySelector("#dialogPanelDescription2");
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
      $("#features2").on("click", function () {
        $("#dialogPanel").fadeIn(500);
        createFeaturesDialog();
      });

      //przycisk ekwipunku
      $("#equip").on("click", function () {
        $("#dialogPanel").fadeIn(500);
        $("#dialogPanelDescription").text(heroEquip);
        $("#dialogPanelDescription2").text("złoto: " + gold[0]);
      });

      //przycisk umiejętności
      $("#skills").on("click", function () {
        $("#dialogPanel").fadeIn(500);
        $("#dialogPanelDescription").text(heroSkills);
        $("#dialogPanelDescription2").text("");
      });

      //przycisk zadań
      $("#task").on("click", function () {
        $("#dialogPanel").fadeIn(500);
        $("#dialogPanelDescription").text(tasks[0]);
        $("#dialogPanelDescription2").text("");
      });

      //funkcja zamykająca dialogPanel
      $("#close").on("click", function () {
        $("#dialogPanel").fadeOut(500);
      });

      //pierwszy paragraf
      firstP.firstP();
      $("#wardrobe").addClass("green");
      $("#chest").addClass("green");
      $("#leave").addClass("red");

      //przycisk rozglądania się - pierwszy tekst
      $("#lookingAround").on("click", function () {
        main.append(firstP.roomText);
      });

      //przycisk badania szafy i zabierania płaszcza - pierwszy tekst
      $("#wardrobe").on("click", function () {
        main.append(firstP.wardrobeText);

        var btnCoat = document.createElement("button");
        btnCoat.id = "coat";
        btnCoat.innerText = "weź płaszcz";

        var roomList = document.querySelector("#roomList");
        roomList.appendChild(btnCoat);
        $(this).remove();

        //przycik zabrania płaszcza - pierwszy tekst
        $("#coat").on("click", function () {
          main.append(" Płaszcz wzięty.");
          heroEquip.push("płaszcz");
          $(this).remove();
        });
      });

      //przycisk sprawdzenia skrzyni i zabierania złota
      $("#chest").on("click", function () {
        main.append(firstP.chestText);

        var btnGold = document.createElement("button");
        btnGold.id = "gold";
        btnGold.innerText = "weź złoto";

        var roomList = document.querySelector("#roomList");
        roomList.appendChild(btnGold);
        $(this).remove();

        //przycik zabrania złoto
        $("#gold").on("click", function () {
          var goldChest = gold[0] + 12;
          gold.splice(0, 1, goldChest);
          main.append(" Złoto zabrane.");
          $(this).remove();
        });
      });

      //przycisk zabierania paczki
      $("#takePackage").on("click", function () {
        firstP.takePackage();
        heroEquip.push("paczka");
        $("#leave").removeClass("red").addClass("green").prop("disabled", false);
        $(this).remove();
      });

      //przycisk opuszczenia pomieszczenia
      $("#leave").on("click", function () {
        document.querySelector("#main").removeChild(document.querySelector("#text"));
        document.querySelector("#main").removeChild(document.querySelector("#roomList"));

        //drugi paragraf
        secondP.secondP();

        //przycisk rozglądania się - ulica
        $("#lookingAround").on("click", function () {
          main.append(secondP.streetText);
        });
        $("#marketBtn").addClass("green");

        //przycisk targ - przejście do paragrafu trzeciego - targowiska
        $("#marketBtn").on("click", function () {
          document.querySelector("#main").removeChild(document.querySelector("#text"));
          document.querySelector("#main").removeChild(document.querySelector("#street"));

          //paragraf trzeci
          thirdP.thirdP();
          $("#caravan").addClass("green");

          //przycisk rozglądania się - targ
          $("#lookingAround").on("click", function () {
            main.append(thirdP.marketText);
          });

          //przycisk kupowania
          $("#buy").on("click", function () {
            $("#dialogPanel").fadeIn(500);
            $("#dialogPanelDescription2").text("");
            thirdP.buysItems();

            function buyItem(item, price) {
              if (gold[0] >= price) {
                heroEquip.push(item);
                var newGold = gold[0] - price;
                gold.splice(0, 1, newGold);
                $("#dialogPanelDescription2").text("kupiono: " + item);
              } else {
                thirdP.noGold();
              }
            }

            //zakup namiotu
            $("#tent").on("click", function () {
              buyItem("namiot", 5);
            });

            //zakupu torby
            $("#bag").on("click", function () {
              buyItem("torba", 1);
            });

            //zakupu derki
            $("#blanket").on("click", function () {
              buyItem("derka", 1);
            });

            //zakupu lampy
            $("#lamp").on("click", function () {
              buyItem("lampa", 1);
            });

            //zakup liny
            $("#rope").on("click", function () {
              buyItem("lina", 1);
            });

            //zakup jedzenia
            $("#food").on("click", function () {
              buyItem("racja żyw.", 1);
            });

            //zakup sztyletu
            $("#dagger").on("click", function () {
              buyItem("sztylet", 8);
            });

            //zakup pałki drewnianej
            $("#woodenStick").on("click", function () {
              buyItem("drewniana pałka", 4);
            });

            //zakup puklerz
            $("#buckler").on("click", function () {
              buyItem("puklerz", 12);
            });
          }); //zamknięcie przycisku kupowania

          //przycisk sprzedawania
          $("#sell").on("click", function () {
            $("#dialogPanel").fadeIn(500);

            thirdP.sellStart();

            for (var i = 0; i < heroEquip.length; i++) {
              var itemBtn = document.createElement("button");
              itemBtn.id = heroEquip[i];
              itemBtn.innerText = heroEquip[i];
              $("#sellItemsBtns").append(itemBtn);
              $("#paczka").addClass("red").prop("disabled", true);

              document.querySelectorAll("#dialogPanelDescription button")[i].onclick = function () {
                var newGold = gold[0] + 0.5;
                gold.splice(0, 1, newGold);

                var thisText = $(this).text();
                if (heroEquip.indexOf(thisText) !== -1) {
                  heroEquip.splice(heroEquip.indexOf(thisText), 1);
                }

                $("#dialogPanelDescription2").text("sprzedano: " + $(this).text() + " za 0,5 szt. zł/");
                $(this).remove();
              };
            }
          }); //zakończenie przycisku sprzedaży


          //przycisk karawana - caravan pójście na plac karawany
          $("#caravan").on("click", function () {
            document.querySelector("#main").removeChild(document.querySelector("#text"));
            document.querySelector("#main").removeChild(document.querySelector("#buySellItems"));

            //paragraf czwarty
            fourthP.fourthP();

            //przycisk rozglądania się - postój karawan
            $("#lookingAround").on("click", function () {
              fourthP.caravanText();
            });
            $("#ask").addClass("green");

            $("#ask").on("click", function () {
              fourthP.removeBtnAsk();
              fourthP.creatingBtnAccept2();
              $("#accept").addClass("green");
              fourthP.asking();

              //paragraf piąty wyruszenie w podróż
              $("#accept").on("click", function () {
                document.querySelector("#main").removeChild(document.querySelector("#text"));
                document.querySelector("#main").removeChild(document.querySelector("#caravanPlace"));

                //wywołanie paragrafu piątego
                fifthP.fifthP();
                $("#startJourney").addClass("green");

                $("#lookingAround").on("click", function () {
                  fifthP.wagonLooking();
                });

                //paragraf szósty - pierwsza walka
                $("#startJourney").on("click", function () {
                  document.querySelector("#main").removeChild(document.querySelector("#text"));
                  document.querySelector("#main").removeChild(document.querySelector("#journeyStart"));
                  sixthP.sixthP();

                  $("#fight").addClass("green");
                  $("#further").addClass("red").prop("disabled", true);

                  //przycisk pierwszej walki
                  $("#fight").on("click", function () {
                    $("#dialogPanel").fadeIn(500);

                    var mainDiv = document.createElement("div");
                    mainDiv.id = "mainDiv";

                    //wybór ekwipunku do walki
                    var fightEquip = document.createElement("p");
                    fightEquip.id = "fightEquip";
                    fightEquip.innerText = "Wybierz ekwipunek do walki - maksymalnie 3 rzeczy.";

                    var fightEquipBtnsLists = document.createElement("p");
                    fightEquipBtnsLists.id = "fightEquipBtnsLists";
                    fightEquipBtnsLists.innerHTML = "";

                    //przyciski z rzeczmi do wyboru
                    for (var i = 0; i < heroEquip.length; i++) {
                      var weaponBtn = document.createElement("button");
                      weaponBtn.id = heroEquip[i];
                      weaponBtn.innerText = heroEquip[i];
                      fightEquipBtnsLists.append(weaponBtn);
                    }

                    //dodanie listy przycisków do wyboru ekwipunku
                    mainDiv.append(fightEquip);
                    mainDiv.append(fightEquipBtnsLists);

                    //utworzenie paragrafów dla wartości bojowej
                    var fightValue = heroArrayFeatures2[0] + heroArrayFeatures2[1] + heroArrayFeatures2[2] + heroArrayFeatures2[3] + heroArrayFeatures2[4];

                    var valueFightP = document.createElement("p");
                    valueFightP.id = "valueFight";
                    valueFightP.innerText = "Twoja wartość bojowa.";

                    var fightValueValue = document.createElement("p");
                    fightValueValue.id = "fightValueValue";
                    fightValueValue.innerText = fightValue;

                    $("#dialogPanelDescription").text("");
                    $("#dialogPanelDescription").append(mainDiv);
                    $("#dialogPanelDescription2").text("");

                    //wyłączenie wybory paczki jak o rzeczy do walki
                    $("#fightEquipBtnsLists #paczka").addClass("red").prop("disabled", true);

                    //wybór przedmiotów do walki
                    var allBtns = document.querySelectorAll("#fightEquipBtnsLists button");
                    var fightWeapon = []; //tablica pomocnicza, dzięki której jest możliwa walidacja wuboru 3 rzeczy do walki oraz oblicznia wartości bojowej

                    for (var _i = 0; _i < allBtns.length; _i++) {
                      allBtns[_i].onclick = function () {
                        if (fightWeapon.length < 3) {
                          var item = $(this).text();
                          fightWeapon.push(item);
                          $(this).remove();
                          $("#dialogPanelDescription2").text("Został wybrany " + $(this).text() + ". ");
                        } else if (fightWeapon.length >= 3) {
                          $("#dialogPanelDescription2").text("");
                          $("#dialogPanelDescription2").append('Nie możesz wybrać więcej rzeczy.');
                        }
                      };
                    }
                    //przycisk zakończający - zatwierdzający wybieranie
                    var btnAccept = document.createElement("button");
                    btnAccept.id = "chooseFinish";
                    btnAccept.innerText = "zakończ wybieranie";
                    $("#fightEquipBtnsLists").append(btnAccept);
                    $("#chooseFinish").addClass("green");

                    //przejście do wybierania stylu walki - ofensywny lub defensywny
                    $("#chooseFinish").on("click", function () {
                      $("#dialogPanelDescription").text("");
                      $("#dialogPanelDescription2").text("");

                      var mainDivAttackDefence = document.createElement("div");
                      mainDivAttackDefence.id = "mainDivAttackDefence";

                      $("#dialogPanelDescription").append(mainDivAttackDefence);

                      var attackDefenceP = document.createElement("p");
                      attackDefenceP.id = "attackDefenceP";
                      attackDefenceP.innerText = "Wybierz styl walki.";
                      mainDivAttackDefence.append(attackDefenceP);

                      var attackDefenceBtnsList = document.createElement("p");
                      attackDefenceBtnsList.id = "attackDefenceBtnsList";
                      $("#mainDivAttackDefence").append(attackDefenceBtnsList);

                      //przycisk stylu ofensywnego
                      var offensiveBtn = document.createElement("button");
                      offensiveBtn.id = "offensiveBtn";
                      offensiveBtn.innerText = "ofensywny";
                      attackDefenceBtnsList.append(offensiveBtn);

                      //przycisk stylu defensywnego
                      var defensiveBtn = document.createElement("button");
                      defensiveBtn.id = "defensiveBtn";
                      defensiveBtn.innerText = "defensywny";
                      attackDefenceBtnsList.append(defensiveBtn);

                      //zdarzenie przycisku ofensywnego
                      $("#offensiveBtn").on("click", function () {
                        mainDivAttackDefence.append("Wykorzystując swój ekwipunek i umiejętności zaciekle atakujesz przeciwnika. Zdecydowanie górujesz nim. Po kilku minutach przeciwnik pada martwy. Odnosisz swoje pierwsze zwycięstwo. Twoje cechy podniosły się.");

                        $("#offensiveBtn").remove();
                        $("#defensiveBtn").remove();
                        $("#attackDefenceP").remove();
                        $("#fight").remove();
                        $(this).remove();
                        $("#further").addClass("green").prop("disabled", false);

                        heroArrayFeatures2[0] = heroArrayFeatures2[0] + 5;
                        heroArrayFeatures2.splice(0, 1, heroArrayFeatures2[0]);
                        heroArrayFeatures2[1] = heroArrayFeatures2[1] + 5;
                        heroArrayFeatures2.splice(1, 1, heroArrayFeatures2[1]);
                        heroArrayFeatures2[2] = heroArrayFeatures2[2] + 5;
                        heroArrayFeatures2.splice(2, 1, heroArrayFeatures2[2]);
                        heroArrayFeatures2[3] = heroArrayFeatures2[3] + 5;
                        heroArrayFeatures2.splice(3, 1, heroArrayFeatures2[3]);
                        heroArrayFeatures2[4] = heroArrayFeatures2[4] + 5;
                        heroArrayFeatures2.splice(4, 1, heroArrayFeatures2[4]);
                      }); //zakończenie zdarzenia przycisku stylu walki ofensywnego


                      //zdarzenie przycisku defensywnego
                      $("#defensiveBtn").on("click", function () {
                        mainDivAttackDefence.append("Wykorzystując swój ekwipunek i umiejętności z zaciętością bronisz się przed atakami przeciwnika. W pewnym momencie wykorzystujesz moment i zadajesz cios. Przeciwnik pada martwy. Odnosisz swoje pierwsze zwycięstwo. Twoje cechy podniosły się.");

                        $("#offensiveBtn").remove();
                        $("#defensiveBtn").remove();
                        $("#attackDefenceP").remove();
                        $("#fight").remove();
                        $(this).remove();
                        $("#further").addClass("green").prop("disabled", false);

                        heroArrayFeatures2[0] = heroArrayFeatures2[0] + 5;
                        heroArrayFeatures2.splice(0, 1, heroArrayFeatures2[0]);
                        heroArrayFeatures2[1] = heroArrayFeatures2[1] + 5;
                        heroArrayFeatures2.splice(1, 1, heroArrayFeatures2[1]);
                        heroArrayFeatures2[2] = heroArrayFeatures2[2] + 5;
                        heroArrayFeatures2.splice(2, 1, heroArrayFeatures2[2]);
                        heroArrayFeatures2[3] = heroArrayFeatures2[3] + 5;
                        heroArrayFeatures2.splice(3, 1, heroArrayFeatures2[3]);
                        heroArrayFeatures2[4] = heroArrayFeatures2[4] + 5;
                        heroArrayFeatures2.splice(4, 1, heroArrayFeatures2[4]);
                      }); //zakończenie zdarzenia przyciksu defensywnego
                    }); //zakończenie wybierania stylu walki
                  }); //zakończenie przycisku pierwszej walki


                  //przycisk dalej - #further - przejście do paragrafu siódmego
                  $("#further").on("click", function () {
                    document.querySelector("#main").removeChild(document.querySelector("#text"));
                    document.querySelector("#main").removeChild(document.querySelector("#firstFight"));

                    //paragraf siódmy
                    seventhP.seventhP();
                    $("#further").addClass("green");

                    //losowanie przedmiotów, które są dodawane do ekwipunku
                    var item1 = Math.round(Math.random() * arrays.equipment.length - 1);
                    heroEquip.push(arrays.equipment[item1]);

                    var item2 = Math.round(Math.random() * arrays.equipment.length - 1);
                    heroEquip.push(arrays.equipment[item2]);

                    var item3 = Math.round(Math.random() * arrays.equipment.length - 1);
                    heroEquip.push(arrays.equipment[item3]);

                    var item4 = Math.round(Math.random() * arrays.equipment.length - 1);
                    heroEquip.push(arrays.equipment[item4]);

                    var item5 = Math.round(Math.random() * arrays.equipment.length - 1);
                    heroEquip.push(arrays.equipment[item5]);

                    var pickedItems = document.createElement("p");
                    pickedItems.id = "pickedItems";
                    pickedItems.innerText = "";
                    main.append(pickedItems);

                    $("#pickedItems").addClass("marginIndent");
                    $("#pickedItems").append(seventhP.addItems + arrays.equipment[item1] + ", " + arrays.equipment[item2] + ", " + arrays.equipment[item3] + ", " + arrays.equipment[item4] + ", " + arrays.equipment[item5]);

                    //paragraf ósmy
                    $("#village").on("click", function () {
                      document.querySelector("#main").removeChild(document.querySelector("#text"));
                      document.querySelector("#main").removeChild(document.querySelector("#afterFight"));

                      eightP.eightP();

                      $("#monk").addClass("green");

                      var villageP = document.createElement("p");
                      villageP.id = "villageP";
                      villageP.innerText = "";
                      main.append(villageP);

                      $("#villageP").append(eightP.lookVillage);

                      $("#monk").on("click", function () {

                        var givePackageMonk = document.createElement("p");
                        givePackageMonk.id = "givePackageMonk";
                        givePackageMonk.innerText = "";

                        main.append(givePackageMonk);

                        $("#givePackageMonk").append(eightP.givePackage);
                        $("#givePackageMonk").addClass("marginIndent");

                        tasks.splice(0, 1);

                        function taskValidation() {
                          if (tasks.length == 0) {
                            tasks.push("Aktualnie nie masz zadań");
                          } else {
                            if (tasks.indexOf("Aktualnie nie masz zadań") !== -1) {
                              tasks.splice(tasks.indexOf("Aktualnie nie masz zadań"), 1);
                            }
                          }
                        }

                        taskValidation();
                        $("#lookingAround").remove();
                        $(this).remove();

                        function addGameOver() {
                          var gameOver = document.createElement("p");
                          gameOver.id = "gameOver";
                          gameOver.innerText = "GAME OVER";
                          main.append(gameOver);

                          var newGameFinish = document.createElement("button");
                          newGameFinish.id = "newGameFinish";
                          newGameFinish.innerHTML = "Nowa Gra";
                          main.append(newGameFinish);
                        }

                        setTimeout(addGameOver(), 5000);

                        $("#newGameFinish").on("click", function () {
                          location.reload();
                        });
                      });
                    }); //zakończenie paragrafu ósmego

                  }); //zakończenie przycisku dalej - odblokowanego po walce

                }); //zakończenie paragrafu szóstego

              }); //zakończenie przycisku accept - wyruszenie w podróż
            }); //zakończenie przycisku ask - zapytaj
          }); //zakończenie przycisku caravan
        }); //zakończenie przycisku marketBtn
      }); //zakończenie przycisku opuszczenia pomieszczenia
    }); //zamknięcie zdarzenia game linia 234
  };
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//intro -inscription and title
module.exports.hideInscription = function hideInscription() {
  $("#inscriptions").fadeOut(2000);
};

module.exports.showTitle = function showTitle() {
  $("#title").fadeIn(2000);
};

module.exports.hideTitle = function hideTitle() {
  $("#title").fadeOut(2000);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//main Menu
module.exports.startOptionsGame = function startOptionsGame() {
  $("#startOptionsGame, #hello").fadeIn(2000);
  $("body").css("backgroundColor", "beige");
};

//info
module.exports.info = function info() {
  $("#descriptionMenu").text("Ta wersja gry została stworzona jako projekt końcowy kursu front'endowego, a także jako modernizacja tej samej gry sprzed kursu. Gra ma także na celu przetestowanie mechaniki 'papierowej' wersji systemu gry Audaces. Projekt będzie rozwijalny także po skończeniu kursu. Wszystkie wersje tej gry zostały wydane przez niezależne studio Niewierne Psy. Gra powstała dzięki użytym technologiom: HTML5, SASS(css), jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com/.").addClass("descriptionMenu");
};

//licence
module.exports.licence = function licence() {
  $("#descriptionMenu").text("Licencja dostępna jest w pliku tekstowym w głównym katalogu. Użytkownik rozpoczynająć grę, akceptuje warunki licencji.").addClass("descriptionMenu");
};

//Tutorial
module.exports.tutorial = function tutorial() {
  $("#descriptionMenu").text("Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial pojawi się pod nimi odpowiednia informacj. Po wciśnięciu przycisku Nowa gra, użytkownik rozpocznie grę. Po rozpoczęciu gry, użytkownik będzie mógł wylosować postać lub ją stworzyć. Gdy będzie chciał ją stworzyć samemu, przejdzie do kreatora, który będzie podpowiadał możliwości. Po stworzeniu postaci, użytkownik przejdze do gry. Ekran będzie podzielony zasadniczo na dwie części. Górna, miejsza, będzie zawierała przyciski, dzięki którym będzie można mieć podgląd do charakterystyk swojego protagonisty, ekwipunku zadań do wykonania oraz pomocy. Dolna część to część, na której będzie się odgrywała cała historia gry. Na niej to gracz będzie mógł dokonywać interakcji.").addClass("descriptionMenu");
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var seventhSlide = __webpack_require__(0);

//Arrays for creator
//main races
var races = ["człowiek", "elf", "krasnolud", "ork"];

//main professions
var professions = ["wojownik", "czarodziej", "złoczyńca"];

//basic items - start of game
//weapons = 15
var weaponArray = ["sztylet", "daga", "mizerykordia", "drewniana pałka", "krótki miecz", "szabla", "miecz długi", "morgensztern", "miecz półtoraręczny", "miecz dwuręczny", "espadon", "włócznia", "pika", "halabarda", "proca", "łuk", "kusza"];

//armors = 7
var armorsArray = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana", "zbroja paskowa", "kolczuga", "zbroja pópłytowa", "zbroja płytowa"];

//shields = 6
var shieldsArray = ["puklerz", "mała drewniana", "mała metalowa", "duża drewniana", "duża metalowa", "pawęż"];

//equipment and skills
//equipment = 19
module.exports.equipment = ["hubka i krzesiwo", "mieszek", "pas skórzany", "igły i nici", "tuba na pergaminy", "pęk piór do pisania", "pergaminy 5szt.", "zwykłe ubranie", "płaszcz", "fikuśny kapelusz", "łapcie z łyka", "kosz wiklinowy", "plecak", "torba podróżna", "sakwa", "koc", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m"];

//skills 10
var skillsWarrior = ["sztuka przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

var skillsBandit = ["przygotowanie trucizn", "wspinaczka", "aktorstwo", "akrobatyka", "tworzenie pułpek", "skradanie się", "kradzież kieszonkowa", "uniki", "drewniana pałka", "sztylet", "krótki miecz", "blefowanie"];

var skillWizard = ["pisanie i czytanie", "przywołanie/odpędzenie demona", "wróżbiarstwo", "leczenie ran", "rzucanie czarów", "tworzenie eliksirów", "tworzenie mag. przedmiotów", "tworzenie maści", "astrologia", "tworzenie mag. runów", "zielarstwo"];

var bonusesArray = [-5, -3, -2, 0, 4, 5, 10];

module.exports.show = function () {
  humanFeatures.push(bonusesArray[3]);
  humanFeatures.push(bonusesArray[3]);
  humanFeatures.push(bonusesArray[3]);
  humanFeatures.push(bonusesArray[3]);
  humanFeatures.push(bonusesArray[3]);

  //współczynniki z profesji
  //wojownik siła +5, wytrzymałość +5
  //złoczyńca zręczność +10
  //mag charyzma +5, inteligencja +5

  //współczynniki z rasy
  //człowiek zero dla wszystkich cech
  //elf siła -5, wytrzymałość -5, inteligencja +5, charyzma +5
  //krasnolud siła +4, wytrzymałość +4, zręczność -2,  charyzma -3
  //ork siła +5, wytrzymałość +5, inteligencja -5, charyzma -5//all choose inforamtion

  //<p id="infoForce"></p>
  //<p id="infoStrenght"></p>
  //<p id="infoSkill"></p>
  //<p id="infoIntellectuals"></p>
  //<p id="infoCharisma"></p>
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//hero creator
module.exports.hideElements = function hideElements() {
    $("#hello, #startOptionsGame, #descriptionMenu").fadeOut(750);
}; //hide hideElements

module.exports.showCreator = function showCreator() {
    $("#slider").delay(750).fadeIn(750);
};

module.exports.features1 = "<div id='name'><p id='descriptionTitleName'>Imię</p><p id='descriptionName'></p></div><div id='race'><p id='descriptionTitleRace'>Rasa</p><p id='descriptionRace'></p></div><div id='occupation'><p id='descriptionTitleOccupation'>Profesja</p><p id='descriptionOccupation'></p></div><div id='sex'><p id='descriptionTitleSex'>Płeć</p><p id='descriptionSex'></p></div><div id='hair'><p id='descriptionTitleHair'>Kolor włosów</p><p id='descriptionHair'></p></div><div id='eyes'><p id='descriptionTitleEyes'>Kolor oczu</p><p id='descriptionEyes'></p></div><div id='weight'><p id='descriptionTitleWeight'>Waga</p><p id='descriptionWeight'></p></div><div id='height'><p id='descriptionTitleHeight'>Wzrost</p><p id='descriptionHeight'></p></div><div id='skin'><p id='descriptionTitleSkin'>Kolor skóry</p><p id='descriptionSkin'></p></div>";

module.exports.features2 = "<div id='force'><p id='descriptionTitleForce'>Siła</p><p id='descriptionForce'></p></div><div id='strenght'><p id='descriptionTitleStrenght'>Wytrzymałość</p><p id='descriptionStrenght'></p></div><div id='skill'><p id='descriptionTitleSkill'>Zręczność</p><p id='descriptionSkill'></p></div><div id='intellectuals'><p id='descriptionTitleIntellectuals'>Inteligencja</p><p id='descriptionIntellectuals'></p></div><div id='charisma'><p id='descriptionTitleCharisma'>Charyzma</p><p id='descriptionCharisma'></p></div>";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//race description
module.exports.chooseRace = function () {
      var inputRaceChecked = $('input:radio[name=race]:checked').val();

      module.exports.race = inputRaceChecked;
      //mainFeaturesRace = [force, strenght, skill, intellectuals, charisma]
      var mainFeaturesRace = [];

      switch (inputRaceChecked) {
            case "człowiek":
                  $("#raceDecription").text("Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg, kolor oczu: najczęściej piwne, szare, brązowe, kolor skóry: od białego do czarnego (wraz z odcieniami), żółta, czerwona, kolor włosów: każdy, wiek: do 100 lat, profesja: każda.");

                  mainFeaturesRace.splice(0, 1, 0);
                  mainFeaturesRace.splice(1, 1, 0);
                  mainFeaturesRace.splice(2, 1, 0);
                  mainFeaturesRace.splice(3, 1, 0);
                  mainFeaturesRace.splice(4, 1, 0);

                  module.exports.mainFeaturesRace0 = mainFeaturesRace[0];
                  module.exports.mainFeaturesRace1 = mainFeaturesRace[1];
                  module.exports.mainFeaturesRace2 = mainFeaturesRace[2];
                  module.exports.mainFeaturesRace3 = mainFeaturesRace[3];
                  module.exports.mainFeaturesRace4 = mainFeaturesRace[4];

                  $("#infoRace").text("człowiek");
                  break;

            case "elf":
                  $("#raceDecription").text("Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 1500 lat, profesja: każda, z predyspozycjami do bycia czarodziejem.");

                  mainFeaturesRace.splice(0, 1, -5);
                  mainFeaturesRace.splice(1, 1, -5);
                  mainFeaturesRace.splice(2, 1, 0);
                  mainFeaturesRace.splice(3, 1, 5);
                  mainFeaturesRace.splice(4, 1, 5);
                  module.exports.mainFeaturesRace0 = mainFeaturesRace[0];
                  module.exports.mainFeaturesRace1 = mainFeaturesRace[1];
                  module.exports.mainFeaturesRace2 = mainFeaturesRace[2];
                  module.exports.mainFeaturesRace3 = mainFeaturesRace[3];
                  module.exports.mainFeaturesRace4 = mainFeaturesRace[4];

                  $("#infoRace").text("elf");

                  break;

            case "krasnolud":
                  $("#raceDecription").text("Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 500 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.");

                  mainFeaturesRace.splice(0, 1, 4);
                  mainFeaturesRace.splice(1, 1, 4);
                  mainFeaturesRace.splice(2, 1, 0);
                  mainFeaturesRace.splice(3, 1, -2);
                  mainFeaturesRace.splice(4, 1, -3);
                  module.exports.mainFeaturesRace0 = mainFeaturesRace[0];
                  module.exports.mainFeaturesRace1 = mainFeaturesRace[1];
                  module.exports.mainFeaturesRace2 = mainFeaturesRace[2];
                  module.exports.mainFeaturesRace3 = mainFeaturesRace[3];
                  module.exports.mainFeaturesRace4 = mainFeaturesRace[4];

                  $("#infoRace").text("krasnolud");
                  break;

            case "ork":
                  $("#raceDecription").text("Orki to niezwykle wojownicza rasa. Są w głównej mierze koczownikami, z kastowym podziałem społeczeństwa. Są niechętni każdemu rodzajowi magii, za wyjątkiem magii szamańskiej, do której odnoszą się z nieufnością. Podstawowe cechy: wzrost: 180 - 220cm, waga: 100 - 150kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 80 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.");

                  mainFeaturesRace.splice(0, 1, 5);
                  mainFeaturesRace.splice(1, 1, 5);
                  mainFeaturesRace.splice(2, 1, 0);
                  mainFeaturesRace.splice(3, 1, -5);
                  mainFeaturesRace.splice(4, 1, -5);
                  module.exports.mainFeaturesRace0 = mainFeaturesRace[0];
                  module.exports.mainFeaturesRace1 = mainFeaturesRace[1];
                  module.exports.mainFeaturesRace2 = mainFeaturesRace[2];
                  module.exports.mainFeaturesRace3 = mainFeaturesRace[3];
                  module.exports.mainFeaturesRace4 = mainFeaturesRace[4];

                  $("#infoRace").text("ork");
                  break;
      }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//choose occupations
module.exports.chooseOccupation = function () {
    var inputOccupationChecked = $('input:radio[name=occupation]:checked').val();

    module.exports.occupation = inputOccupationChecked;

    // mainFeaturesOccupation = [force, strenght, skill, intellectuals, charisma]
    var mainFeaturesOccupation = [];

    switch (inputOccupationChecked) {
        case "wojownik":
            $("#occupationDecription").text("Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.");

            mainFeaturesOccupation.splice(0, 1, 5);
            mainFeaturesOccupation.splice(1, 1, 5);
            mainFeaturesOccupation.splice(2, 1, 0);
            mainFeaturesOccupation.splice(3, 1, 0);
            mainFeaturesOccupation.splice(4, 1, 0);
            module.exports.mainFeaturesOccupation0 = mainFeaturesOccupation[0];
            module.exports.mainFeaturesOccupation1 = mainFeaturesOccupation[1];
            module.exports.mainFeaturesOccupation2 = mainFeaturesOccupation[2];
            module.exports.mainFeaturesOccupation3 = mainFeaturesOccupation[3];
            module.exports.mainFeaturesOccupation4 = mainFeaturesOccupation[4];

            $("#infoOccupation").text("wojownik");
            break;

        case "złoczyńca":
            $("#occupationDecription").text("Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.");

            mainFeaturesOccupation.splice(0, 1, 0);
            mainFeaturesOccupation.splice(1, 1, 0);
            mainFeaturesOccupation.splice(2, 1, 10);
            mainFeaturesOccupation.splice(3, 1, 0);
            mainFeaturesOccupation.splice(4, 1, 0);
            module.exports.mainFeaturesOccupation0 = mainFeaturesOccupation[0];
            module.exports.mainFeaturesOccupation1 = mainFeaturesOccupation[1];
            module.exports.mainFeaturesOccupation2 = mainFeaturesOccupation[2];
            module.exports.mainFeaturesOccupation3 = mainFeaturesOccupation[3];
            module.exports.mainFeaturesOccupation4 = mainFeaturesOccupation[4];

            $("#infoOccupation").text("złoczyńca");
            break;

        case "czarodziej":
            $("#occupationDecription").text("Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia.");

            mainFeaturesOccupation.splice(0, 1, 0);
            mainFeaturesOccupation.splice(1, 1, 0);
            mainFeaturesOccupation.splice(2, 1, 0);
            mainFeaturesOccupation.splice(3, 1, 5);
            mainFeaturesOccupation.splice(4, 1, 5);
            module.exports.mainFeaturesOccupation0 = mainFeaturesOccupation[0];
            module.exports.mainFeaturesOccupation1 = mainFeaturesOccupation[1];
            module.exports.mainFeaturesOccupation2 = mainFeaturesOccupation[2];
            module.exports.mainFeaturesOccupation3 = mainFeaturesOccupation[3];
            module.exports.mainFeaturesOccupation4 = mainFeaturesOccupation[4];

            $("#infoOccupation").text("czarodziej");
            break;
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//random force points and description
module.exports.forcePoints = function () {
  var randomForcePoints = Math.round(Math.random() * 50);
  $("#forcePoints").text(randomForcePoints);
  module.exports.forcePoint = randomForcePoints;
};

module.exports.forceTooltip = function () {
  $("#force").on("click", function () {
    $("#featuresDescription").text("SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.");
  });
};

//random strenght points and description
module.exports.strenghtPoints = function () {
  var randomStrenghtPoints = Math.round(Math.random() * 50);
  $("#strenghtPoints").text(randomStrenghtPoints);
  module.exports.strenghtPoint = randomStrenghtPoints;
};

module.exports.strenghtTooltip = function () {
  $("#strenght").on("click", function () {
    $("#featuresDescription").text("WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby  lub trucizny. Ważna dla wojowników.");
  });
};

//random skill points and description
module.exports.skillPoints = function () {
  var randomSkillPoints = Math.round(Math.random() * 50);
  $("#skillPoints").text(randomSkillPoints);
  module.exports.skillPoint = randomSkillPoints;
};

module.exports.skillTooltip = function () {
  $("#skill").on("click", function () {
    $("#featuresDescription").text("ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.");
  });
};

//random intellectuals points and description
module.exports.intellectualsPoints = function () {
  var randomIntellectualsPoints = Math.round(Math.random() * 50);
  $("#intellectualsPoints").text(randomIntellectualsPoints);
  module.exports.intellectualsPoint = randomIntellectualsPoints;
};

module.exports.intellectualsTooltip = function () {
  $("#intellectuals").on("click", function () {
    $("#featuresDescription").text("INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd.");
  });
};

//random charisma points and description
module.exports.charismaPoints = function () {
  var randomCharismaPoints = Math.round(Math.random() * 50);
  $("#charismaPoints").text(randomCharismaPoints);
  module.exports.charismaPoint = randomCharismaPoints;
};

module.exports.charismaTooltip = function () {
  $("#charisma").on("click", function () {
    $("#featuresDescription").text("CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów.");
  });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//fourth slide choose features part 2
//sex

// mainFeaturesPart2  = [sex, skin, hairColor, eyesColor, weight, height, skóra]

var mainFeaturesPart2 = [];

module.exports.sexCheck = function () {
  var inputSexChecked = $('input:radio[name=sex]:checked').val();

  switch (inputSexChecked) {
    case "kobieta":
      $("#featPart2Description").text("Kobieta - żeńska wersja, każdej rasy.");
      mainFeaturesPart2.splice(0, 1, "kobieta");
      module.exports.sex = mainFeaturesPart2[0];
      break;

    case "mężczyzna":
      $("#featPart2Description").text("Mężczyzna - męska wersja, każdej rasy.");
      mainFeaturesPart2.splice(0, 1, "mężczyzna");
      module.exports.sex = mainFeaturesPart2[0];
      break;

    case "inna":
      $("#featPart2Description").text("Inna - Bogowie nudzili się i wymyślili krzyżówkę chłopa z babą.");
      mainFeaturesPart2.splice(0, 1, "inna");
      module.exports.sex = mainFeaturesPart2[0];
      break;
  }
};

//hair color
module.exports.hairColorCheck = function () {
  var inputHairColorChecked = $('input:radio[name=hairColor]:checked').val();

  switch (inputHairColorChecked) {
    case "blond":
      $("#featPart2Description").text("Jasne włosy");
      mainFeaturesPart2.splice(1, 1, "blond");
      module.exports.hair = mainFeaturesPart2[1];
      break;

    case "rude":
      $("#featPart2Description").text("Rude jak rdza.");
      mainFeaturesPart2.splice(1, 1, "rude");
      module.exports.hair = mainFeaturesPart2[1];
      break;

    case "czarne":
      $("#featPart2Description").text("Czarniejsze niż smoła");
      mainFeaturesPart2.splice(1, 1, "czarne");
      module.exports.hair = mainFeaturesPart2[1];
      break;

    case "farbowane":
      $("#featPart2Description").text("Takie fikuśne, różno kolorowe");
      mainFeaturesPart2.splice(1, 1, "farbowane");
      module.exports.hair = mainFeaturesPart2[1];
      break;
  }
};

//eyes color
module.exports.eyesColorCheck = function () {
  var inputEyesColorChecked = $('input:radio[name=eyesColor]:checked').val();

  switch (inputEyesColorChecked) {
    case "piwne":
      $("#featPart2Description").text("Piwne.");
      mainFeaturesPart2.splice(2, 1, "piwne");
      module.exports.eyes = mainFeaturesPart2[2];
      break;

    case "szare":
      $("#featPart2Description").text("Szare.");
      mainFeaturesPart2.splice(2, 1, "szare");
      module.exports.eyes = mainFeaturesPart2[2];
      break;

    case "brązowe":
      $("#featPart2Description").text("Brązowe");
      mainFeaturesPart2.splice(2, 1, "brązowe");
      module.exports.eyes = mainFeaturesPart2[2];
      break;

    case "niebieskie":
      $("#featPart2Description").text("niebieskie");
      mainFeaturesPart2.splice(2, 1, "niebieskie");
      module.exports.eyes = mainFeaturesPart2[2];
      break;
  }
};

//weight
module.exports.weightCheck = function () {
  var inputWeightChecked = $('input:radio[name=weight]:checked').val();

  switch (inputWeightChecked) {
    case "niedowaga":
      $("#featPart2Description").text("niedowaga");
      mainFeaturesPart2.splice(3, 1, "niedowaga");
      module.exports.weight = mainFeaturesPart2[3];
      break;

    case "normalna":
      $("#featPart2Description").text("normalna");
      mainFeaturesPart2.splice(3, 1, "normalna");
      module.exports.weight = mainFeaturesPart2[3];
      break;

    case "nadwaga":
      $("#featPart2Description").text("nadwaga");
      mainFeaturesPart2.splice(3, 1, "nadwaga");
      module.exports.weight = mainFeaturesPart2[3];
      break;
  }
};

//height
module.exports.heightCheck = function () {
  var inputHeightChecked = $('input:radio[name=height]:checked').val();

  switch (inputHeightChecked) {
    case "niski":
      $("#featPart2Description").text("niski");
      mainFeaturesPart2.splice(4, 1, "niski");
      module.exports.height = mainFeaturesPart2[4];
      break;

    case "średni":
      $("#featPart2Description").text("średni");
      mainFeaturesPart2.splice(4, 1, "średni");
      module.exports.height = mainFeaturesPart2[4];
      break;

    case "wysoki":
      $("#featPart2Description").text("wysoki");
      mainFeaturesPart2.splice(4, 1, "wysoki");
      module.exports.height = mainFeaturesPart2[4];
      break;
  }
};

//skóra
module.exports.skinCheck = function () {
  var inputSkinChecked = $('input:radio[name=skin]:checked').val();

  switch (inputSkinChecked) {
    case "biała":
      $("#featPart2Description").text("biała");
      mainFeaturesPart2.splice(5, 1, "biała");
      module.exports.skin = mainFeaturesPart2[5];
      break;

    case "brązowa":
      $("#featPart2Description").text("brązowa");
      mainFeaturesPart2.splice(5, 1, "brązowa");
      module.exports.skin = mainFeaturesPart2[5];
      break;

    case "czarna":
      $("#featPart2Description").text("czarna");
      mainFeaturesPart2.splice(5, 1, "czarna");
      module.exports.skin = mainFeaturesPart2[5];
      break;

    case "czerwona":
      $("#featPart2Description").text("czerwona");
      mainFeaturesPart2.splice(5, 1, "czerwona");
      module.exports.skin = mainFeaturesPart2[5];
      break;

    case "żółta":
      $("#featPart2Description").text("żółta");
      mainFeaturesPart2.splice(5, 1, "żółta");
      module.exports.skin = mainFeaturesPart2[5];
      break;

    case "zielona":
      $("#featPart2Description").text("zielona");
      mainFeaturesPart2.splice(5, 1, "zielona");
      module.exports.skin = mainFeaturesPart2[5];
      break;

    case "brunatna":
      $("#featPart2Description").text("brunatna");
      mainFeaturesPart2.splice(5, 1, "brunatna");
      module.exports.skin = mainFeaturesPart2[5];
      break;

    case "błękitna":
      $("#featPart2Description").text("błękitna");
      mainFeaturesPart2.splice(5, 1, "błękitna");
      module.exports.skin = mainFeaturesPart2[5];
      break;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//choose equipment
module.exports.equipment = function () {
  var equipmentArray = [];

  $.each($("input[name='item']:checked"), function () {
    equipmentArray.push($(this).val());

    if (equipmentArray.length > 5) {
      $("input[name='item']").attr("checked", false).prop("disabled", true);
      $("input[name='item']:checked").attr("checked", true).prop("disabled", false);
      $('#alertEquipment').css("color", "red").text("Nie wybrać więcej niż 5 przedmiotów.");
      equipmentArray.pop();
    } else if (equipmentArray.length < 5) {
      $("input[name='item']").prop("disabled", false);
      $('#alertEquipment').text("");
    }
  });

  $("#equipmentDescription").text("sprzęt: " + equipmentArray.join(", "));

  module.exports.equipArray = equipmentArray;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.skill = function () {
  var skillArray = [];

  $.each($("input[name='skill']:checked"), function () {

    function skillCheck(skillToCheck) {
      if (skillArray.indexOf(skillToCheck) !== -1) {
        $('#alertSkill').css("color", "red").text("Jakąś umiejętność wybrałeś dwukrotnie. Sprawdź swoje wybory.");
      } else {
        skillArray.push(skillToCheck);
      }
    }

    function skillArrayCheck(array) {
      if (array.length > 3) {
        $("input[name='skill']").attr("checked", false).prop("disabled", true);
        $("input[name='skill']:checked").attr("checked", true).prop("disabled", false);
        $('#alertSkill').css("color", "red").text("Nie wybrać więcej niż 3 umiejętności.");
        array.pop();
      } else if (array.length < 3) {
        $("input[name='skill']").prop("disabled", false);
        $('#alertSkill').text("");
      }
    }

    skillCheck($(this).val());
    skillArrayCheck(skillArray);
  });

  $("#skillDescription").text("umiejętności: " + skillArray.join(", "));

  module.exports.skillArray = skillArray;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.firstP = function () {
  //pierwszy tekst w grze - początek
  function firstText() {
    var text = "<div id='main'><p id='text'>Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?<p><div id='roomList'><button id='lookingAround'>rozejrzyj się</button><button id='wardrobe'>zbadaj szafę</button><button id='chest'>zbadaj szkrzynię</button><button id='takePackage'>weź paczkę</button><button id='leave'>wyjdź z pomieszczenia</button></div></div>";

    var gameDescription = document.querySelector("#gameDescription");
    gameDescription.innerHTML = text;

    $("#leave").prop("disabled", true);
  }
  firstText();
};

//opis pokoju
module.exports.roomText = "Pokój jak pokój. Stół, łóżko, szafa, skrzynia.";

//opis szafy
module.exports.wardrobeText = "Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę, w której wisi płaszcz.";

//opis skrzyni
module.exports.chestText = "Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. W śodku znajduje się 12 sztuk złotych monet.";

//zabieranie paczki
module.exports.takePackage = function () {
  main.append(" Paczka została zabrana.");
  $(this).remove();
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.secondP = function () {

  //drugi teks w grze - wyjście z pomieszczenia
  function secondText() {
    var text = "<div id='main'><p id='text'>Stoisz przed domem. Aby udać się do wyznaczonego celu, najlepiej zabrać się z jakąś karawaną. Idziesz w kierunku bramy miasta. Przy bramie znajduje się targ. To dobry czas i miejsce, aby uzupełnić zapasy na dalszą podróż. </p><div id='street'><button id='lookingAround'>rozejrzyj się</button><button id='marketBtn'>targ</button></div><div>";

    var gameDescription = document.querySelector("#gameDescription");
    gameDescription.innerHTML = text;
  }
  secondText();
};

module.exports.streetText = "Typowa ulica dzielnicy Najemników, miasta Erharuf. Częściowo brukowana. Pobliskie budynki są niskie i drewniane, maksymalnie jednopiętrowe. Nic specjalnego.";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.thirdP = function () {
  function marketText() {
    var text = "<div id='main'><p id='text'>Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy.</p><div id='buySellItems'><button id='lookingAround'>rozejrzyj się</button><button id='buy'>kupuj</button><button id='sell'>sprzedaj</button><button id='caravan'>karawana</button></div></div>";

    var gameDescription = document.querySelector("#gameDescription");
    gameDescription.innerHTML = text;
  }
  marketText();
};

module.exports.marketText = " Niewielki targ, na którym okoliczni mieszczkańcy mogą dokonywać swoich zakupów.";

module.exports.buysItems = function () {
  function buyItems() {
    var itemsBuy = "<div id='buys'><button id='tent'>namiot - 5szt. zł.</button><button id='bag'>torba - 1szt. zł</button><button id='blanket'>derka - 1szt. zł</button><button id='lamp'>lampa - 1szt. zł</button><button id='rope'>lina - 1szt. zł</button><button id='food'>racja żyw. - 1szt. zł</button><button id='dagger'>sztylet - 8szt. zł</button><button id='woodenStick'>pałka drewniana - 4szt. zł</button><button id='buckler'>puklerz - 12szt. zł</button></ul></div>";

    var buy = document.querySelector("#dialogPanelDescription");
    buy.innerHTML = itemsBuy;
  }

  buyItems();
};

module.exports.noGold = function () {
  var infoGold = "<p id='redColor'>Nie masz tyle złota</p>";
  var dialog = document.querySelector("#dialogPanelDescription2");
  dialog.innerHTML = infoGold;
  $("#redColor").addClass("redText");
};

module.exports.sellStart = function () {
  $("#dialogPanelDescription").text("Możesz sprzedać: ");
  $("#dialogPanelDescription2").text("");

  var sellItemsBtns = document.createElement("div");
  sellItemsBtns.id = "sellItemsBtns";
  $("#dialogPanelDescription").append(sellItemsBtns);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.fourthP = function () {
  function caravanPlace() {
    var caravanPlaceText = "<div id='main'><p id='text'>W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski?</p><div id='caravanPlace'><button id='lookingAround'>rozejrzyj się</button><button id='ask'>zapytaj</button></div></div>";

    var gameDescription = document.querySelector("#gameDescription");
    gameDescription.innerHTML = caravanPlaceText;
  }
  caravanPlace();
};

module.exports.caravanText = function () {
  var caravanText = document.createElement("p");
  caravanText.id = "caravanText";
  caravanText.innerText = "Za sobą masz bramę do miasta oraz wysokie mury miasta Erharuf. Przed sobą widzisz wielki plac, na którym karawany mogą przygotować się do podróży. W dali widniej ciemna linia  prastarego lasu.";

  main.append(caravanText);
  $("#caravanText").addClass("marginIndent");
};

module.exports.asking = function () {
  var askingP = document.createElement("p");
  askingP.id = "askingP";
  askingP.innerText = "Podchodzisz bliżej. Widzisz postać krasnoluda, który wydziera się w niebo głosy i pogania wszystkich wokół. Gdy jesteś już blisko, pytasz: 'Mości krasnoludzie, czy ta karawana jedzie do wioski na pograniczu?' 'Że co? Aaaa... Tak! Jedziemy dalej, ale będziemy przez nią przejeżdżać. Jak chcesz się zabrać to musisz się pospiesz z wsiadaniem. Na ostatnim wozie jest jeszcze trochę miejsca.'- odpowiedział i wrócił do swoich obowiązków.";

  main.append(askingP);
  $("#askingP").addClass("marginIndent");
};

module.exports.removeBtnAsk = function () {
  var caravanPlace = document.querySelector("#caravanPlace");
  var ask = document.querySelector("#ask");
  caravanPlace.removeChild(ask);
};

module.exports.creatingBtnAccept2 = function () {
  var accept2 = document.createElement("button");
  accept2.id = "accept";
  accept2.innerText = "zgódź się";
  caravanPlace.appendChild(accept2);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.fifthP = function () {
  function startJourney() {
    var startJourney = "<div id='main'><p id='text'>Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...</p><div id='journeyStart'><button id='lookingAround'>rozejrzyj się</button><button id='startJourney'>dalej</button></div></div>";

    var gameDescription = document.querySelector("#gameDescription");
    gameDescription.innerHTML = startJourney;
  }
  startJourney();
};

module.exports.wagonLooking = function () {
  var wagonLooking = document.createElement("p");
  wagonLooking.id = "wagonLooking";
  wagonLooking.innerText = "Widzisz kilka paczek na wozie, szczelnie opakowane, ciągle ziewającego woźnicę, orka.";

  main.append(wagonLooking);
  $("#wagonLooking").addClass("marginIndent");
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.sixthP = function () {
  function voyage() {
    var voyage = "<div id='main'><p id='text'>Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!. Ciebie atakuje jeden bandyta z wielkim mieczem.</p><div id='firstFight'><button id='fight'>Przygotuj się do walki</button><button id='further'>dalej</button></div></div>";

    var gameDescription = document.querySelector("#gameDescription");
    gameDescription.innerHTML = voyage;
  }
  voyage();
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.seventhP = function () {
  function afterBattle() {
    var afterBattle = "<div id='main'><p id='text'>To była ciężka bitwa. Kilkoro uczestników karawany poległo. Pochowaliście ich w przydrożnej, zbiorowej mogile, razem z pokonanymi. Pozbieraliście porozrzucany ekwipunek i ruszyliście dalej.</p><div id='afterFight'><button id='village'>dalej</button></div></div>";

    var gameDescription = document.querySelector("#gameDescription");
    gameDescription.innerHTML = afterBattle;
  }
  afterBattle();
};

module.exports.addItems = "Do Twojego ekwipunku zostało dodane: ";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.eightP = function () {
  function village() {
    var village = "<div id='main'><p id='text'>Po trzech dniach, dotarliście już bez przeszkód do Przygranicznej wioski. Rozbiliście obozowisko, przy starym młynie. Zaciekawieni mieszkańcy wyszli ze swych chałup i obleźli karawanę.</p><div id='inVillage'><button id='lookingAround'>rozejrzyj się</button><button id='monk'>oddaj paczkę</button></div></div>";

    var gameDescription = document.querySelector("#gameDescription");
    gameDescription.innerHTML = village;
  }
  village();
};

module.exports.lookVillage = "Wioska jest dość duża, składa się z prawie 40 chałup. Otoczona jest wałem ziemnym, z wbitymi w niego, zaostrzonymi palikami. To typowe umocnienie w tym rejonie. Przy rzece stoi stary młyn. Wokół wioski, jak okiem sięgnąć rozciągają się pola. ";

module.exports.givePackage = "Odnalazłeś mnicha. Po wymianie uprzejmości i pozdrowień od współnych znajomych oddałeś mu paczkę. Teraz stoisz na środku wioski i świat stoi przed Tobą otworem... ale to już zupełnie inna historia :)";

/***/ })
/******/ ]);