module.exports.eightP  = function(){
  function village(){
     let village = "<div id='main'><p id='text'>Po trzech dniach, dotarliście już bez przeszkód do Przygranicznej wioski. Rozbiliście obozowisko, przy starym młynie. Zaciekawieni mieszkańcy wyszli ze swych chałup i obleźli karawanę.</p><div id='inVillage'><button id='lookingAround'>rozejrzyj się</button><button id='monk'>oddaj paczkę</button></div></div>";

     let gameDescription = document.querySelector("#gameDescription");
     gameDescription.innerHTML = village;
   }
   village();
 }

 module.exports.lookVillage = "Wioska jest dość duża, składa się z prawie 40 chałup. Otoczona jest wałem ziemnym, z wbitymi w niego, zaostrzonymi palikami. To typowe umocnienie w tym rejonie. Przy rzece stoi stary młyn. Wokół wioski, jak okiem sięgnąć rozciągają się pola. ";
 
 
 module.exports.givePackage = "Odnalazłeś mnicha. Po wymianie uprzejmości i pozdrowień od współnych znajomych oddałeś mu paczkę. Teraz stoisz na środku wioski i świat stoi przed Tobą otworem... ale to już zupełnie inna historia :)";