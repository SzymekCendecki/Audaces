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


document.addEventListener("DOMContentLoaded", function () {
    console.log("NIEWIERNE PSY RULEZ!!!!");

    // hidden elements
    $("#title, #startOptionsGame, #hello, .slider, #slider").hide();

    //intro
    //inscription
    var hideInscription = function hideInscription() {
        $("#inscriptions").fadeOut(2000);
    };
    setTimeout(hideInscription, 5000);

    //title
    var showTitle = function showTitle() {
        $("#title").fadeIn(2000);
    };
    setTimeout(showTitle, 7500);

    var hideTitle = function hideTitle() {
        $("#title").fadeOut(2000);
    };
    setTimeout(hideTitle, 12000);

    //Start of game - option choice
    var startOptionsGame = function startOptionsGame() {
        $("#startOptionsGame, #hello").fadeIn(2000);
        $("body").css("backgroundColor", "beige");
    };
    setTimeout(startOptionsGame, 14500);

    //info button
    $(".btnInfo").on("click", function () {
        $("#descriptionMenu").text("Ta wersja gry została stworzona jako projekt końcowy kursu front'endowego, a także jako modernizacja tej samej gry sprzed kursu. Gra ma także na celu przetestowanie mechaniki 'papierowej' wersji systemu gry Audaces. Projekt będzie rozwijalny także po skończeniu kursu. Wszystkie wersje tej gry zostały wydane przez niezależne studio Niewierne Psy. Gra powstała dzięki użytym technologiom: HTML5, SASS(css), jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com/.").addClass("descriptionMenu");
    });

    //licence button
    $(".btnLicence").on("click", function () {
        $("#descriptionMenu").text("UMOWA LICENCYJNA UŻYTKOWNIKA APLIKACJI AUDACES (oraz wszystkich jego wesji). POSIADAJĄC APLIKACJĘ AKCEPTUJESZ PONIŻSZE WARUNKI LICENCJI. Autor informuje, iż zawarte treści w aplikacji mogą być niestosowne dla osób niepełnoletnich, o innym światopoglądzie lub wyznawanej religii. Użytkownik używa aplikację na własne ryzyko. Twórca tej aplikacji infourmuje, iż aplikacja ta została stowrzona w celach hobyystycznych oraz w celu nauki programowania. Aplikacja ta może zawierać błędy, które niekoniecznie muszą być poprawione. Autor nie udziela żadnych gwarancji, obietnic oraz zapewnień na tą aplikację (i jej wersje) i nie odpowiada za błędne działanie lub użytkowanie programu. Autor aplikacji nie bierze na siebie żadnych reklamacji w sprawie wadliwego działania programu oraz nie poczuwa się do zadość uczynienia za spowodowane szkody. Prawa autorskie należą do Szymona Cendeckiego. Audace jest rozprowadzany na zasadzie FREEWARE czyli: użytkownik dostaje aplikację za darmo, nie mozę w żaden sposób zmieniać aplikacji, może wykorzystywać aplikację na własny użytek, zabrnia się wykorzystywać aplikację w celach komercyjnych, zabrania się ujawniania kodu źródłowego.").addClass("descriptionMenu");
    });

    //tutorial button
    $(".btnTutorial").on("click", function () {
        $("#descriptionMenu").text("Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial pojawi się pod nimi odpowiednia informacj. Po wciśnięciu przycisku Nowa gra, użytkownik rozpocznie grę. Po rozpoczęciu gry, użytkownik będzie mógł wylosować postać lub ją stworzyć. Gdy będzie chciał ją stworzyć samemu, przejdzie do kreatora, który będzie podpowiadał możliwości. Po stworzeniu postaci, użytkownik przejdze do gry. Ekran będzie podzielony zasadniczo na dwie części. Górna, miejsza, będzie zawierała przyciski, dzięki którym będzie można mieć podgląd do charakterystyk swojego protagonisty, ekwipunku zadań do wykonania oraz pomocy. Dolna część to część, na której będzie się odgrywała cała historia gry. Na niej to gracz będzie mógł dokonywać interakcji.").addClass("descriptionMenu");
    });

    //Creator of hero
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

    //slider
    $(".btnNewGame").on("click", function () {
        $("#hello, #startOptionsGame, #descriptionMenu").fadeOut(750);
        $("#slider").delay(750).fadeIn(750);
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

    //first slide choose race
    $("#chooseRace input").on("click", function () {
        var inputRaceChecked = $('input:radio[name=race]:checked').val();

        var human = "Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg, kolor oczu: najczęściej piwne, szare, brązowe, kolor skóry: od białego do czarnego (wraz z odcieniami), żółta, czerwona, kolor włosów: każdy, wiek: do 100 lat, profesja: każda.";

        var elv = "Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 1500 lat, profesja: każda, z predyspozycjami do bycia czarodziejem.";

        var dwarf = "Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 500 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.";

        var orc = "Orki to niezwykle wojownicza rasa. Są w głównej mierze koczownikami, z kastowym podziałem społeczeństwa. Są niechętni każdemu rodzajowi magii, za wyjątkiem magii szamańskiej, do której odnoszą się z nieufnością. Podstawowe cechy: wzrost: 180 - 220cm, waga: 100 - 150kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 80 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.";

        switch (inputRaceChecked) {
            case "human":
                $("#raceDecription").text(human);
                $("#infoRace").text("człowiek");
                break;

            case "elv":
                $("#raceDecription").text(elv);
                $("#infoRace").text("elf");
                break;

            case "dwarf":
                $("#raceDecription").text(dwarf);
                $("#infoRace").text("krasnolud");
                break;

            case "orc":
                $("#raceDecription").text(orc);
                $("#infoRace").text("ork");
                break;
        }
    });

    //second slide choose occupation
    $("#chooseOccupation input").on("click", function () {
        var inputOccupationChecked = $('input:radio[name=occupation]:checked').val();

        var warrior = "Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.";

        var bandit = "Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.";

        var wizard = "Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia.";

        switch (inputOccupationChecked) {
            case "warrior":
                $("#occupationDecription").text(warrior);
                $("#infoOccupation").text("wojownik");
                break;

            case "bandit":
                $("#occupationDecription").text(bandit);
                $("#infoOccupation").text("złoczyńca");
                break;

            case "wizard":
                $("#occupationDecription").text(wizard);
                $("#infoOccupation").text("czarodziej");
                break;
        }
    });

    //third slide choose features 
    //force
    $("#force").on("click", function () {
        var randomForcePoints = Math.round(Math.random() * 50);
        $("#forcePoints").text(randomForcePoints);
        $("#infoForce").text(randomForcePoints);
    });

    $("#force").on("mouseenter", function () {
        $("#featuresDescription").text("SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.");
    });
    $("#force").on("mouseleave", function () {
        $("#featuresDescription").text("");
    });

    //strenght
    $("#strenght").on("click", function () {
        var randomStrenghtPoints = Math.round(Math.random() * 50);
        $("#strenghtPoints").text(randomStrenghtPoints);
        $("#infoStrenght").text(randomStrenghtPoints);
    });
    $("#strenght").on("mouseenter", function () {
        $("#featuresDescription").text("WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby  lub trucizny. Ważna dla wojowników.");
    });
    $("#strenght").on("mouseleave", function () {
        $("#featuresDescription").text("");
    });

    //skill
    $("#skill").on("click", function () {
        var randomSkillPoints = Math.round(Math.random() * 50);
        $("#skillPoints").text(randomSkillPoints);
        $("#infoSkill").text(randomSkillPoints);
    });
    $("#skill").on("mouseenter", function () {
        $("#featuresDescription").text("ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.");
    });
    $("#skill").on("mouseleave", function () {
        $("#featuresDescription").text("");
    });

    //intellectuals
    $("#intellectuals").on("click", function () {
        var randomIntellectualsPoints = Math.round(Math.random() * 50);
        $("#intellectualsPoints").text(randomIntellectualsPoints);
        $("#infoIntellectuals").text(randomIntelectuallsPoints);
    });
    $("#intellectuals").on("mouseenter", function () {
        $("#featuresDescription").text("INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd.");
    });
    $("#intellectuals").on("mouseleave", function () {
        $("#featuresDescription").text("");
    });

    //charisma
    $("#charisma").on("click", function () {
        var randomCharismaPoints = Math.round(Math.random() * 50);
        $("#charismaPoints").text(randomCharismaPoints);
        $("#infoCharisma").text(randomCharismaPoints);
    });
    $("#charisma").on("mouseenter", function () {
        $("#featuresDescription").text("CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów.");
    });
    $("#charisma").on("mouseleave", function () {
        $("#featuresDescription").text("");
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

/***/ })
/******/ ]);