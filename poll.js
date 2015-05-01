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
    console.log(snapshot.val());
  });
  
}

function getFormData(){ 
  var val1=document.getElementById('poll1').value;
  var val2=document.getElementById('poll2').value;
  /* some other fields */
  /* now call ur function by passing the above values */
  console.log("val1: " + val1 + ", val2:" + val2);
}
