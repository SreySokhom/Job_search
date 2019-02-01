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
					<div class="col-xl-6 col-md-6 col-12">
						<div class="div2 p-2 mb-3 mx-auto">
							<div class="row">
								<div class="col-3 ">
									<img src="${img}">
								</div>
								 <div class="col-9">
									<a href="#" data-toggle="modal" data-target=".bd-example-modal-xl" >${position}</a><br><span>${company}</span>



									<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
										<div class="modal-dialog modal-xl">
											<div class="modal-content">
											<div class="modal-header">
											<h3 class="modal-title" id="exampleModalLongTitle">${img},${company}</h3>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											<h4>Position : ${position}</h4> 
											<div><h5>location</h5>#3 Boeng Prolit 7makara </div>
											<div><h5>Job Description<h5></div>
											<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facilis pariatur tenetur est praesentium eius. <br> Totam fuga inventore veniam deleniti quisquam nisi facere perferendis delectus deserunt, quidem sequi eius et a tempore maiores laborum sit id <br>dignissimos ea dicta. Dolore a quidem necessitatibus voluptates officiis commodi labore pariatur minima voluptas magnam et hic eum, aliquid dolorem officia nesciunt? <br>Obcaecati culpa veniam totam voluptatum? Saepe modi optio voluptatum temporibus, fugiat atque ipsa iusto, assumenda eveniet consequuntur laborum perspiciatis quos aliquam.<br> Eum ipsa maxime fugiat corporis quisquam animi, sunt mollitia earum veniam minima quis officia repellat, dignissimos facere saepe vero repudiandae ullam? Hic nisi voluptatum doloremque, enim numquam maxime,<br> aliquid repudiandae magnam dolorem deserunt error et harum veniam vitae, 
											</p>
											<h5> Requirement <h5>
											<p>
											rem nulla cumque vero alias eum. Qui ab nesciunt facere et ut libero harum fuga sapiente sunt cupiditate nisi recusandae pariatur, consequuntur doloribus dicta, illum sequi accusamus distinctio rem? Doloremque, libero tenetur suscipit velit ex adipisci consequuntur excepturi. <br>Facere ad quo, dolorem dolor, similique quae ullam voluptates nemo hic quisquam autem? Quasi doloribus necessitatibus quidem quae ipsum suscipit ratione enim, rem distinctio. Delectus aliquid, debitis maiores rem quasi, quas tempore tempora fugiat veritatis pariatur enim dignissimos,<br> totam dolore voluptatem at iste corrupti voluptatibus!
											</p>
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
						</div>
					</div>				
		`);
   });
 }());