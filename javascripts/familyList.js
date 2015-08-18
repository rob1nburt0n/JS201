define(function(){
  return {
   queryFamily: function(functionPassedFromMainModule) { 
      
      $.ajax({
            url: "https://nss-robin-family.firebaseio.com/.json"
          }).done(function(data) {
            console.log(data);
            functionPassedFromMainModule(data);
      });
          
     }
  };
});