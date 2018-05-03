document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

// hidden elements
$("#title, #startOptionsGame, #hello, .slider, #slider").hide();

//intro
//inscription
let hideInscription = () => {
  $("#inscriptions").fadeOut(2000);
}
setTimeout(hideInscription, 5000);

//title
let showTitle = () => {
  $("#title").fadeIn(2000);
}
setTimeout(showTitle, 7500);

let hideTitle = () => {
  $("#title").fadeOut(2000);
}
setTimeout(hideTitle, 12000);

//Start of game - option choice
let startOptionsGame = () => {
  $("#startOptionsGame, #hello").fadeIn(2000);
  $("body").css("backgroundColor", "beige");
}
setTimeout(startOptionsGame, 14500);

//info button
$(".btnInfo").on("click", () => {
  $("#descriptionMenu").text("Ta wersja gry została stworzona jako projekt końcowy kursu front'endowego, a także jako modernizacja tej samej gry sprzed kursu. Gra ma także na celu przetestowanie mechaniki 'papierowej' wersji systemu gry Audaces. Projekt będzie rozwijalny także po skończeniu kursu. Wszystkie wersje tej gry zostały wydane przez niezależne studio Niewierne Psy. Gra powstała dzięki użytym technologiom: HTML5, SASS(css), jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com/.").addClass("descriptionMenu");
});

//licence button
$(".btnLicence").on("click", () =>{
  $("#descriptionMenu").text("UMOWA LICENCYJNA UŻYTKOWNIKA APLIKACJI AUDACES (oraz wszystkich jego wesji). POSIADAJĄC APLIKACJĘ AKCEPTUJESZ PONIŻSZE WARUNKI LICENCJI. Autor informuje, iż zawarte treści w aplikacji mogą być niestosowne dla osób niepełnoletnich, o innym światopoglądzie lub wyznawanej religii. Użytkownik używa aplikację na własne ryzyko. Twórca tej aplikacji infourmuje, iż aplikacja ta została stowrzona w celach hobyystycznych oraz w celu nauki programowania. Aplikacja ta może zawierać błędy, które niekoniecznie muszą być poprawione. Autor nie udziela żadnych gwarancji, obietnic oraz zapewnień na tą aplikację (i jej wersje) i nie odpowiada za błędne działanie lub użytkowanie programu. Autor aplikacji nie bierze na siebie żadnych reklamacji w sprawie wadliwego działania programu oraz nie poczuwa się do zadość uczynienia za spowodowane szkody. Prawa autorskie należą do Szymona Cendeckiego. Audace jest rozprowadzany na zasadzie FREEWARE czyli: użytkownik dostaje aplikację za darmo, nie mozę w żaden sposób zmieniać aplikacji, może wykorzystywać aplikację na własny użytek, zabrnia się wykorzystywać aplikację w celach komercyjnych, zabrania się ujawniania kodu źródłowego.").addClass("descriptionMenu");
});

//tutorial button
$(".btnTutorial").on("click", () =>{
    $("#descriptionMenu").text("Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial pojawi się pod nimi odpowiednia informacj. Po wciśnięciu przycisku Nowa gra, użytkownik rozpocznie grę. Po rozpoczęciu gry, użytkownik będzie mógł wylosować postać lub ją stworzyć. Gdy będzie chciał ją stworzyć samemu, przejdzie do kreatora, który będzie podpowiadał możliwości. Po stworzeniu postaci, użytkownik przejdze do gry. Ekran będzie podzielony zasadniczo na dwie części. Górna, miejsza, będzie zawierała przyciski, dzięki którym będzie można mieć podgląd do charakterystyk swojego protagonisty, ekwipunku zadań do wykonania oraz pomocy. Dolna część to część, na której będzie się odgrywała cała historia gry. Na niej to gracz będzie mógł dokonywać interakcji.").addClass("descriptionMenu");
});

//Creator of hero
//Arrays for creator
//main races
let races = ["człowiek", "elf", "krasnolud", "ork"];

//main professions
let professions = ["wojownik", "czarodziej", "złoczyńca"];

//basic items - start of game
//weapons = 15
let weaponArray = ["sztylet", "daga", "mizerykordia", "krótki miecz", "szabla", "miecz długi", "miecz półtoraręczny", "miecz dwuręczny", "espadon", "włócznia", "pika", "halabarda", "proca", "łuk", "kusza"];

//armors = 7
let armorsArray = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana", "zbroja paskowa", "kolczuga", "zbroja pópłytowa", "zbroja płytowa"];

//shields = 6
let shieldsArray = ["puklerz", "mała drewniana", "mała metalowa", "duża drewniana", "duża metalowa", "pawęż"];

//equipment and skills
//equipment = 19
let equipment = ["hubka i krzesiwo", "mieszek", "pas skórzany", "igły i nici", "tuba na pergaminy", "pęk piór do pisania", "pergamin 1szt.", "zwykłe ubranie", "płaszcz", "fikuśny kapelusz", "łapcie z łyka", "kosz wiklinowy", "plecak", "torba podróżna", "sakwa", "koc", "namiot", "drewniana miska", "drewniana łyżka"];

