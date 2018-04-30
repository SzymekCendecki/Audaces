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

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  console.log("NIEWIERNE PSY RULEZ!!!!");

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

  // hidden elements
  $("#title, #startOptionsGame, #hello, #chooseBtns").hide();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  console.log("NIEWIERNE PSY RULEZ!!!!");

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

  //new game button
  $(".btnNewGame").on("click", function () {
    $("#hello, #startOptionsGame, #descriptionMenu").fadeOut(750);

    var showChooseBtns = function showChooseBtns() {
      $("#chooseBtns").fadeIn(750);
    };
    setTimeout(showChooseBtns, 1000);
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  console.log("NIEWIERNE PSY RULEZ!!!!");

  //random Hero button and create Hero button
  $("#randomHero").on("mouseenter", function () {
    $("#chooseBtnsDescription").text("Losowanie postaci oraz automatyczne rozpoczęcie gry.").addClass("randomHeroDescription");
  });

  $("#randomHero").on("mouseleave", function () {
    $("#chooseBtnsDescription").text("").removeClass("randomHeroDescription");
  });
});

/***/ })
/******/ ]);