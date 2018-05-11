//choose equipment
module.exports.equipment = function(){
  let equipmentArray = [];

  $.each($("input[name='item']:checked"), function(){
              equipmentArray.push($(this).val());

            if(equipmentArray.length > 5){
              $("input[name='item']").attr("checked", false).prop("disabled", true);
              $("input[name='item']:checked").attr("checked", true).prop("disabled", false);
              $('#alertEquipment').text("Nie wybrać więcej niż 5 przedmiotów.");
                equipmentArray.pop();
              }else if(equipmentArray.length < 5){
                $("input[name='item']").prop("disabled", false);
                $('#alertEquipment').text("");
              }
  });

  $("#equipmentDescription").text("sprzęt: " + equipmentArray.join(", "));

  module.exports.equipArray = equipmentArray;
}
