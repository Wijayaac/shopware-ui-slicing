function consultationFormSubmit() {
  const form = document.querySelector(".consultation-form form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (e) {
    watchFields(form);
    e.preventDefault();
    let hasError = isValidated(form);

    if (hasError) {
      return;
    }

    // form submit
    const formData = new FormData(form);

    fetch("http://localhost:81/consultation.php", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // handle the response and UI element here
        if (data.success) {
          form.reset();
          alert("Your message has been sent successfully");
        } else {
          alert("Something went wrong. Please try again later");
        }
      })
      .catch(function (error) {
        alert("Something went wrong. Please try again later");
      });
  });
}

consultationFormSubmit();

function initVideoPlyr() {
  const videoElm = document.querySelector("#player");
  if (videoElm) {
    const videoPlayer = new Plyr("#player", {
      hideControls: true,
    });
  }
}

initVideoPlyr();

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

// social media share button
function socialMediaShare() {
  const shareBtn = document.querySelectorAll(".share-badge__button");
  if (!shareBtn[0]) {
    return;
  }

  shareBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const url = window.location.href;
      const socialMedia = btn.getAttribute("data-social-media");
      let shareUrl = "";
      switch (socialMedia) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
          break;
      }
      window.open(shareUrl, "_blank");
    });
  });
}

socialMediaShare();

function isValidated(form) {
  const requiredFields = form.querySelectorAll("[data-validation]");
  let hasError = false;

  requiredFields.forEach(function (field) {
    const fieldValue = field.value;

    if (fieldValue === "") {
      field.parentNode.classList.add("error");
      hasError = true;
    } else {
      field.parentNode.classList.remove("error");
    }
  });

  return hasError;
}

function watchFields(form) {
  const requiredFields = form.querySelectorAll("[data-validation]");

  // form error message on change
  requiredFields.forEach(function (field) {
    field.addEventListener("blur", function () {
      const fieldValue = field.value;
      if (fieldValue === "") {
        field.parentNode.classList.add("error");
      } else {
        field.parentNode.classList.remove("error");
      }
    });

    field.addEventListener("change", function () {
      const fieldValue = field.value;
      if (fieldValue === "") {
        field.parentNode.classList.add("error");
      } else {
        field.parentNode.classList.remove("error");
      }
    });
  });
}

// TODO: Add recaptcha handler
function contactFormSubmit() {
  const form = document.querySelector(".gp-cf__form form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (e) {
    watchFields(form);
    e.preventDefault();
    let hasError = isValidated(form);

    if (hasError) {
      return;
    }

    // form submit
    const formData = new FormData(form);

    fetch("http://localhost:81/index.php", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // handle the response and UI element here
        if (data.success) {
          form.reset();
          alert("Your message has been sent successfully");
        } else {
          alert("Something went wrong. Please try again later");
        }
      })
      .catch(function (error) {
        alert("Something went wrong. Please try again later");
      });
  });
}

contactFormSubmit();

function toggleProductDescription() {
  const productDescription = document.querySelector(".gp-pdp__description");
  if (!productDescription) {
    return;
  }

  const toggleBtn = productDescription.querySelector(".gp-pdp__description-toggle");
  const descriptionContent = productDescription.querySelector(".gp-pdp__description-content");
  toggleBtn.addEventListener("click", function () {
    descriptionContent.classList.toggle("is-toggled");
  });
}

toggleProductDescription();
