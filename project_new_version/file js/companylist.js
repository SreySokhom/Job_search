
(function(){
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCFW9avzV_qt3W2cARcLhMkdA5msELW2hk",
    authDomain: "jobsearch-78f44.firebaseapp.com",
    databaseURL: "https://jobsearch-78f44.firebaseio.com",
    projectId: "jobsearch-78f44",
    storageBucket: "jobsearch-78f44.appspot.com",
    messagingSenderId: "920751215712"
  };
  firebase.initializeApp(config);

  const root = firebase.database().ref().child("Job");

  //use on() to get data 
  root.on("child_added", snap => {
    var location = snap.child('location').val();
    var company = snap.child('company').val();
   var img=snap.child('img').val();
	  $("#box").append(`
					<div class="col-6">
						<div class="div2 p-2 mb-3">
							<div class="row">
								<div class="col-3">
									<img src="${img}">
								</div>
								<div class="col-9 ">
									<a href="#">${company}</a><br><span>${location}</span>
								</div>
							</div>
						</div>
					</div>				
		`);


  });

}());
