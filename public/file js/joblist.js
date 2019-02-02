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
 
	//create a variable point to root of database in firebase
	const root = firebase.database().ref().child("Job");
 
	//use on() to get data 
	root.on("child_added", snap => {
		var position = snap.child('position').val();
		var company = snap.child('company').val();
		 var img=snap.child('img').val();
 
		  $("#box").append(`
					 <div class="col-xl-6 col-md-6 col-12 ">
						 <div class="div2 p-2 mb-3 mx-auto shadow grow">
							 <div class="row">
								 <div class="col-3 ">
									 <img src="${img}">
								 </div>
								  <div class="col-9">
								  <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg" >${position}</a><br><span>${company}</span>
								  
								  </div>
								  </div>
								  </div>
								  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
								  <div class="modal-dialog modal-lg">
								  <div class="modal-content">
								  <div class="modal-header">
								  <h5 class="modal-title"><img src="${img}">${company} l</h5>
								  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
								  <span aria-hidden="true">&times;</span>
					 </button>
				 </div>  
				 <div class="text-center">
					 <h2>Please read carefully about the job detail <span class="text-info h1">!</span></h2>
				 </div>
				 <div class="p-3 m-2 bg-success text-white h5">Company description</div>
				 <div class="mx-2  text-justify">
					 Nippon Express  continue  expand  globe, achieving  five-point framework across Japan,  Americas  Europe,  stretching into  rapidly developing markets  East Asia, South Asia  Oceania. We see our  as  logistics consultant, providing one-stop business solutions that connect people  companies beyond national  regional boundaries, through diverse logistics modes, integrating land, air,  marine transport  current 43 Countries 262 Cities 700 Locations 20,741 Employees.  
					 With dynamic  business growing, our Nippon Express (Cambodia) Co,Ltd. has now seeking highly qualified processional  fill  the  below:
				 </div>
				 <div class="p-3 m-2 bg-success text-white h5">Announcement Position</div>
				 <div class="text-success h5 mx-2">Accountant <hr></div>
				 <div class="mx-2"><i class="fas fa-map-marker-alt"></i> Location: Mean Chey, Phnom Penh</div>
				 <div class="mx-2"><i class="far fa-calendar-alt"></i> Schedule: Full time</div>
				 <div class="mx-2"><i class="fas fa-dollar-sign"></i> Salary: N/A</div>
				 <div class="text-success h6 mx-2">Resposibilities</div>
				 <div>
					 <ul>
						 <li>Lead and manage team and accounting staff, including selection/hiring, objective setting, performance management, coaching and training.</li>
						 <li>Responsible for the monthly close as well as maintenance of all accounting ledgers including monthly review of all account reconciliations and journal entries.</li>
						 <li>Manage company tax declaration such as monthly tax return, personal tax on salary, withholding tax, VAT and deal with tax government officer.</li>
					 </ul>
				 </div>
				 <div class="text-success h6 mx-2">Requirements</div>
				 <div>
					 <ul>
						 <li>Bachelor degree or Master degree in Accounting or Finance.</li>
						 <li>At least three years experiences with accounting and financial field.</li>
						 <li>Strong supervisory, organizational skills and computer skills.</li>
						 <li>Must be PC proficient and have strong experience with Quick Books & Microsoft Office</li>
					 </ul>
				 </div>
				 <div class="text-success h5 mx-2">Application Informations <hr></div>
				 <div class="mx-2">
					 Interested candidate, Please submit you CV and Covering Letter with stating your expected salary via Email or office address below. Only shortlist candidates will be notified and contacted by phone for interview. The documents reveived will not be returned.
					 <br><br>Benefits and Condition <br><br>
					 <ul>
						 <li>Working Time 8:00 ~ 17:30, Lunch break: 12:00 ~ 13:30  </li>
						 <li>Working Days Monday ~ Friday, Saturday: Half day  </li>
						 <li>Holiday: Legal holiday  </li>
						 <li>Salary increasing & Bonus base on performance.  </li>
						 <li>Annual and Sick Leave: We follow by labor law in Cambodia  </li>
						 <li>Insurance: Hospital - Surgical Insurance and Personal Accident 24 hours Insurance</li>
					 </ul>
				 </div>
				 <div class="text-success h5 mx-2">Contact Information <hr></div>
				 <div class="mx-2">
					 THE GREAT DUKE HOTEL, 2nd Floor Regency Complex C, Unit No C2/6, Preah Monivong Blvd, Sangkat Tomnoub Teouk, Khan Chamkarmon, Phnom Penh
					 <div class="my-1">
						 <span class="h6 text-success">Contact <br></span>
						 <i class="far fa-building"></i> Nippon Express (Cambodia)Co.,Ltd
					 </div>
					 <div class="my-1">
						 <span class="h6 text-success">Phone <br></span>
						 <i class="fas fa-phone"></i> (+855) 010 896 863 <br>
						 <i class="fas fa-phone"></i> (+855) 085 766 180
					 </div>
					 <div my-1> 
						 <span class="h6 text-success">Email <br></span>
						 <i class="fas fa-envelope"></i> dara.vivork@gmail.com
					 </div>
					 <div class="modal-footer">
		 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		 <button type="button" class="btn btn-primary">Apply</button>
	   </div>
	 </div>
				 </div>
			 </div>
		 </div>
	 
	 
									 
						 
					 </div>				
		 `);
	});
  }());