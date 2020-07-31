function doSubmission(){
			var name = $("#name").val();
			var email = $("#email").val();
			var title  = $("#title").val();
			var message = $("#message").val();
			if(doValidation()){
				if(message.length > 0){
					$("#messageErr").html("");

				}else{
					console.log("jhgghfghf");
					$("#messageErr").html("Please leave some message . <span class = 'blink' >. . </span>");
				}		
			}
		}
		function validate(){
			if(doValidation()){
				$("#submit").css("display","block");
			}else{
				$("#submit").css("display","none");
			}
		}
		function doValidation(){
			var name = $("#name").val();
			var email = $("#email").val();
			var title  = $("#title").val();
			var message = $("#message").val();
			if(name.length < 3){
				$("#nameErr").html("Name must be 3 char long . . <span class = 'blink' >.</span>");
			}else if(email.length < 1){
				$("#nameErr").html("");
				$("#emailErr").html("Email filed is required . . <span class = 'blink' >.</span>");
			}else if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
				$("#nameErr").html("");
				$("#emailErr").html("");
				$("#emailErr").html("Invalid Email Address . . <span class = 'blink' >.</span>");
			}else{
				$("#nameErr").html("");
				$("#emailErr").html("");
				$("#emailErr").html("");
				return 1;
			}
			return 0;
		}
		function initMap() {
  			// The location of Uluru
  			var uluru = {lat: 22.57, lng: 88.36};
  			// The map, centered at Uluru
  			var map = new google.maps.Map(
      		document.getElementById('map'), {zoom: 4, center: uluru});
  			// The marker, positioned at Uluru
  			var marker = new google.maps.Marker({position: uluru, map: map});
}
		$(document).ready(function(){
			$("header").load("../HTML/nav.html");
			$("aside").load("../HTML/aside.html");
			$("footer").load("../HTML/footer.html");
			initMap();
		}
		)