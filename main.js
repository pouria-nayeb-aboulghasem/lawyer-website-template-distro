// step 1: menu
const menu = document.querySelector("#menu"),
  closeMobileMenu = document.querySelector("#close-mobile-menu"),
  openMobileMenu = document.querySelector("#open-mobile-menu");

if (openMobileMenu) {
  openMobileMenu.addEventListener("click", () => {
    menu.classList.add("menu-active");
  });
}

if (closeMobileMenu) {
  closeMobileMenu.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
}

// step 2: link
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
});

// step 3: header
const header = document.querySelector("#header");

window.addEventListener("scroll", (e) => {
  this.scrollY >= 25
    ? header.classList.add("header-active")
    : header.classList.remove("header-active");
});

// active links

const sections = document.querySelectorAll("[data-section]");

window.addEventListener("scroll", () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav-menu a[href*=${sectionId}]`,
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active");
    } else {
      sectionsClass.classList.remove("active");
    }
  });
});

// step 4: swiper

const swiperCase = new Swiper(".case-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  spaceBetween: 16,
  speed: 600,
  effect: "creative",
  creativeEffect: {
    limitProgress: 2,
    prev: {
      translate: ["-100%", 0, 0],
      scale: 0.85,
    },
    next: {
      translate: ["100%", 0, 0],
      scale: 0.85,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});

// faq
const questionCards = document.querySelectorAll(".question-card"),
  questionButtons = document.querySelectorAll(".question-button");

questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentCard = button.closest(".question-card"),
      isOpen = currentCard.classList.contains("question-open");

    questionCards.forEach((card) => {
      card.classList.replace("question-open", "question-close");
    });

    if (!isOpen) {
      currentCard.classList.replace("question-close", "question-open");
    }
  });
});

const swiperClient = new Swiper(".client-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  spaceBetween: 16,
  speed: 600,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});

const scrollbar = document.querySelector("#go-to-top");

window.addEventListener("scroll", () => {
  this.scrollY >= 350
    ? scrollbar.classList.add("active")
    : scrollbar.classList.remove("active");
});
