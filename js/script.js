/************************/
// Hightlighting currently active/open page
const links = document.querySelectorAll(".header-menu a"); // GETS ALL LINKS FROM THE NAVBAR

function activePage(link) {
  const url = location.href; // GETS CURRENT LOCATION HREF
  const href = link.href; // GETS HREF FROM LINK

  if (url.includes(href)) {
    // CHECKS IF BOTH HREF MATCH
    link.classList.add("active"); // IF THEY MATCH, ADD CLASS ACTIVE TO CURRENT LINK
  }
}

links.forEach(activePage); // RUNS THROUGH ALL LINKS FROM THE NAVBAR

// Inheriting parameters from previous item page
const parameters = new URLSearchParams(location.search); // GETS URL SEACH PARAMS

function activateItem(parameter) {
  const element = document.getElementById(parameter); // GETS HTML ELEMENT MATCHING PARAMS
  //CHECKS IF ELEMENT EXISTS
  if (element) {
    //MARKS IT AS CHECKED
    element.checked = true;
  }
}

parameters.forEach(activateItem); // RUNS THROUGH ALL PARAMS

/************************/
// FAQ accordion
const faqs = document.querySelectorAll(".faq button"); //GETS ALL BUTTONS FROM FAQ SECTION

function showAccordion(e) {
  const faq = e.currentTarget; // GETS CURRENT FAQ CLICKED
  const controls = faq.getAttribute("aria-controls"); // GETS CORRESPONDING ANSWER ID
  const answer = document.getElementById(controls); // GETS ANSWER ITSELF

  answer.classList.toggle("active"); // ACTIVATES ANSWER
  const active = answer.classList.contains("active"); // VERIFIES IF ANSWER IS ACTIVE AND SETS TO A VARIABLE
  faq.setAttribute("aria-expanded", active); // SETS ARIA-EXPANDED TO TRUE
}

function faqAddEventListener(faq) {
  faq.addEventListener("click", showAccordion); // ADDS EVENT LISTENER TO EACH QUESTION
}

faqs.forEach(faqAddEventListener); // RUNS THROUGH ALL QUESTIONS

/************************/
// Photo gallery
const gallery = document.querySelectorAll(".bicicleta-images img"); // GETS EVERY INDIVIDUAL IMAGE
const galleryContainer = document.querySelector(".bicicleta-images"); // GETS THE IMAGES CONTAINER

function changeImg(e) {
  const img = e.currentTarget; // GETS CLICKED IMAGE
  const media = matchMedia("(min-width: 1000px)").matches; // VERIFIES CURRENT FORMAT OF GALLERY
  if (media) {
    galleryContainer.prepend(img); // PUSHES CLICKED IMAGE TO START OF THE IMAGES CONTAINER
  }
}

function galleryAddEventListener(img) {
  img.addEventListener("click", changeImg); // ADDS EVENT LISTENER TO EACH IMAGE
}

gallery.forEach(galleryAddEventListener); // RUNS THROUGH ALL IMAGES IN GALLERY

new SimpleAnime();
