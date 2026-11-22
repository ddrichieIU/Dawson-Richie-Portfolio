/* =========================================
   DAWSON RICHIE — PORTFOLIO
   JAVASCRIPT
========================================= */

// MOBILE NAVIGATION

document.body.classList.add("js-ready");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

function closeMenu() {
  navigation?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

menuButton?.addEventListener("click", () => {
  const isOpen =
    menuButton.getAttribute("aria-expanded") !== "true";

  menuButton.setAttribute("aria-expanded", String(isOpen));
  navigation?.classList.toggle("is-open", isOpen);
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const desktopQuery = window.matchMedia("(min-width: 761px)");

desktopQuery.addEventListener("change", closeMenu);


// COPYRIGHT YEAR

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});


// COPY EMAIL

const copyButton = document.querySelector(".copy-email");

copyButton?.addEventListener("click", async () => {
  const status = document.querySelector(".copy-status");

  try {
    await navigator.clipboard.writeText("ddrichie@iu.edu");

    if (status) {
      status.textContent = "Email address copied.";
    }

    copyButton.textContent = "Copied ✓";

    setTimeout(() => {
      copyButton.textContent = "Copy email address";

      if (status) {
        status.textContent = "";
      }
    }, 3000);

  } catch {
    if (status) {
      status.textContent = "Please copy: ddrichie@iu.edu";
    }
  }
});


// HERO VIDEO / REDUCED MOTION

const heroVideo = document.querySelector(".hero-video");

const reducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

const heroVideoSource = heroVideo?.getAttribute("src");

function updateHeroMotion() {
  if (!heroVideo || !heroVideoSource) return;

  if (reducedMotionQuery.matches) {
    heroVideo.removeAttribute("src");
  } else if (!heroVideo.getAttribute("src")) {
    heroVideo.setAttribute("src", heroVideoSource);
  }
}

updateHeroMotion();

reducedMotionQuery.addEventListener("change", updateHeroMotion);