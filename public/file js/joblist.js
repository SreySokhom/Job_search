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

  //create a variable point to root of database in firebase
  const root = firebase.database().ref().child("Job");

  const root1=firebase.database().ref().child("CompanyDes");

(function () { 
	//use on() to get data 
	root.on("child_added", snap => {
		var position = snap.child('position').val();
		var company = snap.child('company').val();
		 var img=snap.child('img').val();
		 var img2=snap.child('img').val();
		 var des=snap.child('des').val();
		 var location=snap.child('location').val();
		 var DL=snap.child('deadline').val();
		 console.log(des);
		 		  $("#box").append(`
				   <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg" > <div class="col-xl-6 col-md-6 col-12 ">
						 <div class="div2 p-2 mb-3 mx-auto shadow grow">
							 <div class="row">
								 <div class="col-3 ">
									 <img src="${img}">
								 </div>
								  <div class="col-9">
								  ${position}<br><span>${company}</span>
								  <br><span>Post: <b><u>${DL}</u></b></span>
								  </div>
								  </div>
								  </div></a>
								 `);

			 root.on("child_added", snap=>{
				var acc=[];
			  //  var index=[];
			   acc.push(snap.val());   
			var jb=	document.getElementById('jobseach').value;
			console.log(jb);
			  if(snap.val().position==jb){
				  console.log(snap.val().position);
	
				 }
				})
	});
	const mine = root.orderByChild("company").equalTo('pizza company').once("value", function (snapshot) {
		snapshot.forEach(function(childSnapshot) {
		  var img2=childSnapshot.val().img;
		  $("#mine").append(`<img src="${img2}">`)
		});
	  });
	

  }());
// 	 function search (inputedString){
// 	firebase.database().ref().child("Job").on("child_added" , snap=>{
// 		// console.log(snap.val().position);
// 	   arrayObject.push(snap.val());
// 	   var i;
// 	   for( i=0;i<arrayObject.length; i++){
// 		if(arrayObject.position.match(inputedString)){
// 			console.log(arrayObject.position.match(inputedString));
// 		}
// 	   }
// 	   console.log(arrayObject)
// 		console.log("You have fetched data.")
// 	})
// }
// search("Teacher");
  $(document).ready(function(){
		$('#search').hide();
		$('#btnseach').click(function(){
			$('#search').show();
			$('#box').hide();
		})


  });