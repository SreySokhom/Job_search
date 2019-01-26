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

 // const tableObject=document.getElementById('table_body');

  const root = firebase.database().ref().child('Job');
  //const joob =root.child("job1");


 

  root.on('child_added', snap =>{


    const pos=snap.child("position").val();
    const com= snap.child("company").val();
   // tableObject.append("<tr> <td> "+pos+"</td><td>"+com+" </td>  </tr>");



    const trtable=document.createElement('td')
    //const trtable1=document.createElement('td')
    trtable .innerText=pos;
    //trtable1.innerText=com;

 //  tableObject.append('');
   $("#table_body").append("<tr> <td>"+pos+"</td><td> " + com+"</td></tr>")
  }  );
  
  $(document).ready(function(){
    $('#bar').click(function(){
//			var sub_nav=$('.sub_nav');
        $('.sub_nav').toggle();
//			alert();
    });
});

}());
