var prevscroll = 0;
var isScrolling;
var check = 0;
var running = 0;
var robotPosition = 1;
var rotationCheckPoint = 0;
var angle = 0;
var zzzz = 0;
var windowSize = screen.width;
var move;
function loadingEnd(){
  console.log('loaded');
    document.getElementById('load').style.display = "none";
    document.getElementById('fakecontent').style.display = "block";
    document.getElementsByTagName('main')[0].style.opacity = "1";
  }
window.onload= function(){
  loadingEnd();
}
function scrollWinRight() {
  destroy();
  move = setInterval(function(){
  window.scrollBy(0,5);},1);
}
function scrollWinLeft() {
  destroy();
  move = setInterval(function(){
  window.scrollBy(0,-5);},1);
}
function destroy(){
  clearInterval(move);
}
function liftminiSayak(){
  if(document.body.clientWidth > 768){
    //lifting sayak
      if($(window).scrollTop()>1770 && $(window).scrollTop()<2530){
        $('#miniSayak').css("margin-bottom","230px");
      }else if($(window).scrollTop()>3969 && $(window).scrollTop()<4284){
            $('#miniSayak').css("margin-bottom","100px");
        }else if($(window).scrollTop()>4285 && $(window).scrollTop()<5750){
            $('#miniSayak').css("margin-bottom","50px");
        }else {
            $('#miniSayak').css("margin-bottom","0px");
        }
        //changing leg position while lifting
        if(($(window).scrollTop()>2520 && $(window).scrollTop()<2540) || ($(window).scrollTop()>1760 && $(window).scrollTop()<1780) || ($(window).scrollTop()>3959 && $(window).scrollTop()<3979) || ($(window).scrollTop()>4274 && $(window).scrollTop()<4294)){
          $("#miniSayak-slides").css("left","-400px");
        }
    }else if(document.body.clientWidth > 641){
        //lifting sayak
      if($(window).scrollTop()>1770 && $(window).scrollTop()<2300){
        $('#miniSayak').css("margin-bottom","168px");
      }else if($(window).scrollTop()>4112 && $(window).scrollTop()<4430){
          $('#miniSayak').css("margin-bottom","100px");
      }else if($(window).scrollTop()>4430 && $(window).scrollTop()<5928){
        $('#miniSayak').css("margin-bottom","50px");
      }else {
          $('#miniSayak').css("margin-bottom","0px");
      }
      //changing leg position while lifting
      if(($(window).scrollTop()>4102 && $(window).scrollTop()<4122) && ($(window).scrollTop()>4420 && $(window).scrollTop()<4440)){
        $("#miniSayak-slides").css("left","-400px");
      }
    }else if(document.body.clientWidth > 376){
        //lifting sayak
      if($(window).scrollTop()>4222 && $(window).scrollTop()<4534){
          $('#miniSayak').css("margin-bottom","100px");
      }else if($(window).scrollTop()>4534 && $(window).scrollTop()<6035){
        $('#miniSayak').css("margin-bottom","50px");
      }else {
          $('#miniSayak').css("margin-bottom","0px");
      }
      //changing leg position while lifting
      if(($(window).scrollTop()>4212 && $(window).scrollTop()<4232) && ($(window).scrollTop()>4524 && $(window).scrollTop()<4544)){
        $("#miniSayak-slides").css("left","-400px");
      }
    }else{
      if($(window).scrollTop()>4306 && $(window).scrollTop()<4623){
          //lifting sayak
          $('#miniSayak').css("margin-bottom","100px");
      }else if($(window).scrollTop()>4623 && $(window).scrollTop()<6120){
        $('#miniSayak').css("margin-bottom","50px");
      }else {
          $('#miniSayak').css("margin-bottom","0px");
      }
      if(($(window).scrollTop()>1760 && $(window).scrollTop()<1780) || ($(window).scrollTop()>2290 && $(window).scrollTop()<2310) || ($(window).scrollTop()>4296 && $(window).scrollTop()<4316) || ($(window).scrollTop()>4613 && $(window).scrollTop()<4633)){
        $("#miniSayak-slides").css("left","-400px");
      }
    }
}
function showframes(){
  if(document.body.clientWidth > 768){
    //lifting sayak
      if($(window).scrollTop()>4485 && $(window).scrollTop()<5750){
          $('#chandannagar').css("margin-top","-460px");
          $('#frame1').css("margin-top","-708px");
        }else {
            $('#chandannagar').css("margin-top","-800px");
            $('#frame1').css("margin-top","-800px");
        }
        //changing leg position while lifting
    }else if(document.body.clientWidth > 641){
        //lifting sayak
      if($(window).scrollTop()>4530 && $(window).scrollTop()<5928){
        $('#chandannagar').css("margin-top","-460px");
        $('#frame1').css("margin-top","-708px");
      }else {
        $('#chandannagar').css("margin-top","-800px");
        $('#frame1').css("margin-top","-800px");
      }
    }else if(document.body.clientWidth > 376){
      if($(window).scrollTop()>4634 && $(window).scrollTop()<6035){
        $('#chandannagar').css("margin-top","-460px");
        $('#frame1').css("margin-top","-708px");
      }else {
        $('#chandannagar').css("margin-top","-800px");
        $('#frame1').css("margin-top","-800px");
      }
    }else{
        if($(window).scrollTop()>5023 && $(window).scrollTop()<6120){
          $('#chandannagar').css("margin-top","-460px");
          $('#frame1').css("margin-top","-708px");
        }else {
          $('#chandannagar').css("margin-top","-800px");
          $('#frame1').css("margin-top","-800px");
      }
    }
}
function changeSayak(){
  //resize thenrobot somesituation
  if(document.body.clientWidth > 768){
      if($(window).scrollTop()>3405 && $(window).scrollTop()<3700){
          $("#miniSayak-slides").css("left","-600px");
      }
  }else if(document.body.clientWidth > 641){
    if($(window).scrollTop()>3291 && $(window).scrollTop()<3861){
        $("#miniSayak-slides").css("left","-600px");
    }
  }else if(document.body.clientWidth > 376){
    if($(window).scrollTop()>3405 && $(window).scrollTop()<3975){
        $("#miniSayak-slides").css("left","-600px");
    }
  }else{
    if($(window).scrollTop()>3513 && $(window).scrollTop()<4083){
        $("#miniSayak-slides").css("left","-600px");
    }
  }
}
function animateRun(){
  var run = setInterval(function(){
    if(1 == running){
      if(robotPosition == 1){
        $("#miniSayak-slides").css("left","-200px");
        robotPosition = 2;
      }else{
        $("#miniSayak-slides").css("left","0px");
        robotPosition = 1;
      }
    }else {
      $("#miniSayak-slides").css("left","0px");
    }
  },200);
}
function onResizeWindow() {
    var newWindowSize = document.body.clientWidth;
    var difference = newWindowSize - windowSize;
    $("#maincontent").css("left", -$(window).scrollTop()+difference/2);//move background with mouseScroll
    $("#background").css("left", -$(window).scrollTop()-difference*30/100);
    //$("#clouds").css("left", -$(window).scrollTop()-difference*60/100);
    windowSize = document.body.clientWidth;
}
//$(window).on('resize',onResizeWindow);
$(window).on('scroll', function() {
  $("#glitters").css("display","none");
  $("#maincontent").css("bottom", 0);
  $("#background").css("bottom",0);
  $("#cloud-container").css("bottom", 0);
  $("#frames").css("bottom", 0);
  $("#flame").css("margin-left","-88px");
  $("#flame").css("margin-top", "-25px");
  $("#flame").css("transform","rotateY(0deg)");
  $("#flame").css("opacity",0);
  running = 1;
  check = 1;
  if($(window).scrollTop()>0 && $(window).scrollTop()<8000){
    $("#rocket").css("transform","rotate(0deg)");
    $("#miniSayak").css("transform","rotate(0deg)");
    $("#maincontent").css("left", -$(window).scrollTop());//move background with mouseScroll
    $("#background").css("left", -($(window).scrollTop())*30/100);
    $("#cloud-container").css("left", -($(window).scrollTop())*60/100);
    $("#rocket-container").css("left", -$(window).scrollTop());
    $("#frames").css("left", -$(window).scrollTop());
    rotationCheckPoint = 0;
  }else if($(window).scrollTop()>8000 && $(window).scrollTop()<(8000 + document.body.clientHeight*10)){
    running = 0;
    $("#flame").css("opacity",.98);
    $("#rocket").css("transform","rotate(0deg)");
    $("#miniSayak").css("transform","rotate(0deg)");
    $("#rocket-container").css("left", -8000);
    $("#maincontent").css("bottom", 8000-$(window).scrollTop());
    $("#background").css("bottom", 8000-$(window).scrollTop());
    $("#cloud-container").css("bottom", 8000-$(window).scrollTop());
    $("#frames").css("bottom", 8000-$(window).scrollTop());
    rotationCheckPoint = 0;
  }else if($(window).scrollTop()>(8000 + document.body.clientHeight*10) && $(window).scrollTop()<(16000 + document.body.clientHeight*10)){
    running = 0;
    $("#flame").css("opacity",.98);
    //rotate rocket horizontaly and changing it's direction
    if(($(window).scrollTop())<prevscroll){
      $("#rocket").css("transform","rotate(-90deg)");
      $("#miniSayak").css("transform","rotate(-90deg)");
      $("#flame").css("transform","rotate(-90deg)");
      $("#flame").css("transform","rotate(-90deg)");
      $("#flame").css("margin-left","190px");
      $("#flame").css("margin-top","-290px");
    }else{
      $("#rocket").css("transform","rotate(90deg)");
      $("#miniSayak").css("transform","rotate(90deg)");
      $("#flame").css("transform","rotate(90deg)");
      $("#flame").css("margin-left","-360px");
      $("#flame").css("margin-top","-290px");
    }
    $("#rocket-container").css("left", -8000);
    $("#maincontent").css("bottom",-document.body.clientHeight*10);
    $("#background").css("bottom", -document.body.clientHeight*10);
    $("#cloud-container").css("bottom", -document.body.clientHeight*10);
    $("#frames").css("bottom", -document.body.clientHeight*10);
    //below move background with mouseScroll
    $("#maincontent").css("left",document.body.clientHeight*10 -$(window).scrollTop());
    $("#background").css("left", document.body.clientHeight*10-($(window).scrollTop())*30/100);
    $("#cloud-container").css("left",document.body.clientHeight*10 -($(window).scrollTop())*60/100);
    $("#frames").css("left",document.body.clientHeight*10 -$(window).scrollTop());
    rotationCheckPoint = 1;
  }else if($(window).scrollTop()>=(16000 + document.body.clientHeight*10)){
    running = 0;
    $("#flame").css("opacity",.98);
    if(document.body.clientHeight*20 + 16000 - $(window).scrollTop() > 1.5*document.body.clientHeight){
        if(($(window).scrollTop())<prevscroll){
          $("#rocket").css("transform","rotate(-60deg)");
          $("#miniSayak").css("transform","rotate(-60deg)");
          $("#flame").css("transform","rotate(-60deg)");
          $("#flame").css("margin-left","130px");
          $("#flame").css("margin-top","-160px");
        }else{
          $("#rocket").css("transform","rotate(120deg)");
          $("#miniSayak").css("transform","rotate(120deg)");
          $("#flame").css("transform","rotate(120deg)");
          $("#flame").css("margin-left","-300px");
          $("#flame").css("margin-top","-420px");
        }
        rotationCheckPoint = 1;
    }else{
       $("#rocket").css("transform","rotate(0deg)");
       $("#miniSayak").css("transform","rotate(0deg)");
    }
    $("#rocket-container").css("left", -8000);
    $("#maincontent").css("bottom",-document.body.clientHeight*10);
    $("#background").css("bottom", -document.body.clientHeight*10);
    $("#cloud-container").css("bottom", -document.body.clientHeight*10);
    $("#frames").css("bottom", -document.body.clientHeight*10);
    //below move background with mouseScroll
    if(document.body.clientHeight*20 + 16000 - $(window).scrollTop() > 0){
      $("#maincontent").css("left",document.body.clientHeight*10 -$(window).scrollTop());
      $("#background").css("left", document.body.clientHeight*10-($(window).scrollTop())*30/100);
      $("#cloud-container").css("left",document.body.clientHeight*10 -($(window).scrollTop())*60/100);
      $("#frames").css("left",document.body.clientHeight*10 -$(window).scrollTop());
      $("#maincontent").css("bottom", -document.body.clientHeight*10 - (16000 + document.body.clientHeight*10 - $(window).scrollTop()));
      $("#background").css("bottom", -document.body.clientHeight*10 - (16000 + document.body.clientHeight*10 - $(window).scrollTop()));
      $("#cloud-container").css("bottom", -document.body.clientHeight*10 - (16000 + document.body.clientHeight*10 - $(window).scrollTop()));
      $("#frames").css("bottom", -document.body.clientHeight*10 - (16000 + document.body.clientHeight*10 - $(window).scrollTop()));
    }else{
        running = 1;
        $("#flame").css("opacity",0);
        $("#maincontent").css("left",document.body.clientHeight*10 -$(window).scrollTop());
        $("#background").css("left", document.body.clientHeight*10-($(window).scrollTop())*30/100);
        $("#cloud-container").css("left",document.body.clientHeight*10 -($(window).scrollTop())*60/100);
        $("#frames").css("left",document.body.clientHeight*10 -$(window).scrollTop());
        $("#rocket-container").css("left", -8000 + (document.body.clientHeight*20 + 16000 - $(window).scrollTop()));
        $("#maincontent").css("bottom", 0);
        $("#background").css("bottom", 0);
        $("#cloud-container").css("bottom", 0);
        $("#frames").css("bottom", 0);
        if(document.body.clientHeight*20 + 16000 - $(window).scrollTop() < -1800){
          $("#glitters").css("display","block");
        }
    }
  }
  //below setting robot's face direction
  if(($(window).scrollTop())<prevscroll){
    $("#miniSayak-slides").css("top","-200px");
  }else{
    $("#miniSayak-slides").css("top","0px");
  }
    //below code to findout when user stop Scrolling
    window.clearTimeout( isScrolling );
        isScrolling = setTimeout(function() {
      		// Run the callback when scrolling is stop
          running = 0;
      	}, 100);
        liftminiSayak();
        changeSayak();
        showframes();
  /*  window.clearTimeout( isScrolling );
      isScrolling = setTimeout(function() {
    		// Run the callback when scrolling is stop
        $("#miniSayak-slides").css("left","-200px");
        setTimeout(function () {
          $("#miniSayak-slides").css("left","0px");
        },250);
    		console.log( 'Scrolling has stopped.' );
    	}, 50);*/
      //below code to change miniSayak's position
      /*if($(window).scrollTop() > 600 && $(window).scrollTop() < 650){
        $("#miniSayak-slides").css("left","-400px");
      }else{
        $("#miniSayak-slides").css("left","-200px");
      }
      if($(window).scrollTop() > 600 && $(window).scrollTop() < 800){

        $('#miniSayak').css("bottom","40vh");
      }else{

        $('#miniSayak').css("bottom","19.9vh");
      }
      if($(window).scrollTop() > 800 && $(window).scrollTop() < 850){
        $("#miniSayak-slides").css("left","-400px");
      }else{
        $("#miniSayak-slides").css("left","-200px");
      }*/
      prevscroll = $(window).scrollTop();
  });
animateRun();