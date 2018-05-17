module.exports.fourthP  = function(){
  function caravanPlace(){
     let caravanPlaceText = "<div id='main'><p id='text'>W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski?</p><div id='caravanPlace'><button id='lookingAround'>rozejrzyj się</button><button id='ask'>zapytaj</button></div></div>";

     let gameDescription = document.querySelector("#gameDescription");
     gameDescription.innerHTML = caravanPlaceText;
   }
   caravanPlace();
 }


module.exports.caravanText = function(){
  let caravanText = document.createElement("p");
  caravanText.id = "caravanText";
  caravanText.innerText = "Za sobą masz bramę do miasta oraz wysokie mury miasta Erharuf. Przed sobą widzisz wielki plac, na którym karawany mogą przygotować się do podróży. W dali widniej ciemna linia  prastarego lasu.";

main.append(caravanText);
$("#caravanText").addClass("marginIndent");
}

module.exports.asking = function(){
  let askingP = document.createElement("p");
  askingP.id = "askingP";
  askingP.innerText = "Podchodzisz bliżej. Widzisz postać krasnoluda, który wydziera się w niebo głosy i pogania wszystkich wokół. Gdy jesteś już blisko, pytasz: 'Mości krasnoludzie, czy ta karawana jedzie do wioski na pograniczu?' 'Że co? Aaaa... Tak! Jedziemy dalej, ale będziemy przez nią przejeżdżać. Jak chcesz się zabrać to musisz się pospiesz z wsiadaniem. Na ostatnim wozie jest jeszcze trochę miejsca.'- odpowiedział i wrócił do swoich obowiązków.";

  main.append(askingP);
  $("#askingP").addClass("marginIndent");
}

module.exports.removeBtnAsk = function(){
  let caravanPlace = document.querySelector("#caravanPlace");
  let ask = document.querySelector("#ask");
  caravanPlace.removeChild(ask);
}

module.exports.creatingBtnAccept2 = function(){
  let accept2 = document.createElement("button");
  accept2.id = "accept";
  accept2.innerText = "zgódź się";
  caravanPlace.appendChild(accept2);
}
