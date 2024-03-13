/* from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
Change css from responsive and back by clicking the hamburger button.
*/
function myFunction() {
    var navtest = document.getElementById("myNavigatie");
    if (navtest.className === "navigatie") {
      navtest.className += " responsive";
    } else {
      navtest.className = "navigatie";
    }
  }
