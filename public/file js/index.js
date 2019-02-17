var config = {
    apiKey: "AIzaSyCFW9avzV_qt3W2cARcLhMkdA5msELW2hk",
    authDomain: "jobsearch-78f44.firebaseapp.com",
    databaseURL: "https://jobsearch-78f44.firebaseio.com",
    projectId: "jobsearch-78f44",
    storageBucket: "jobsearch-78f44.appspot.com",
    messagingSenderId: "920751215712"
  };
  firebase.initializeApp(config);
  arrayObject = [];
    
  function search (inputedString){
        firebase.database().ref().child("Job").on("child_added" , snap=>{
            // console.log(snap.val().position);
           arrayObject.push(snap.val());
           var i;
           for( i=0;i<arrayObject.length; i++){
            if(arrayObject.position.match(inputedString)){
                console.log(arrayObject.position.match(inputedString));
            }
           }
           console.log(arrayObject)
            console.log("You have fetched data.")
        })
 }
search("Teacher");
console.log(arrayObject.length);