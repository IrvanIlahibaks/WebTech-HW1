/* from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
Change css from responsive and back by clicking the hamburger button.
*/
function myResponsive() {
  var zz = document.getElementById("myNavigatie");
  if (zz.className === "navigatie") {
    zz.className += " responsive";
  } else {
    zz.className = "navigatie";
  }
}