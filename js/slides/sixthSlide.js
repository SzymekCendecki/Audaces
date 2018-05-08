module.exports.skill = function(){
  let skillArray = [];

  $.each($("input[name='skill']:checked"), function(){

            if(skillArray.indexOf($(this).val()) !== -1){
                console.log("Masz już tą umiejętność. wybierz inną");
              }else{
                skillArray.push($(this).val());
              }

              if(skillArray.length > 3){
                $('#alertSkill').text("Nie wybrać więcej niż 3 umiejętności.");
                skillArray.pop();
              }else if(skill.length < 3){
                $('#alertSkill').text("");
              }
  });

  $("#skillDescription").text("umiejętności: " + skillArray.join(", "));

    module.exports.skillArray = skillArray;
}
