module.exports.thirdP  = function(){
  function marketText(){
     let text = "<div id='main'><p id='text'>Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy.</p><div id='buySellItems'><button id='lookingAround'>rozejrzyj się</button><button id='buy'>kupuj</button><button id='sell'>sprzedaj</button><button id='caravan'>karawana</button></div></div>";

     let gameDescription = document.querySelector("#gameDescription");
     gameDescription.innerHTML = text;
   }
   marketText();
 }

module.exports.marketText = " Niewielki targ, na którym okoliczni mieszczkańcy mogą dokonywać swoich zakupów.";

module.exports.buysItems = function(){
  function buyItems(){
    let itemsBuy = "<div id='buys'><button id='tent'>namiot - 5szt. zł.</button><button id='bag'>torba - 1szt. zł</button><button id='blanket'>derka - 1szt. zł</button><button id='lamp'>lampa - 1szt. zł</button><button id='rope'>lina - 1szt. zł</button><button id='food'>racja żyw. - 1szt. zł</button><button id='dagger'>sztylet - 8szt. zł</button><button id='woodenStick'>pałka drewniana - 4szt. zł</button><button id='buckler'>puklerz - 12szt. zł</button></ul></div>";

    let buy = document.querySelector("#dialogPanelDescription");
    buy.innerHTML = itemsBuy;
  }

buyItems();


}
