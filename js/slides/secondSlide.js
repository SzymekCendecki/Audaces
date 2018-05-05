//choose occupations
module.exports.chooseOccupation = function(){
  let inputOccupationChecked = $('input:radio[name=occupation]:checked').val();

  switch (inputOccupationChecked) {
    case "warrior":
      $("#occupationDecription").text("Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.");

      $("#infoOccupation").text("wojownik");
    break;

    case "bandit":
      $("#occupationDecription").text("Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.");

      $("#infoOccupation").text("złoczyńca");
    break;

    case "wizard":
        $("#occupationDecription").text("Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia.");

        $("#infoOccupation").text("czarodziej");
      break;
 }
}
