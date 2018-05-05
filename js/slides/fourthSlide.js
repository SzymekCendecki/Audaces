//fourth slide choose features part 2
//sex
module.exports.sexCheck = function(){
    let inputSexChecked = $('input:radio[name=sex]:checked').val();

    switch (inputSexChecked) {
        case "female":
          $("#featPart2Description").text("Kobieta - żeńska wersja, każdej rasy.");
          $("#infoSex").text("kobieta");
       break;

        case "male":
          $("#featPart2Description").text("Mężczyzna - męska wersja, każdej rasy.");
          $("#infoSex").text("mężczyzna");
        break;

        case "other":
          $("#featPart2Description").text("Inna - Bogowie nudzili się i wymyślili krzyżówkę chłopa z babą.");
          $("#infoSex").text("mężczyzna");
        break;
     }
}

//hair color
module.exports.hairColorCheck = function(){
    let inputHairColorChecked = $('input:radio[name=hairColor]:checked').val();

    switch (inputHairColorChecked) {
        case "blond":
          $("#featPart2Description").text("Jasne włosy");
          $("#infoHairColor").text("Blond");
       break;

        case "rude":
          $("#featPart2Description").text("Rude jak rdza.");
          $("#infoHairColor").text("Rude");
        break;

        case "czarne":
          $("#featPart2Description").text("Czarniejsze niż smoła");
          $("#infoHairColor").text("czarne");
        break;

        case "farbowane":
          $("#featPart2Description").text("Takie fikuśne, różno kolorowe");
          $("#infoHairColor").text("farbowane");
        break;
     }
}

//eyes color
module.exports.eyesColorCheck = function(){
    let inputEyesColorChecked = $('input:radio[name=eyesColor]:checked').val();

    switch (inputEyesColorChecked) {
        case "piwne":
          $("#featPart2Description").text("Piwne.");
          $("#infoEyesColor").text("piwne");
       break;

        case "szare":
          $("#featPart2Description").text("Szare.");
          $("#infoEyesColor").text("szare");
        break;

        case "brązowe":
          $("#featPart2Description").text("Brązowe");
          $("#infoEyesColor").text("Brązowe");
        break;

        case "niebieskie":
          $("#featPart2Description").text("niebieskie");
          $("#infoEyesColor").text("niebieskie");
        break;
     }
}

//weight
module.exports.weightCheck = function(){
    let inputWeightChecked = $('input:radio[name=weight]:checked').val();

    switch (inputWeightChecked) {
        case "niedowaga":
          $("#featPart2Description").text("niedowaga");
          $("#infoWeight").text("niedowaga");
       break;

        case "normalna":
          $("#featPart2Description").text("normalna");
          $("#infoWeight").text("normalna");
        break;

        case "nadwaga":
          $("#featPart2Description").text("nadwaga");
          $("#infoWeight").text("nadwaga");
        break;
     }
}

//height
module.exports.heightCheck = function(){
    let inputHeightChecked = $('input:radio[name=height]:checked').val();

    switch (inputHeightChecked) {
        case "niski":
          $("#featPart2Description").text("niski");
          $("#infoHeight").text("niski");
       break;

        case "średni":
          $("#featPart2Description").text("średni");
          $("#infoHeight").text("średni");
        break;

        case "wysoki":
          $("#featPart2Description").text("wysoki");
          $("#infoHeight").text("wysoki");
        break;
     }
}
