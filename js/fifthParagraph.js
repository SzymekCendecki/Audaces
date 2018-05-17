module.exports.fifthP  = function(){
  function startJourney(){
     let startJourney = "<div id='main'><p id='text'>Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...</p><div id='journeyStart'><button id='lookingAround'>rozejrzyj się</button><button id='startJourney'>dalej</button></div></div>";

     let gameDescription = document.querySelector("#gameDescription");
     gameDescription.innerHTML = startJourney;
   }
   startJourney();
 }

 module.exports.wagonLooking = function(){
   let wagonLooking = document.createElement("p");
   wagonLooking.id = "wagonLooking";
   wagonLooking.innerText = "Widzisz kilka paczek na wozie, szczelnie opakowane, ciągle ziewającego woźnicę, orka.";

   main.append(wagonLooking);
   $("#wagonLooking").addClass("marginIndent");
 }
