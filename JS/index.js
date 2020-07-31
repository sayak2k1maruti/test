function move(){
    var element = document.getElementsByClassName("backgroundContainer");
    element[0].addEventListener("mousemove",(e) =>{
    element[0].style.backgroundPositionX =-(e.offsetX/screen.width)*25 + "px";
    
})  
}
function openNavigation(){
    var elemrnt = document.getElementsByClassName('navigationDrawer');
    if(elemrnt[0].style.display == "none"){
        elemrnt[0].style.display == "fixed";
    }else{
        elemrnt[0].style.display == "none";
    }
}
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByClassName('navigationBar')[0].className = "navigationBar navigationBarCollaspe";
      document.getElementsByClassName("backgroundContainer")[0].style.height = "50vh";
      document.getElementsByClassName("welcomeText")[0].style.display = "none";
      
    } else {
        document.getElementsByClassName('navigationBar')[0].className = "navigationBar";
        document.getElementsByClassName("backgroundContainer")[0].style.height = "100vh";
        document.getElementsByClassName("welcomeText")[0].style.display = "block";
  }
}
function openNavigation(){
    var elemrnt = document.getElementsByClassName("navigationDrawer");
    var hamburger = document.getElementById("hamburger");
    if(elemrnt[0].style.display != "block"){
        elemrnt[0].style.display = "block";
            hamburger.className = "hamburger hamburger--spin is-active";
        }else{
        elemrnt[0].style.display = "none";
        hamburger.className = "hamburger hamburger--spin";
     }
}
function closeDrawer(){
    var elemrnt = document.getElementsByClassName("navigationDrawer");
    var hamburger = document.getElementById("hamburger");
        elemrnt[0].style.display = "none";
        hamburger.className = "hamburger hamburger--spin";
}
function openDrawer(){
    var elemrnt = document.getElementsByClassName("navigationDrawer");
    var hamburger = document.getElementById("hamburger");
        elemrnt[0].style.display = "block";
        hamburger.className = "hamburger hamburger--spin is-active";
}
$(document).ready(function(){
    $("#launchResume").click(function(){
        $("#popup1").css("display","block");
    });
    $("#closePopup").click(function(){
        $("#popup1").css("display","none");
    });
    $("#computer-screen").click(function(){
        $("#popup1").css("display","none");
    });
    $("aside").load("HTML/aside.html");
    $("footer").load("HTML/footer.html");
}
);