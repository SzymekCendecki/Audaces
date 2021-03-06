
module.exports.firstP = function() {
//pierwszy tekst w grze - początek
function firstText(){
  let text = "<div id='main'><p id='text'>Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?<p><div id='roomList'><button id='lookingAround'>rozejrzyj się</button><button id='wardrobe'>zbadaj szafę</button><button id='chest'>zbadaj szkrzynię</button><button id='takePackage'>weź paczkę</button><button id='leave'>wyjdź z pomieszczenia</button></div></div>";

  let gameDescription = document.querySelector("#gameDescription");
  gameDescription.innerHTML = text;

  $("#leave").prop("disabled", true);
}
firstText();
}

//opis pokoju
module.exports.roomText = "Pokój jak pokój. Stół, łóżko, szafa, skrzynia.";

//opis szafy
module.exports.wardrobeText = "Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę, w której wisi płaszcz.";

//opis skrzyni
module.exports.chestText = "Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. W śodku znajduje się 12 sztuk złotych monet.";

//zabieranie paczki
module.exports.takePackage = function(){
  main.append(" Paczka została zabrana.");
  $(this).remove();
}
