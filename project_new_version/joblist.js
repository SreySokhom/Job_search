 (function () {

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

   root.on("child_added", snap => {


     console.log("test: ", snap);

     var position = snap.child('position').val();
     var company = snap.child('company').val();

     // var di1 = document.getElementById('di1');
     // var di3 = di1.children[1];
     // var a = di3.children[0];
     // var positions = di3.children[1]
     // a.id = snap.key
     // a.innerHTML = company
     // positions.innerHTML = position

     // children.push(di1);

     /*  var newdiv=document.getElementById('div1');
       var cr_div=document.createElement('div');
       var set_text=document.createTextNode(position);
      newdiv.appendChild(  cr_div.appendChild(set_text));*/


     // cr_div.innerText(position);
     //  newdiv.appendChild(cr_div);
     //$("#div1").addClass("blue");

     $("#div1").append(`<div class="row div2"  id="di1">
                    <div class="col-3" id="di2"><img src="prudential.png"></div>
                    <div class="col-9" id="di3">
                      <a href="" id="atag">${company}</a>
                      <p id="position">${position}</p>
                    </div>
                  </div><div></div>`);
     //  $("#div1").addClass(" col-9");
     // $("#atag").append("<p> "+position+" </p>");

     //   $("#div1").append("<tr><td>"+ position +"</td><td>"+ company +"</td></tr>");
   });
  //  $('#div1').append(blog);

 }());