document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("welcomePopup").style.display = "block";
});
function closeWelcomePopup() {
  document.getElementById("welcomePopup").style.display = "none";
}

window.onscroll = function() {myFunction()};
     function myFunction() {
      if (document.documentElement.scrollTop > 100) {
        document.getElementById("myNavbar").classList.add("navbar-dark");
      } else {
        document.getElementById("myNavbar").classList.remove("navbar-dark");
      }
    }


var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){
  $(".container-fluid p").mouseover(function(){
      $(this).css("background-color", "#B0B0B0");
  });
});

document.addEventListener("DOMContentLoaded", function() {

  const clickSound = new Audio('sound/mech.mp3'); 

  const imtextElement = document.querySelector('.close-button');
  imtextElement.addEventListener('click', function() {
      clickSound.play();
  });
});