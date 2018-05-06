//choose equipment
module.exports.equipment = function(){
  let equipmentArray = [];

  $.each($("input[name='item']:checked"), function(){
              equipmentArray.push($(this).val());

              if(equipmentArray.length > 5){
                $('#alertEquipment').text("Nie wybrać więcej niż 5 przedmiotów.");
                equipmentArray.pop();
              }else if(equipmentArray.length < 5){
                $('#alertEquipment').text("");
              }

  });

  $("#equipmentDescription").text("sprzęt: " + equipmentArray.join(", "));

  module.exports.equipArray = equipmentArray;
}
