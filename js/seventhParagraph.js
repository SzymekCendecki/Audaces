module.exports.seventhP  = function(){
  function afterBattle(){
     let afterBattle = "<div id='main'><p id='text'>To była ciężka bitwa. Kilkoro uczestników karawany poległo. Pochowaliście ich w przydrożnej, zbiorowej mogile, razem z pokonanymi. Pozbieraliście porozrzucany ekwipunek i ruszyliście dalej.</p><div id='afterFight'><button id='village'>dalej</button></div></div>";

     let gameDescription = document.querySelector("#gameDescription");
     gameDescription.innerHTML = afterBattle;
   }
   afterBattle();
 }


module.exports.addItems = "Do Twojego ekwipunku zostało dodane: ";
