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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var intro = __webpack_require__(2);
var mainMenu = __webpack_require__(3);
var arrays = __webpack_require__(4);
var heroCreator = __webpack_require__(5);
var firstSlide = __webpack_require__(6);
var secondSlide = __webpack_require__(7);
var thirdSlide = __webpack_require__(8);
var fourthSlide = __webpack_require__(9);

document.addEventListener("DOMContentLoaded", function () {
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
            moveLeft();
        });
        $('button.control_next').click(function () {
            moveRight();
        });
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
    $(".sex input").on("click", function () {
        fourthSlide.sexCheck();
    });
    $(".hairColor input").on("click", function () {
        fourthSlide.hairColorCheck();
    });
    $(".eyesColor input").on("click", function () {
        fourthSlide.eyesColorCheck();
    });
    $(".weight input").on("click", function () {
        fourthSlide.weightCheck();
    });
    $(".height input").on("click", function () {
        fourthSlide.heightCheck();
    });

    //fifth slide choose equipment
    $("#chooseEquipment input").on("click", function () {
        var equipmentArray = [];
        $.each($("input[name='weapon']:checked"), function () {
            equipmentArray.push($(this).val());
        });

        console.log("sprzęt: " + equipmentArray.join(", "));
    });

    var bonusesArray = [-5, -3, -2, 4, 5, 10];
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

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
var equipment = ["hubka i krzesiwo", "mieszek", "pas skórzany", "igły i nici", "tuba na pergaminy", "pęk piór do pisania", "pergaminy 5szt.", "zwykłe ubranie", "płaszcz", "fikuśny kapelusz", "łapcie z łyka", "kosz wiklinowy", "plecak", "torba podróżna", "sakwa", "koc", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m"];

//skills 10
var skillsWarrior = ["sztuka przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

var skillsBandit = ["przygotowanie trucizn", "wspinaczka", "aktorstwo", "akrobatyka", "tworzenie pułpek", "skradanie się", "kradzież kieszonkowa", "uniki", "drewniana pałka", "sztylet", "krótki miecz", "blefowanie"];

var skillWizard = ["pisanie i czytanie", "przywołanie/odpędzenie demona", "wróżbiarstwo", "leczenie ran", "rzucanie czarów", "tworzenie eliksirów", "tworzenie mag. przedmiotów", "tworzenie maści", "astrologia", "tworzenie mag. runów", "zielarstwo"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//hero creator
module.exports.hideElements = function hideElements() {
    $("#hello, #startOptionsGame, #descriptionMenu").fadeOut(750);
}; //hide hideElements

module.exports.showCreator = function showCreator() {
    $("#slider").delay(750).fadeIn(750);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//race description
module.exports.chooseRace = function () {
  var inputRaceChecked = $('input:radio[name=race]:checked').val();

  switch (inputRaceChecked) {
    case "human":
      $("#raceDecription").text("Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg, kolor oczu: najczęściej piwne, szare, brązowe, kolor skóry: od białego do czarnego (wraz z odcieniami), żółta, czerwona, kolor włosów: każdy, wiek: do 100 lat, profesja: każda.");

      $("#infoRace").text("człowiek");
      break;

    case "elv":
      $("#raceDecription").text("Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 1500 lat, profesja: każda, z predyspozycjami do bycia czarodziejem.");

      $("#infoRace").text("elf");

      break;

    case "dwarf":
      $("#raceDecription").text("Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 500 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.");

      $("#infoRace").text("krasnolud");
      break;

    case "orc":
      $("#raceDecription").text("Orki to niezwykle wojownicza rasa. Są w głównej mierze koczownikami, z kastowym podziałem społeczeństwa. Są niechętni każdemu rodzajowi magii, za wyjątkiem magii szamańskiej, do której odnoszą się z nieufnością. Podstawowe cechy: wzrost: 180 - 220cm, waga: 100 - 150kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 80 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.");

      $("#infoRace").text("ork");
      break;
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//choose occupations
module.exports.chooseOccupation = function () {
  var inputOccupationChecked = $('input:radio[name=occupation]:checked').val();

  switch (inputOccupationChecked) {
    case "warrior":
      $("#occupationDecription").text("Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.");

      $("#infoOccupation").text("wojownik");
      break;

    case "bandit":
      $("#occupationDecription").text("Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.");

      $("#infoOccupation").text("złoczyńca");
      break;

    case "wizard":
      $("#occupationDecription").text("Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia.");

      $("#infoOccupation").text("czarodziej");
      break;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//random force points and tooltip for force
module.exports.forcePoints = function () {
  var randomForcePoints = Math.round(Math.random() * 50);
  $("#forcePoints").text(randomForcePoints);
  $("#infoForce").text(randomForcePoints);
};

module.exports.forceTooltip = function () {
  $("#force").on("mouseenter", function () {
    $("#featuresDescription").text("SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.");
  });

  $("#force").on("mouseleave", function () {
    $("#featuresDescription").text("");
  });
};

//random strenght points and tooltip for strenght
module.exports.strenghtPoints = function () {
  var randomStrenghtPoints = Math.round(Math.random() * 50);
  $("#strenghtPoints").text(randomStrenghtPoints);
  $("#infoStrenght").text(randomStrenghtPoints);
};

module.exports.strenghtTooltip = function () {
  $("#strenght").on("mouseenter", function () {
    $("#featuresDescription").text("WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby  lub trucizny. Ważna dla wojowników.");
  });

  $("#strenght").on("mouseleave", function () {
    $("#featuresDescription").text("");
  });
};

//random skill points and tooltip for skill
module.exports.skillPoints = function () {
  var randomSkillPoints = Math.round(Math.random() * 50);
  $("#skillPoints").text(randomSkillPoints);
  $("#infoSkill").text(randomSkillPoints);
};

module.exports.skillTooltip = function () {
  $("#skill").on("mouseenter", function () {
    $("#featuresDescription").text("ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.");
  });

  $("#skill").on("mouseleave", function () {
    $("#featuresDescription").text("");
  });
};

//random intellectuals points and tooltip for intellectuals
module.exports.intellectualsPoints = function () {
  var randomIntellectualsPoints = Math.round(Math.random() * 50);
  $("#intellectualsPoints").text(randomIntellectualsPoints);
  $("#infoIntellectuals").text(randomIntellectualsPoints);
};

module.exports.intellectualsTooltip = function () {
  $("#intellectuals").on("mouseenter", function () {
    $("#featuresDescription").text("INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd.");
  });

  $("#intellectuals").on("mouseleave", function () {
    $("#featuresDescription").text("");
  });
};

//random charisma points and tooltip for charisma
module.exports.charismaPoints = function () {
  var randomCharismaPoints = Math.round(Math.random() * 50);
  $("#charismaPoints").text(randomCharismaPoints);
  $("#infoCharisma").text(randomCharismaPoints);
};

module.exports.charismaTooltip = function () {
  $("#charisma").on("mouseenter", function () {
    $("#featuresDescription").text("CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów.");
  });

  $("#charisma").on("mouseleave", function () {
    $("#featuresDescription").text("");
  });
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//fourth slide choose features part 2
//sex
module.exports.sexCheck = function () {
  var inputSexChecked = $('input:radio[name=sex]:checked').val();

  switch (inputSexChecked) {
    case "female":
      $("#featPart2Description").text("Kobieta - żeńska wersja, każdej rasy.");
      $("#infoSex").text("kobieta");
      break;

    case "male":
      $("#featPart2Description").text("Mężczyzna - męska wersja, każdej rasy.");
      $("#infoSex").text("mężczyzna");
      break;

    case "other":
      $("#featPart2Description").text("Inna - Bogowie nudzili się i wymyślili krzyżówkę chłopa z babą.");
      $("#infoSex").text("mężczyzna");
      break;
  }
};

//hair color
module.exports.hairColorCheck = function () {
  var inputHairColorChecked = $('input:radio[name=hairColor]:checked').val();

  switch (inputHairColorChecked) {
    case "blond":
      $("#featPart2Description").text("Jasne włosy");
      $("#infoHairColor").text("Blond");
      break;

    case "rude":
      $("#featPart2Description").text("Rude jak rdza.");
      $("#infoHairColor").text("Rude");
      break;

    case "czarne":
      $("#featPart2Description").text("Czarniejsze niż smoła");
      $("#infoHairColor").text("czarne");
      break;

    case "farbowane":
      $("#featPart2Description").text("Takie fikuśne, różno kolorowe");
      $("#infoHairColor").text("farbowane");
      break;
  }
};

//eyes color
module.exports.eyesColorCheck = function () {
  var inputEyesColorChecked = $('input:radio[name=eyesColor]:checked').val();

  switch (inputEyesColorChecked) {
    case "piwne":
      $("#featPart2Description").text("Piwne.");
      $("#infoEyesColor").text("piwne");
      break;

    case "szare":
      $("#featPart2Description").text("Szare.");
      $("#infoEyesColor").text("szare");
      break;

    case "brązowe":
      $("#featPart2Description").text("Brązowe");
      $("#infoEyesColor").text("Brązowe");
      break;

    case "niebieskie":
      $("#featPart2Description").text("niebieskie");
      $("#infoEyesColor").text("niebieskie");
      break;
  }
};

//weight
module.exports.weightCheck = function () {
  var inputWeightChecked = $('input:radio[name=weight]:checked').val();

  switch (inputWeightChecked) {
    case "niedowaga":
      $("#featPart2Description").text("niedowaga");
      $("#infoWeight").text("niedowaga");
      break;

    case "normalna":
      $("#featPart2Description").text("normalna");
      $("#infoWeight").text("normalna");
      break;

    case "nadwaga":
      $("#featPart2Description").text("nadwaga");
      $("#infoWeight").text("nadwaga");
      break;
  }
};

//height
module.exports.heightCheck = function () {
  var inputHeightChecked = $('input:radio[name=height]:checked').val();

  switch (inputHeightChecked) {
    case "niski":
      $("#featPart2Description").text("niski");
      $("#infoHeight").text("niski");
      break;

    case "średni":
      $("#featPart2Description").text("średni");
      $("#infoHeight").text("średni");
      break;

    case "wysoki":
      $("#featPart2Description").text("wysoki");
      $("#infoHeight").text("wysoki");
      break;
  }
};

/***/ })
/******/ ]);