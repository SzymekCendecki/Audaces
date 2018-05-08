//fourth slide choose features part 2
//sex

// mainFeaturesPart2  = [sex, skin, hairColor, eyesColor, weight, height]

let mainFeaturesPart2 = [];

module.exports.sexCheck = function(){
    let inputSexChecked = $('input:radio[name=sex]:checked').val();

    switch (inputSexChecked) {
        case "female":
          $("#featPart2Description").text("Kobieta - żeńska wersja, każdej rasy.");
          mainFeaturesPart2.splice(0, 1, "kobieta");
          module.exports.sex = mainFeaturesPart2[0];
       break;

        case "male":
          $("#featPart2Description").text("Mężczyzna - męska wersja, każdej rasy.");
          mainFeaturesPart2.splice(0, 1, "mężczyzna");
          module.exports.sex = mainFeaturesPart2[0];
        break;

        case "other":
          $("#featPart2Description").text("Inna - Bogowie nudzili się i wymyślili krzyżówkę chłopa z babą.");
          mainFeaturesPart2.splice(0, 1, "inna");
          module.exports.sex = mainFeaturesPart2[0];
        break;
     }
}

//hair color
module.exports.hairColorCheck = function(){
    let inputHairColorChecked = $('input:radio[name=hairColor]:checked').val();

    switch (inputHairColorChecked) {
        case "blond":
          $("#featPart2Description").text("Jasne włosy");
          mainFeaturesPart2.splice(1, 1, "blond");
          module.exports.hair = mainFeaturesPart2[1];
       break;

        case "rude":
          $("#featPart2Description").text("Rude jak rdza.");
          mainFeaturesPart2.splice(1, 1, "rude");
          module.exports.hair = mainFeaturesPart2[1];
        break;

        case "czarne":
          $("#featPart2Description").text("Czarniejsze niż smoła");
          mainFeaturesPart2.splice(1, 1, "czarne");
          module.exports.hair = mainFeaturesPart2[1];
        break;

        case "farbowane":
          $("#featPart2Description").text("Takie fikuśne, różno kolorowe");
          mainFeaturesPart2.splice(1, 1, "farbowane");
          module.exports.hair = mainFeaturesPart2[1];
        break;
     }
}

//eyes color
module.exports.eyesColorCheck = function(){
    let inputEyesColorChecked = $('input:radio[name=eyesColor]:checked').val();

    switch (inputEyesColorChecked) {
        case "piwne":
          $("#featPart2Description").text("Piwne.");
          mainFeaturesPart2.splice(2, 1, "piwne");
          module.exports.eyes = mainFeaturesPart2[2];
       break;

        case "szare":
          $("#featPart2Description").text("Szare.");
          mainFeaturesPart2.splice(2, 1, "szare");
          module.exports.eye = mainFeaturesPart2[2];
        break;

        case "brązowe":
          $("#featPart2Description").text("Brązowe");
          mainFeaturesPart2.splice(2, 1, "brązowe");
          module.exports.eyes = mainFeaturesPart2[2];
        break;

        case "niebieskie":
          $("#featPart2Description").text("niebieskie");
          mainFeaturesPart2.splice(2, 1, "niebieskie");
          module.exports.eyes = mainFeaturesPart2[2];
        break;
     }
}

//weight
module.exports.weightCheck = function(){
    let inputWeightChecked = $('input:radio[name=weight]:checked').val();

    switch (inputWeightChecked) {
        case "niedowaga":
          $("#featPart2Description").text("niedowaga");
          mainFeaturesPart2.splice(3, 1, "niedowaga");
          module.exports.weight = mainFeaturesPart2[3];
       break;

        case "normalna":
          $("#featPart2Description").text("normalna");
          mainFeaturesPart2.splice(3, 1, "normalna");
          module.exports.weight = mainFeaturesPart2[3];
        break;

        case "nadwaga":
          $("#featPart2Description").text("nadwaga");
          mainFeaturesPart2.splice(3, 1, "nadwaga");
          module.exports.weight = mainFeaturesPart2[3];
        break;
     }
}

//height
module.exports.heightCheck = function(){
    let inputHeightChecked = $('input:radio[name=height]:checked').val();

    switch (inputHeightChecked) {
        case "niski":
          $("#featPart2Description").text("niski");
          mainFeaturesPart2.splice(4, 1, "niski");
          module.exports.height = mainFeaturesPart2[4];
       break;

        case "średni":
          $("#featPart2Description").text("średni");
          mainFeaturesPart2.splice(4, 1, "średni");
          module.exports.height = mainFeaturesPart2[4];
        break;

        case "wysoki":
          $("#featPart2Description").text("wysoki");
          mainFeaturesPart2.splice(4, 1, "wysoki");
          module.exports.height = mainFeaturesPart2[4];
        break;
     }
}
