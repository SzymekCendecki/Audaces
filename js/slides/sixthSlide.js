module.exports.skill = function(){
  let skillArray = [];

  $.each($("input[name='skill']:checked"), function(){

      function skillCheck(skillToCheck){
            if(skillArray.indexOf(skillToCheck) !== -1){
                console.log("Masz już tą umiejętność. wybierz inną");
              }else {
                skillArray.push(skillToCheck);
              }
}

function skillArrayCheck(array){
              if(array.length > 3){
                $("input[name='skill']").attr("checked", false).prop("disabled", true);
                $("input[name='skill']:checked").attr("checked", true).prop("disabled", false);
                $('#alertSkill').text("Nie wybrać więcej niż 3 umiejętności.");
                array.pop();
              }else if(array.length < 3){
              $("input[name='skill']").prop("disabled", false);
                $('#alertSkill').text("");
              }

            }

      skillCheck($(this).val());
      skillArrayCheck(skillArray);
  });

  $("#skillDescription").text("umiejętności: " + skillArray.join(", "));

    module.exports.skillArray = skillArray;
}
