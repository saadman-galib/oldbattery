const items = document.querySelectorAll(".accordion button");
var navBtn = document.querySelector(".nav-btn");
var navListContainer = document.querySelector(".nav-items");
var contactContainer = document.querySelector(".contact");
var aboutBtn = document.querySelector(".about-btn");
var productBtn = document.querySelector(".product-btn");
var faqBtn = document.querySelector(".faq-btn");

function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
    }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

var a = 0;

navBtn.addEventListener("click", function () {
    if (navListContainer.style.left == "0px") {
        navListContainer.style.left = "-100vw";
        contactContainer.style.left = "-100vw";
    } else {
        navListContainer.style.left = "0px";
        contactContainer.style.left = "0px";
    }
});

aboutBtn.addEventListener("click", () => {
    navListContainer.style.left = "-100vw";
    contactContainer.style.left = "-100vw";
});

productBtn.addEventListener("click", () => {
    navListContainer.style.left = "-100vw";
    contactContainer.style.left = "-100vw";
});

faqBtn.addEventListener("click", () => {
    navListContainer.style.left = "-100vw";
    contactContainer.style.left = "-100vw";
});
