let intro = require("./intro/intro.js");

document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//funkcja tworzenia nowego elementu
function createNewElementAppend(nameElement, idName, text, whereAppend){
		let newElement = document.createElement(nameElement);
		newElement.id = idName;
		newElement.innerText = text;
		whereAppend.append(newElement);
	}


//utworzenie głównego szkieletu gry
//utworzenie głównego kontenera - grid container
createNewElementAppend("div", "grid-container", "", $("body"));
$("#grid-container").addClass("grid-display");

//utworzenie nagłówka - header
createNewElementAppend("div", "header", "", $("#grid-container"));
$("#header").addClass("col-12"); //nadanie szerokości nagłówka

//utworzenie nawigacji - menu
createNewElementAppend("div", "nav", "", $("#grid-container"));
$("#nav").addClass("col-2"); //nadanie szerokości navigacji
$("#nav").addClass("marginTop");

//utworzenie części głównej - mainPart
createNewElementAppend("div", "mainPart", "", $("#grid-container"));
$("#mainPart").addClass("col-7"); //nadanie szerokości navigacji
$("#mainPart").addClass("marginTop");

//utworzenie części alertowej - alerts
createNewElementAppend("div", "alerts", "", $("#grid-container"));
$("#alerts").addClass("col-2"); //nadanie szerokości części alertowej
$("#alerts").addClass("marginTop");

//utworzenie stopki - footer
createNewElementAppend("div", "footer", "", $("#grid-container"));
$("#footer").addClass("col-12"); //nadanie szerokości stopki
$("#footer").addClass("marginTop");


//utworzenie animacji paragrafu z nazwą studia
function animStudioTitle(){
	createNewElementAppend("h1", "studioTitle", intro.studioTitle, $("#mainPart"));
	createNewElementAppend("h5", "sentence", intro.sentence, $("#mainPart"));
	$("#studioTitle").fadeOut(6000);
	$("#sentence").fadeOut(6000);
}
setTimeout(animStudioTitle, 0);

//utworzenie animacji paragrafu z tytułem gry
function animGameTitle(){
	$("#studioTitle").remove();
	$("#sentence").remove();
	createNewElementAppend("h1", "gameTitle", intro.gameTitle, $("#mainPart"));
	createNewElementAppend("h1", "subGameTitle", intro.subGameTitle, $("#mainPart"));
	$("#gameTitle").addClass("animGameTitle");
	$("#subGameTitle").addClass("animGameTitle");
}
setTimeout(animGameTitle, 6500);

//usunięcie tytułu gry
function removeGameTitle(){
	$("#gameTitle").toggleClass("animGameTitleReverse");
	$("#subGameTitle").toggleClass("animGameTitleReverse");
}
setTimeout(removeGameTitle, 13000);

//usunięcie paragrafów z tytułem, podtytułem gry
function removeGameTitleP(){
	$("#gameTitle").remove();
	$("#subGameTitle").remove();
	$("body").addClass("beigeBackground");

	createNewElementAppend("div", "btnList", "", $("#nav"));
	createNewElementAppend("button", "info", "info", $("#btnList"));
	createNewElementAppend("button", "licence", "licencja", $("#btnList"));
	createNewElementAppend("button", "tutorial", "tutorial", $("#btnList"));
	createNewElementAppend("button", "game", "gra", $("#btnList"));

//dodanie do list przycisków (btnList) klasy podstawowej - wymusza sposó wyświetlania
$("#btnList").addClass("btnList");

//dodanie do przycisków w pierwszym menu klasy podstawowej dla przycisków
		$("#info, #licence, #tutorial, #game").addClass("mainStyleBtn");
		$("#game").addClass("whiteGreenBackground");

		//utworzenie zdarzenia dla przycisku gry
		$("#game").on("click", function(){
			$("#info, #licence, #tutorial, #game").remove();
		});
}
setTimeout(removeGameTitleP, 20000);

});
