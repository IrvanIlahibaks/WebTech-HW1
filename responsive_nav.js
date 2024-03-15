/* from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
Change css from responsive and back by clicking the hamburger button.
*/
function myResponsive() {
  var zz = document.getElementById("navbar");
  if (zz.className === "navbar") {
    zz.className += " responsive";
  } else {
    zz.className = "navbar";
  }
}

