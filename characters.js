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