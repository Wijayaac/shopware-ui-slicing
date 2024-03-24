function headerNavigation() {
  const headerElm = document.querySelector(".header");
  if (!headerElm) {
    return;
  }

  const headerNav = document.querySelector("nav[data-visible]");
  // toggle menu
  const headerToggle = document.querySelector(".header__toggle");
  headerToggle.addEventListener("click", function () {
    let isExpanded = headerToggle.getAttribute("aria-expanded");
    if (isExpanded === "false") {
      headerToggle.setAttribute("aria-expanded", "true");
      headerNav.setAttribute("data-visible", "true");
    } else {
      headerToggle.setAttribute("aria-expanded", "false");
      headerNav.setAttribute("data-visible", "false");
    }
  });
}

headerNavigation();