//skills 10
let skills = ["survival", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", //worrior
"powożenie zaprzęgiem", "przygotowanie trucizn", "wspinaczka", "aktorstwo", "akrobatyka", //bandit
"pisanie i czytanie", "przywołanie/odpędzenie demona", "wróżbiarstwo", "leczenie ran", "rzucanie czarów" //wizard
];

//slider
$(".btnNewGame").on("click", () => {
  $("#hello, #startOptionsGame, #descriptionMenu").fadeOut(750);
  $("#slider").delay(750).fadeIn(750);
  var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	$('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('button.control_prev').click(function () {
        moveLeft();
    });

    $('button.control_next').click(function () {
        moveRight();
    });
});

//first slide choose race
$("#chooseRace input").on("click", function(){
let inputRaceChecked = $('input:radio[name=race]:checked').val();

let human = "Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg, kolor oczu: najczęściej piwne, szare, brązowe, kolor skóry: od białego do czarnego (wraz z odcieniami), żółta, czerwona, kolor włosów: każdy, wiek: do 100 lat, profesja: każda.";

let elv = "Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 1500 lat, profesja: każda, z predyspozycjami do bycia czarodziejem.";

let dwarf = "Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 500 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.";

let orc = "Orki to niezwykle wojownicza rasa. Są w głównej mierze koczownikami, z kastowym podziałem społeczeństwa. Są niechętni każdemu rodzajowi magii, za wyjątkiem magii szamańskiej, do której odnoszą się z nieufnością. Podstawowe cechy: wzrost: 180 - 220cm, waga: 100 - 150kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 80 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.";

switch (inputRaceChecked) {
    case "human":
		  $("#raceDecription").text(human);
      $("#infoRace").text("człowiek");
		    break;

    case "elv":
		  $("#raceDecription").text(elv);
      $("#infoRace").text("elf");
		  break;

    case "dwarf":
		  $("#raceDecription").text(dwarf);
      $("#infoRace").text("krasnolud");
		  break;

    case "orc":
		  $("#raceDecription").text(orc);
      $("#infoRace").text("ork");
		  break;
 }
});

//second slide choose occupation
$("#chooseOccupation input").on("click", function(){
let inputOccupationChecked = $('input:radio[name=occupation]:checked').val();

let warrior = "Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.";

let bandit = "Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.";

let wizard = "Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia.";

switch (inputOccupationChecked) {
    case "warrior":
		$("#occupationDecription").text(warrior);
		$("#infoOccupation").text("wojownik");
		break;

    case "bandit":
		$("#occupationDecription").text(bandit);
		$("#infoOccupation").text("złoczyńca");
		break;

    case "wizard":
		$("#occupationDecription").text(wizard);
		$("#infoOccupation").text("czarodziej");
		break;
 }
});

//third slide choose features 
//force
$("#force").on("click", () => {
	let randomForcePoints = Math.round(Math.random()*50);
	$("#forcePoints").text(randomForcePoints);
});

$("#force").on("mouseenter", () =>{ $("#featuresDescription").text("SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.");
});
$("#force").on("mouseleave", () =>{	$("#featuresDescription").text("");});

//strenght
$("#strenght").on("click", () => {
	let randomStrenghtPoints = Math.round(Math.random()*50);
	$("#strenghtPoints").text(randomStrenghtPoints);
});
$("#strenght").on("mouseenter", () =>{ $("#featuresDescription").text("WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby  lub trucizny. Ważna dla wojowników.");
});
$("#strenght").on("mouseleave", () =>{	$("#featuresDescription").text("");});


//zręczność
$("#skill").on("click", () => {
	let randomSkillPoints = Math.round(Math.random()*50);
	$("#skillPoints").text(randomSkillPoints);
});
$("#skill").on("mouseenter", () =>{ $("#featuresDescription").text("ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.");
});
$("#skill").on("mouseleave", () =>{	$("#featuresDescription").text("");});


//intellectuals
$("#intellectuals").on("click", () => {
	let randomIntellectualsPoints = Math.round(Math.random()*50);
	$("#intellectualsPoints").text(randomIntellectualsPoints);
});
$("#intellectuals").on("mouseenter", () =>{ $("#featuresDescription").text("INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd.");
});
$("#intellectuals").on("mouseleave", () =>{	$("#featuresDescription").text("");});

//charisma
$("#charisma").on("click", () => {
	let randomCharismaPoints = Math.round(Math.random()*50);
	$("#charismaPoints").text(randomCharismaPoints);
});
$("#charisma").on("mouseenter", () =>{ $("#featuresDescription").text("CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów.");
});
$("#charisma").on("mouseleave", () =>{	$("#featuresDescription").text("");});




let bonusesArray = [-5, -3, -2, 4, 5, 10];
//współczynniki z profesji
//wojownik siła +5, wytrzymałość +5
//złoczyńca zręczność +10
//mag charyzma +5, inteligencja +5

//współczynniki z rasy
//człowiek zero dla wszystkich cech
//elf siła -5, wytrzymałość -5, inteligencja +5, charyzma +5
//krasnolud siła +4, wytrzymałość +4, zręczność -2,  charyzma -3
//ork siła +5, wytrzymałość +5, inteligencja -5, charyzma -5


});
