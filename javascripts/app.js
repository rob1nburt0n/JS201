requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});


requirejs(
  ["jquery", "firebase", "hbs", "bootstrap", "addFamily"], 
  function($, _firebase, Handlebars, bootstrap, addFamily) {



    var myFirebaseRef = new Firebase("https://nss-robin-family.firebaseio.com/");

  myFirebaseRef.child("family").on("value", function(snapshot) {
    var familyObjectFromFirebase = snapshot.val(); 
    console.log("familyObjectFromFirebase",familyObjectFromFirebase);

    var familyObjectForTemplates = {
      family: familyObjectFromFirebase
    };
    console.log("familyObjectForTemplates",familyObjectForTemplates);

    require(['hbs!../templates/family'], function(familyTemplate) {
      console.log("familyObjectForTemplates",familyObjectForTemplates);
      $("#familyNames").html(familyTemplate(familyObjectForTemplates));
    });
  });


    $('#addButton').click(function() {
      console.log('click');
      addFamily.addFamily();
    });

  $( document ).on( "click", "#deleteButton", function() {
    var titleKey = $(this).parent().attr("key");
    console.log("titleKey", titleKey);
    var fb = new Firebase('https://nss-robin-family.firebaseio.com/' + titleKey);
    fb.remove();
  });
   

});