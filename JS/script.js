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
    } else {
        document.getElementsByClassName('navigationBar')[0].className = "navigationBar";
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