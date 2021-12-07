// Hightlighting currently active/open page
const links = document.querySelectorAll(".header-menu a");

function activePage(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activePage);

// Inheriting parameters from previous item page

const parameters = new URLSearchParams(location.search);
function activateItem(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activateItem);

// FAQ accordion
const faqs = document.querySelectorAll(".faq button");

function showAccordion(e) {
  const faq = e.currentTarget;
  const controls = faq.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  faq.setAttribute("aria-expanded", active);

  console.log(faq, controls, answer);
}

function faqEvents(faq) {
  faq.addEventListener("click", showAccordion);
}

faqs.forEach(faqEvents);
