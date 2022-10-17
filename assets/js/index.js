//scoll behavior
window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");

  } else {
    navBar.classList.remove("pa-fixed-header");
  }
}
//popup
document.addEventListener("DOMContentLoaded", () => {
      setTimeout(showPopup, 300)
  });
document.addEventListener("click", () => {
    hidePopup();
});
  const popup = document.getElementById("wrapper");

function showPopup() {
    popup.style.display = "block"
}
function hidePopup() {
    popup.style.zIndex = -2;
}

var words = ['Programmer', 'Athlete', 'Gym buddy', 'Curious','Full Stack Developer'];
var counter = 0;
var word = document.getElementById("carousel-words");
document.addEventListener("DOMContentLoaded", () => {
  setInterval(update_carousel_words, 1000)
});


function update_carousel_words() {
  word.innerHTML = words[counter];
  counter++;
  if(counter >= words.length){
    counter = 0;
  }
}