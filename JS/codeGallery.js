$(document).ready(function(){
			$("header").load("../../HTML/nav.html");
			$("aside").load("../../HTML/aside.html");
			$("footer").load("../../HTML/footer.html");
			//getting list of all articles
			$.get( "../list.php", {search : "" , filter : 0} ).done(
					function(data){
						var parseData = JSON.parse(data);
						for (var i = 0;i < parseData.length; i++) {
							$('.rightSide').append("<a href = \""+ parseData[i]['url'] +"\">"+ parseData[i]['title'] +"</a><br>");
						}
					}
				);
		});
