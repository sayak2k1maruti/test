var activeFilter = 0;
		var limit = 6;
		function doChange(element,i){
			$('.filters').attr('class','filters');
			$(element).attr('class','filters pressed');
			activeFilter = i;
			console.log(activeFilter);
			submitForm(element);
		}
		var months = ['None','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		$("#testt").append(createArticleBox("Title Test","Description Test","27 Jun","2020","python","@sayak","../images/python.jpg"));
		console.log(createArticleBox("Title Test","Description Test","27 Jun","2020","python","@sayak","../images/python.jpg"));
		$(document).ready(function(){
			$("header").load("../HTML/nav.html");
			$("aside").load("../HTML/aside.html");
			$("footer").load("../HTML/footer.html");
			$("#slide-show").load("codeGallerySlideShow.html");
			$('#search').autocomplete({
            	source: "tags.php"
        	});
        	$.ajaxSetup({cache:false});
			$.get( "www.sayak.byethost33.com/codeGallery/list.php", {search : "" , filter : activeFilter} ).done(
					function(data){
						var parseData = JSON.parse(data);
						$('.article-box-container').html(parseData);
						for (var i = 0; i<limit && i < parseData.length; i++) {
							var title = parseData[i]['title'];
							var description = parseData[i]['description'];
							var date = parseData[i]['publish_time'].substring(8,10) + months[parseInt(parseData[i]['publish_time'].substring(5,7),10)];
							var year = parseData[i]['publish_time'].substring(0,4);
							var language = parseData[i]['language'];
							var author = parseData[i]['author'];
							var image = parseData[i]['image_url'];
							var url = parseData[i]['url'];
							$('.article-box-container').append(createArticleBox(title,description,date,year,language,author,image,url));
						}
					}
				);
		});
		function loadMore(element){
			limit+=6;
			submitForm(element);
		}
		function submitForm(element){
			$.ajaxSetup({cache:false});
			$.get( "http://www.sayak.byethost33.com/codeGallery/list.php", {search : $("#search").val() , filter : activeFilter} ).done(
					function(data){
						var parseData = JSON.parse(data);
						if(parseData.length <= limit){
							$("#loadMore").attr('class',"vanish");
							console.log("wwwqqq");
						}
						$('.article-box-container').html(parseData);
						for (var i = 0;i<limit && i < parseData.length; i++) {
							var title = parseData[i]['title'];
							var description = parseData[i]['description'];
							var date = parseData[i]['publish_time'].substring(8,10) + months[parseInt(parseData[i]['publish_time'].substring(5,7),10)];
							var year = parseData[i]['publish_time'].substring(0,4);
							var language = parseData[i]['language'];
							var author = parseData[i]['author'];
							var image = parseData[i]['image_url'];
							var url = parseData[i]['url'];
							$('.article-box-container').append(createArticleBox(title,description,date,year,language,author,image,url));
					}
				}
				);
		}	
