//race description
module.exports.chooseRace = function(){
  let inputRaceChecked = $('input:radio[name=race]:checked').val();

module.exports.race = inputRaceChecked;
//mainFeaturesRace = [force, strenght, skill, intellectuals, charisma]
let mainFeaturesRace = [];

switch (inputRaceChecked) {
      case "człowiek":
        $("#raceDecription").text("Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg, kolor oczu: najczęściej piwne, szare, brązowe, kolor skóry: od białego do czarnego (wraz z odcieniami), żółta, czerwona, kolor włosów: każdy, wiek: do 100 lat, profesja: każda.");

      mainFeaturesRace.splice(0, 1, 0);
      mainFeaturesRace.splice(1, 1, 0);
      mainFeaturesRace.splice(2, 1, 0);
      mainFeaturesRace.splice(3, 1, 0);
      mainFeaturesRace.splice(4, 1, 0);

      module.exports.mainFeaturesRace0 = mainFeaturesRace[0];
      module.exports.mainFeaturesRace1 = mainFeaturesRace[1];
      module.exports.mainFeaturesRace2 = mainFeaturesRace[2];
      module.exports.mainFeaturesRace3 = mainFeaturesRace[3];
      module.exports.mainFeaturesRace4 = mainFeaturesRace[4];

        $("#infoRace").text("człowiek");
      break;

    case "elf":
      $("#raceDecription").text("Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 1500 lat, profesja: każda, z predyspozycjami do bycia czarodziejem.");

      mainFeaturesRace.splice(0, 1, -5);
      mainFeaturesRace.splice(1, 1, -5);
      mainFeaturesRace.splice(2, 1, 0);
      mainFeaturesRace.splice(3, 1, 5);
      mainFeaturesRace.splice(4, 1, 5);
      module.exports.mainFeaturesRace0 = mainFeaturesRace[0];
      module.exports.mainFeaturesRace1 = mainFeaturesRace[1];
      module.exports.mainFeaturesRace2 = mainFeaturesRace[2];
      module.exports.mainFeaturesRace3 = mainFeaturesRace[3];
      module.exports.mainFeaturesRace4 = mainFeaturesRace[4];

      $("#infoRace").text("elf");

    break;

    case "krasnolud":
        $("#raceDecription").text("Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 500 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.");

        mainFeaturesRace.splice(0, 1, 4);
        mainFeaturesRace.splice(1, 1, 4);
        mainFeaturesRace.splice(2, 1, 0);
        mainFeaturesRace.splice(3, 1, -2);
        mainFeaturesRace.splice(4, 1, -3);
        module.exports.mainFeaturesRace0 = mainFeaturesRace[0];
        module.exports.mainFeaturesRace1 = mainFeaturesRace[1];
        module.exports.mainFeaturesRace2 = mainFeaturesRace[2];
        module.exports.mainFeaturesRace3 = mainFeaturesRace[3];
        module.exports.mainFeaturesRace4 = mainFeaturesRace[4];

        $("#infoRace").text("krasnolud");
     break;

     case "ork":
        $("#raceDecription").text("Orki to niezwykle wojownicza rasa. Są w głównej mierze koczownikami, z kastowym podziałem społeczeństwa. Są niechętni każdemu rodzajowi magii, za wyjątkiem magii szamańskiej, do której odnoszą się z nieufnością. Podstawowe cechy: wzrost: 180 - 220cm, waga: 100 - 150kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 80 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.");

        mainFeaturesRace.splice(0, 1, 5);
        mainFeaturesRace.splice(1, 1, 5);
        mainFeaturesRace.splice(2, 1, 0);
        mainFeaturesRace.splice(3, 1, -5);
        mainFeaturesRace.splice(4, 1, -5);
        module.exports.mainFeaturesRace0 = mainFeaturesRace[0];
        module.exports.mainFeaturesRace1 = mainFeaturesRace[1];
        module.exports.mainFeaturesRace2 = mainFeaturesRace[2];
        module.exports.mainFeaturesRace3 = mainFeaturesRace[3];
        module.exports.mainFeaturesRace4 = mainFeaturesRace[4];

        $("#infoRace").text("ork");
      break;
    }
}
