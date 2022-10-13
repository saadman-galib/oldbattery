const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

// function toggleNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

var navBtn = document.querySelector('.nav-btn')
var navListContainer = document.querySelector('.nav-items')
var contactContainer = document.querySelector('.contact')


var a = 0

navBtn.addEventListener("click", function(){
    // if (a <=0){
    //     navListContainer.style.left = '100vw'
    //     a += 1 
    // }
    // else{
    //     pass
    // }
    // console.log('Hi')
    if (navListContainer.style.left == '0px'){
      navListContainer.style.left = '-100vw';
      contactContainer.style.left = '-100vw';
    }

    else{
      navListContainer.style.left = "0px";
      contactContainer.style.left = '0px';
    }
});