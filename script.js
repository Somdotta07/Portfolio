// Mobile menu
const hamburger = document.querySelector('.hamburger');
const toolbar = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
  toolbar.classList.remove('display-mobile');
});
const closeMenu = document.querySelector('header .mobile-menu .close-menu a');
closeMenu.addEventListener('click', () => {
  toolbar.classList.add('display-mobile');
});
const links = document.querySelectorAll('header .mobile-menu ul li a');
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    toolbar.classList.add('display-mobile');
  });
}

// Email validation
const form = document.getElementById('contact-form');
const errorMsg = document.getElementById('text');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (email.value.match(pattern)) {
    errorMsg.innerHTML = 'This is a valid Email';
    errorMsg.style.color = '#00ff00';
  } else {
    event.preventDefault();
    errorMsg.innerHTML = 'Error Email Not Valid: You must use lowercase in the email field';
    errorMsg.style.color = '#ff0000';
  }
});

// preserve data in the browser
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMsg = document.getElementById('msg');
const submitBtn = document.getElementById('submit-btn');
const formSt = [];

const addForm = (event) => {
  event.preventDefault(); // to stop the form submitting
  const data = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMsg.value,
  };
  formSt.push(data);

  localStorage.setItem('Form Information', JSON.stringify(formSt));
};

document.addEventListener('DOMContentLoaded', () => {
  submitBtn.addEventListener('click', addForm);
});