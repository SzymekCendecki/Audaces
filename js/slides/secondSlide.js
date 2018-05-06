//choose occupations
module.exports.chooseOccupation = function(){
  let inputOccupationChecked = $('input:radio[name=occupation]:checked').val();

module.exports.occupation = inputOccupationChecked;

// mainFeaturesOccupation = [force, strenght, skill, intellectuals, charisma]
    let mainFeaturesOccupation = [];

    switch (inputOccupationChecked) {
    case "warrior":
      $("#occupationDecription").text("Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.");

      mainFeaturesOccupation.splice(0, 1, 5);
      mainFeaturesOccupation.splice(1, 1, 5);
      mainFeaturesOccupation.splice(2, 1, 0);
      mainFeaturesOccupation.splice(3, 1, 0);
      mainFeaturesOccupation.splice(4, 1, 0);
      module.exports.mainFeaturesOccupation0 = mainFeaturesOccupation[0];
      module.exports.mainFeaturesOccupation1 = mainFeaturesOccupation[1];
      module.exports.mainFeaturesOccupation2 = mainFeaturesOccupation[2];
      module.exports.mainFeaturesOccupation3 = mainFeaturesOccupation[3];
      module.exports.mainFeaturesOccupation4 = mainFeaturesOccupation[4];

      $("#infoOccupation").text("wojownik");
    break;

    case "bandit":
      $("#occupationDecription").text("Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.");

      mainFeaturesOccupation.splice(0, 1, 0);
      mainFeaturesOccupation.splice(1, 1, 0);
      mainFeaturesOccupation.splice(2, 1, 10);
      mainFeaturesOccupation.splice(3, 1, 0);
      mainFeaturesOccupation.splice(4, 1, 0);
      module.exports.mainFeaturesOccupation0 = mainFeaturesOccupation[0];
      module.exports.mainFeaturesOccupation1 = mainFeaturesOccupation[1];
      module.exports.mainFeaturesOccupation2 = mainFeaturesOccupation[2];
      module.exports.mainFeaturesOccupation3 = mainFeaturesOccupation[3];
      module.exports.mainFeaturesOccupation4 = mainFeaturesOccupation[4];

      $("#infoOccupation").text("złoczyńca");
    break;

    case "wizard":
        $("#occupationDecription").text("Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia.");

        mainFeaturesOccupation.splice(0, 1, 0);
        mainFeaturesOccupation.splice(1, 1, 0);
        mainFeaturesOccupation.splice(2, 1, 0);
        mainFeaturesOccupation.splice(3, 1, 5);
        mainFeaturesOccupation.splice(4, 1, 5);
        module.exports.mainFeaturesOccupation0 = mainFeaturesOccupation[0];
        module.exports.mainFeaturesOccupation1 = mainFeaturesOccupation[1];
        module.exports.mainFeaturesOccupation2 = mainFeaturesOccupation[2];
        module.exports.mainFeaturesOccupation3 = mainFeaturesOccupation[3];
        module.exports.mainFeaturesOccupation4 = mainFeaturesOccupation[4];

        $("#infoOccupation").text("czarodziej");
      break;
 }
}
