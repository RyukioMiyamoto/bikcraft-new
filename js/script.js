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
