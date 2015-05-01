function firebaseTest() {

  var myFirebaseRef = new Firebase("https://resplendent-torch-9414.firebaseio.com/");
  
  myFirebaseRef.set({
    title: "Hello World!",
    author: "Firebase",
    location: {
      city: "San Francisco",
      state: "California",
      zip: 94103
    }
  });
  
  myFirebaseRef.child("location/city").on("value", function(snapshot) {
    alert(snapshot.val());  // Alerts "San Francisco"
    console.log(snapshot.val());
  });
  
}
