//hero creator
module.exports.hideElements = function hideElements(){
    $("#hello, #startOptionsGame, #descriptionMenu").fadeOut(750); } //hide hideElements

module.exports.showCreator = function showCreator(){
    $("#slider").delay(750).fadeIn(750); }

module.exports.features1 = "<div id='name'><p id='descriptionTitleName'>Imię</p><p id='descriptionName'></p></div><div id='race'><p id='descriptionTitleRace'>Rasa</p><p id='descriptionRace'></p></div><div id='occupation'><p id='descriptionTitleOccupation'>Profesja</p><p id='descriptionOccupation'></p></div><div id='sex'><p id='descriptionTitleSex'>Płeć</p><p id='descriptionSex'></p></div><div id='hair'><p id='descriptionTitleHair'>Kolor włosów</p><p id='descriptionHair'></p></div><div id='eyes'><p id='descriptionTitleEyes'>Kolor oczu</p><p id='descriptionEyes'></p></div><div id='weight'><p id='descriptionTitleWeight'>Waga</p><p id='descriptionWeight'></p></div><div id='height'><p id='descriptionTitleHeight'>Wzrost</p><p id='descriptionHeight'></p></div><div id='skin'><p id='descriptionTitleSkin'>Kolor skóry</p><p id='descriptionSkin'></p></div>";

module.exports.features2 = "<div id='force'><p id='descriptionTitleForce'>Siła</p><p id='descriptionForce'></p></div><div id='strenght'><p id='descriptionTitleStrenght'>Wytrzymałość</p><p id='descriptionStrenght'></p></div><div id='skill'><p id='descriptionTitleSkill'>Zręczność</p><p id='descriptionSkill'></p></div><div id='intellectuals'><p id='descriptionTitleIntellectuals'>Inteligencja</p><p id='descriptionIntellectuals'></p></div><div id='charisma'><p id='descriptionTitleCharisma'>Charyzma</p><p id='descriptionCharisma'></p></div>";
