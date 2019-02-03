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
//  function accountingShow(){
//      root.on("child_added", snap=>{
//        var acc=[];
//      //  var index=[];
//       acc.push(snap.val());
//      if(snap.val().position=="Teacher"){
//        $("#jobcategory").append(` <div class="col-xl-6 col-md-6 col-12">
//        <div class="div2 p-2 mb-3 mx-auto">
//            <div class="row">
//                <div class="col-3 ">
//                    <img src="${snap.val().img}">
//                </div>
//                <div class="col-9">
//                    <a href="#">${snap.val().company}</a><br><span>${snap.val().position}</span>
//                </div>
//            </div>
//        </div>
//    </div>	 `)
////         console.log(acc);
// }
//    
//    //   for(i=0;i<acc.length;i++){
//    //     $("#jobcategory").append(` <div class="col-xl-6 col-md-6 col-12">
//    //     <div class="div2 p-2 mb-3 mx-auto">
//    //         <div class="row">
//    //             <div class="col-3 ">
//    //                 <img src="${snap.val("img")}">
//    //             </div>
//    //             <div class="col-9">
//    //                 <a href="#">${snap.val("company")}</a><br><span>${snap.val("position")}</span>
//    //             </div>
//    //         </div>
//    //     </div>
//    // </div>	 `)
//    //   }
//     
//       
//      })
//  }


  (function(){
      root.on("child_added",snap=>{
        //var allData=[];
        $("#jobcategory").append(` <div class="col-xl-6 col-md-6 col-12">
        <div class="div2 p-2 mb-3 mx-auto">
            <div class="row">
                <div class="col-3 ">
                    <img src="${snap.val().img}">
                </div>
                <div class="col-9">
                    <a href="#">${snap.val().company}</a><br><span>${snap.val().position}</span>
                </div>
            </div>
        </div>
    </div>	 `)
        

      })
  }());