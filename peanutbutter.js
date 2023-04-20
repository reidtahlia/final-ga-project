// GLOBAL VARIABLES
const nlModal = document.querySelector("#pb-modal");
const nlForm = document.querySelector("#pb-modal-signup");
const nlFormSubmitBtn = document.querySelector("#pb-modal-submit");
const nlCloseBtn = document.querySelector("#modal-close-btn");
const nlSuccessModal = document.querySelector("#success-modal");
const nlSuccessCloseBtn = document.querySelector("#success-modal-closebtn");
const pbQuizSmoothJar = document.querySelector('.pb-jar-smooth');
const pbQuizSmoothPersonality = document.querySelector('.pb-quiz-personality-smooth');
const pbQuizCrunchyJar = document.querySelector('.pb-jar-crunchy');
const pbQuizCrunchyPersonality = document.querySelector('.pb-quiz-personality-crunchy');
const burgerBtn = document.querySelector('#burger-button');
const mainNav = document.querySelector('#main-nav');

function nlSignUp(event) {
  event.preventDefault();
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  // console.log(inputEmail.value);
  nlSuccessShow();
}

// remove display property from inline html so css display none kicks in again
function nlClose() {
  nlModal.style.removeProperty("display");
}

function nlSuccessClose() {
  nlSuccessModal.style.removeProperty("display");
}

// adds inline display: flex; to override element's display none
function nlSuccessShow() {
  nlSuccessModal.style.setProperty("display", "flex");
  nlClose();

  // adds key and value to localStorage to save whether user has signed up for a newsletter
  localStorage.setItem("nlSignUpSuccess", "true");
}

// gets key value from localStorage. Conditional statements to determine signup success or no
const nlInfo = localStorage.getItem("nlSignUpSuccess");
// console.log(nlInfo);
// checks if info/localStorage item exists/is false
// if false run timeout to open modal
if (!nlInfo || nlInfo === "false") {
  // after 2 seconds display flex the newsletter modal
  setTimeout(() => {
    nlModal.style.setProperty("display", "flex");
  }, 2000);
}

// EVENT LISTENERS
nlForm.addEventListener("submit", nlSignUp);
nlCloseBtn.addEventListener("click", nlClose);
nlSuccessCloseBtn.addEventListener("click", nlSuccessClose);

// QUIZ FLIPSSSS
// get array of card elements
const cards = document.querySelectorAll(".flip-card-inner");
// console.log(cards)

// loop over array and toggle .rotate class on element
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  // console.log(card)
  card.addEventListener("click", () => card.classList.toggle("rotate"));
}

// SIDE MENU

(function() {
  burgerBtn.addEventListener('click', function () {
    mainNav.classList.toggle('menu-open')
  })
}()) 