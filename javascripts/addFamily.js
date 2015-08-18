define(function() {
  
 return {
  queryFamily: function(getMember) {
    
    var newFamilyMember = {
        "name": $("#name").val(),
        "age": $("#age").val(),
        "gender": $("#gender").val(),
        "skills": $("#skills").val(),
      };
      newFamilyMember = JSON.stringify(newFamilyMember);
    $.ajax({
      url: "familyMemb.json",
    }).done(function(data) {
      getMember.call(this, data);
     
    });
  }
 };
});
