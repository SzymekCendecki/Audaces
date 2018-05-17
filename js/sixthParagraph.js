module.exports.sixthP  = function(){
  function voyage(){
     let voyage = "<div id='main'><p id='text'>Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!.</p><div id='firstFight'><button id='fight'>walka</button><button id='further'>dalej</button></div></div>";

     let gameDescription = document.querySelector("#gameDescription");
     gameDescription.innerHTML = voyage;
   }
   voyage();
 }
