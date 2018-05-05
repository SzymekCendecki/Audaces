//main Menu
module.exports.startOptionsGame = function startOptionsGame(){
  $("#startOptionsGame, #hello").fadeIn(2000);
  $("body").css("backgroundColor", "beige");
}

//info
module.exports.info = function info(){
  $("#descriptionMenu").text("Ta wersja gry została stworzona jako projekt końcowy kursu front'endowego, a także jako modernizacja tej samej gry sprzed kursu. Gra ma także na celu przetestowanie mechaniki 'papierowej' wersji systemu gry Audaces. Projekt będzie rozwijalny także po skończeniu kursu. Wszystkie wersje tej gry zostały wydane przez niezależne studio Niewierne Psy. Gra powstała dzięki użytym technologiom: HTML5, SASS(css), jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com/.").addClass("descriptionMenu");
}

//licence
module.exports.licence = function licence(){
  $("#descriptionMenu").text("Licencja dostępna jest w pliku tekstowym w głównym katalogu. Użytkownik rozpoczynająć grę, akceptuje warunki licencji.").addClass("descriptionMenu");
}

//Tutorial
module.exports.tutorial = function tutorial(){
      $("#descriptionMenu").text("Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial pojawi się pod nimi odpowiednia informacj. Po wciśnięciu przycisku Nowa gra, użytkownik rozpocznie grę. Po rozpoczęciu gry, użytkownik będzie mógł wylosować postać lub ją stworzyć. Gdy będzie chciał ją stworzyć samemu, przejdzie do kreatora, który będzie podpowiadał możliwości. Po stworzeniu postaci, użytkownik przejdze do gry. Ekran będzie podzielony zasadniczo na dwie części. Górna, miejsza, będzie zawierała przyciski, dzięki którym będzie można mieć podgląd do charakterystyk swojego protagonisty, ekwipunku zadań do wykonania oraz pomocy. Dolna część to część, na której będzie się odgrywała cała historia gry. Na niej to gracz będzie mógł dokonywać interakcji.").addClass("descriptionMenu");
}
