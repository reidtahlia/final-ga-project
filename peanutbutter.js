// GLOBAL VARIABLES
const nlModal = document.querySelector("#pb-modal");
const nlForm = document.querySelector("#pb-modal-signup");
const nlFormSubmitBtn = document.querySelector("#pb-modal-submit");
const nlCloseBtn = document.querySelector("#modal-close-btn");
const nlSuccessModal = document.querySelector("#success-modal");
const nlSuccessCloseBtn = document.querySelector("#success-modal-closebtn");

const menuOne = document.querySelector("#menu-1");
const menuOneBtn = document.querySelector("#menu-1-button");

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

// gets key value from localStorage
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


// function quizCardFlip() {
//   for (let i=0; i < quizItems.length; i++ ) {
//       const quizItem = quizItems[i];
//       quizItem.addEventListener('click', () => {
//       console.log(quizItem);
//       quizItem.style.transform = "rotateY(180deg)";
//         })
//     }
// }
 
const quizItems = document.querySelectorAll('.pb-jars');
for (let i=0; i < quizItems.length; i++ ) {
  const quizItem = quizItems[i];
  quizItem.addEventListener('click', (event) => {
    console.log(event);
    quizItem.style.transform = "rotateY(180deg)";
  })
}


// EVENT LISTENERS
nlForm.addEventListener("submit", nlSignUp);
nlCloseBtn.addEventListener("click", nlClose);
nlSuccessCloseBtn.addEventListener("click", nlSuccessClose);

// menuOneBtn.addEventListener("mouseover", menuOneShow);
// menuOne.addEventListener("mouseleave", menuHide);
