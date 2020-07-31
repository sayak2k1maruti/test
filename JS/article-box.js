backgroundColors = ["rgba(217, 66, 20, 0.44)","rgba(99, 217, 19, 0.44)","rgba(19, 152, 217, 0.44)","rgba(164, 19, 217, 0.44)"];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function pointeroverChanges(){
				$(".article-box-image").css("height","100%");
				$('.article-box-description').css("background-color","rgba(0, 0, 0, 0.42)");
				$(".article-box-language").css("display","none");
				$('.description').css("display","block");
				$('.article-box-description').css("color","#fff");
				$('.author').css("color","#fff");
				$('.article-box-description').css("height","75%");
				$(".article-box-image").css("opacity",".7");
				$(".article-box-container").css("background-color",shuffle(backgroundColors)[0]);
			}
function pointeroutChanges(){
				$(".article-box-image").css("height","60%");
				$('.article-box-description').css("background-color","#ffffff");
				$(".article-box-language").css("display","block");
				$('.description').css("display","none");
				$('.article-box-description').css("color","#00000091");
				$('.author').css("color","#1b919d");
				$('.article-box-description').css("height","40%");
				$(".article-box-image").css("opacity","1");
				$(".article-box-container").css("background-color","rgba(0, 0, 0, 0.44)");
			}
function createArticleBox(title,description,date,year,language,author,images,url){
	var divition = "<div onclick = \"$(location).attr('href', '"+ url +"')\" class=\"article-box\">			<div class=\"article-box-image\"><img src=\""+ images +"\" alt=\""+ title +"\">			</div>			<div class=\"article-box-description\">				<h3>"+ title +"</h3> by <span class=\"author\">"+ author +"</span>			<p class =\"description\">"+ description +"</p></div>			<div class=\"article-box-date\"><h3>"+ date +"</h3>"+ year +"</div>			<div class=\"article-box-language\">" + language + "</div>		</div>		<script>			$('.article-box').on('pointerover',pointeroverChanges);			$('.article-box').on('pointerout',pointeroutChanges);</script>"; 
		return divition;
	}
$(document).ready(function(){
	function changebk(){
		$(".article-box-container").css("background-color",shuffle(backgroundColors)[0]);
		setTimeout(changebk, 1000);
	}
	if(document.body.clientWidth < 378 ){
		changebk();
	}
})