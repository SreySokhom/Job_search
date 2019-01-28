 
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


    
    const root=firebase.database().ref().child("Job");
    
    root.on("child_added",snap =>{
       
       
        var position=snap.child('position').val();
        var company=snap.child('company').val();


      /*  var newdiv=document.getElementById('div1');
        var cr_div=document.createElement('div');
        var set_text=document.createTextNode(position);
       newdiv.appendChild(  cr_div.appendChild(set_text));*/


       // cr_div.innerText(position);
      //  newdiv.appendChild(cr_div);
        //$("#div1").addClass("blue");

      $("#div1").append(" <div> <div> <div>  <span>" + company + "</span><br/ > </div> </div> </div>");
       $("#div1").addClass(" col-9");
      $("#atag").append("<p> "+position+" </p>");
        $("#span1").append("");




     //   $("#div1").append("<tr><td>"+ position +"</td><td>"+ company +"</td></tr>");




    });
    

}());


 



    
   