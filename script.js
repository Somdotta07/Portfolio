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

const addForm = (event) => {
  event.preventDefault();
  const data = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMsg.value,
  };
  localStorage.setItem('Form data', JSON.stringify(data));
};
form.addEventListener('change', addForm);
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('Form data') !== null) {
    const getData = JSON.parse(localStorage.getItem('Form data'));
    inputName.value = getData.name;
    inputEmail.value = getData.email;
    inputMsg.value = getData.message;
  }
});