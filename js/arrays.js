//Arrays for creator
//main races
let races = ["człowiek", "elf", "krasnolud", "ork"];

//main professions
let professions = ["wojownik", "czarodziej", "złoczyńca"];

//basic items - start of game
//weapons = 15
let weaponArray = ["sztylet", "daga", "mizerykordia", "drewniana pałka", "krótki miecz", "szabla", "miecz długi", "morgensztern", "miecz półtoraręczny", "miecz dwuręczny", "espadon", "włócznia", "pika", "halabarda", "proca", "łuk", "kusza"];

//armors = 7
let armorsArray = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana", "zbroja paskowa", "kolczuga", "zbroja pópłytowa", "zbroja płytowa"];

//shields = 6
let shieldsArray = ["puklerz", "mała drewniana", "mała metalowa", "duża drewniana", "duża metalowa", "pawęż"];

//equipment and skills
//equipment = 19
let equipment = ["hubka i krzesiwo", "mieszek", "pas skórzany", "igły i nici", "tuba na pergaminy", "pęk piór do pisania", "pergaminy 5szt.", "zwykłe ubranie", "płaszcz", "fikuśny kapelusz", "łapcie z łyka", "kosz wiklinowy", "plecak", "torba podróżna", "sakwa", "koc", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m"];

//skills 10
let skillsWarrior = ["sztuka przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

let skillsBandit = ["przygotowanie trucizn", "wspinaczka", "aktorstwo", "akrobatyka", "tworzenie pułpek", "skradanie się", "kradzież kieszonkowa", "uniki", "drewniana pałka", "sztylet", "krótki miecz", "blefowanie"];

let skillWizard = ["pisanie i czytanie", "przywołanie/odpędzenie demona", "wróżbiarstwo", "leczenie ran", "rzucanie czarów", "tworzenie eliksirów", "tworzenie mag. przedmiotów", "tworzenie maści", "astrologia", "tworzenie mag. runów", "zielarstwo"];

let bonusesArray = [-5, -3, -2, 0, 4, 5, 10];
module.exports.show = function(){
  humanFeatures.push(bonusesArray[3]);
  humanFeatures.push(bonusesArray[3]);
  humanFeatures.push(bonusesArray[3]);
  humanFeatures.push(bonusesArray[3]);
  humanFeatures.push(bonusesArray[3]);
console.log(humanFeatures);

//współczynniki z profesji
//wojownik siła +5, wytrzymałość +5
//złoczyńca zręczność +10
//mag charyzma +5, inteligencja +5

//współczynniki z rasy
//człowiek zero dla wszystkich cech
//elf siła -5, wytrzymałość -5, inteligencja +5, charyzma +5
//krasnolud siła +4, wytrzymałość +4, zręczność -2,  charyzma -3
//ork siła +5, wytrzymałość +5, inteligencja -5, charyzma -5//all choose inforamtion

//<p id="infoForce"></p>
//<p id="infoStrenght"></p>
//<p id="infoSkill"></p>
//<p id="infoIntellectuals"></p>
//<p id="infoCharisma"></p>


}
