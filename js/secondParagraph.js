module.exports.secondP = function(){

  //drugi teks w grze - wyjście z pomieszczenia
  function secondText(){
    let text = "<div id='main'><p id='text'>Stoisz przed domem. Aby udać się do wyznaczonego celu, najlepiej zabrać się z jakąś karawaną. Idziesz w kierunku bramy miasta. Przy bramie znajduje się targ. To dobry czas i miejsce, aby uzupełnić zapasy na dalszą podróż. </p><div id='street'><button id='lookingAround'>rozejrzyj się</button><button id='marketBtn'>targ</button></div><div>";

  let gameDescription = document.querySelector("#gameDescription");
  gameDescription.innerHTML = text;
  }
  secondText();
}

module.exports.streetText = "Typowa ulica dzielnicy Najemników, miasta Erharuf. Częściowo brukowana. Pobliskie budynki są niskie i drewniane, maksymalnie jednopiętrowe. Nic specjalnego.";
