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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}