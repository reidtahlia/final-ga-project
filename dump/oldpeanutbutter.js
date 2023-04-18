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
    localStorage.setItem("submittedNLForm", "true");
  }
  
  // gets key value from localStorage
  const item = localStorage.getItem("submittedNLForm");
  // console.log(item);
  // checks if item/localStorage item exists/is false
  // if false run timeOut to open modal
  if (!item || item === "false") {
    // after 2 seconds display flex the newsletter modal
    setTimeout(() => {
      nlModal.style.setProperty("display", "flex");
    }, 2000);
  }
  
  // EVENT LISTENERS
  nlForm.addEventListener("submit", nlSignUp);
  nlCloseBtn.addEventListener("click", nlClose);
  nlSuccessCloseBtn.addEventListener("click", nlSuccessClose);


// DROPDOWN

// const menuOne = document.querySelector('#menu-1');
// const menuOneBtn = document.querySelector('#menu-1-button');

// function menuOneShow(){
//     menuOne.classList.add('show');
// }

// function menuHide() {
//     menuOne.classList.remove('show');
// }

// menuOneBtn.addEventListener('mouseover', menuOneShow);
// menuOne.addEventListener('mouseleave', menuHide);


// OLD JS CODE FOR MODAL. 
// const nlModal = document.querySelector('#pb-modal')
// const nlForm = document.querySelector('#pb-modal-signup')
// const nlSignUpBtn = document.querySelector('#pb-modal-submit')
// const nlCloseBtn = document.querySelector('#modal-close-btn')
// const nlSuccessModal = document.querySelector('#success-modal-success-modal')


// // how to add a function for modal to open on page load?? As well as make it load shortly after page has loaded.

// function nlSignUp(event) {
//     event.preventDefault()
//     const inputName = document.querySelector('#name');
//     const inputEmail = document.querySelector('#email');
//     // console.log(inputEmail.value);
//     // if users inputs info + clicks submit, then what? 

// }

// function nlClose() {
//     // console.log(nlCloseBtn);
//     nlModal.style.display = 'none';
// }

// // function successModal() {
// //     nlSuccessModal.style.display = 'block'
// // }

// //separate function that adds text in middle of screen. 
// // document.createElement etc. (create li element, set the text / class name etc and append to the body. display absolute. top / left 50%. 

// // shopping cart page array + loop. 

// nlForm.addEventListener('submit', nlSignUp);
// nlCloseBtn.addEventListener('click', nlClose);
// // nlSignUpBtn.addEventListener('click', successModal);