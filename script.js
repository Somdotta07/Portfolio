/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-loop-func */

const hamburger = document.querySelector('.hamburger');
const toolbar = document.querySelector('.mobile-menu');
const form = document.getElementById('contact');
const errorMsg = document.getElementById('text');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMsg = document.getElementById('msg');

const projectCard = [
  {
    name: 'Multi Post Stories',
    image: 'media/pop-up-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Bootstrap', 'Ruby on Rails'],
    link: '#',
    source: '#',
  },
];

// Mobile menu
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

//  ---Object declaration----//

const openButton = document.querySelectorAll('.modal-btn');
const container = document.querySelector('.container');
const backdrop = document.createElement('div');
const modal = document.createElement('div');

function addElement() {
  backdrop.classList.add('backdrop');
  document.body.insertBefore(backdrop, container);
  // Modal
  modal.classList.add('modal');
  const headingContainer = document.createElement('div');
  headingContainer.classList.add('headingContainer');
  modal.appendChild(headingContainer);
  // Heading
  const heading = document.createElement('h2');
  heading.textContent = projectCard[0].name;
  headingContainer.appendChild(heading);
  // Technologies
  const technologies = document.createElement('ul');
  technologies.classList.add('technologies-container');
  modal.appendChild(technologies);
  // Tech groups
  const techList1 = document.createElement('li');
  techList1.textContent = projectCard[0].technologies[0];
  techList1.classList.add('techlist');
  technologies.appendChild(techList1);
  const techList2 = document.createElement('li');
  techList2.textContent = projectCard[0].technologies[1];
  techList2.classList.add('techlist');
  technologies.appendChild(techList2);
  const techList3 = document.createElement('li');
  techList3.textContent = projectCard[0].technologies[2];
  techList3.classList.add('techlist');
  technologies.appendChild(techList3);
  // container
  const prjContainer = document.createElement('div');
  prjContainer.classList.add('prj-container');
  modal.appendChild(prjContainer);
  // Img container
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  modal.appendChild(imageContainer);
  // image
  const image = document.createElement('img');
  image.classList.add('modal-image');
  image.src = projectCard[0].image;
  imageContainer.appendChild(image);
  // paragraph
  const description = document.createElement('p');
  description.textContent = projectCard[0].description;
  description.classList.add('modal-description');
  imageContainer.appendChild(description);
  // Button desktop
  const buttonContainerdesk = document.createElement('div');
  buttonContainerdesk.classList.add('button-actionsdesk');
  description.appendChild(buttonContainerdesk);
  // Button 1
  const button1desk = document.createElement('button');
  button1desk.setAttribute('type', 'button');
  button1desk.classList.add('buttonLinkdesk');
  button1desk.innerHTML = 'See Live <img src= "media/Icon.png"> ';
  button1desk.href = projectCard[0].link;
  buttonContainerdesk.appendChild(button1desk);
  // Button 2
  const button2desk = document.createElement('button');
  button2desk.setAttribute('type', 'button');
  button2desk.classList.add('buttonSourcedesk');
  button2desk.href = projectCard[0].source;
  button2desk.innerHTML = 'See Source <i class="fab fa-github"></i>';
  buttonContainerdesk.appendChild(button2desk);
  // Buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-actions');
  modal.appendChild(buttonContainer);
  // Button 1
  const button1 = document.createElement('button');
  button1.setAttribute('type', 'button');
  button1.classList.add('buttonLink');
  button1.innerHTML = 'See Live <img src= "media/Icon.png"> ';
  button1.href = projectCard[0].link;
  buttonContainer.appendChild(button1);
  // Button 2
  const button2 = document.createElement('button');
  button2.setAttribute('type', 'button');
  button2.classList.add('buttonSource');
  button2.href = projectCard[0].source;
  button2.innerHTML = 'See Source <i class="fab fa-github"></i>';
  buttonContainer.appendChild(button2);
  document.body.insertBefore(modal, container);

  // Cross Button
  const closeButton = document.createElement('img');
  closeButton.classList.add('closeBtnImg');
  closeButton.src = 'media/crossBtn.png';
  headingContainer.appendChild(closeButton);
  closeButton.addEventListener('click', () => {
    modal.remove();
    backdrop.remove();
  });
}

openButton.forEach((event) => {
  event.addEventListener('click', () => {
    addElement();
  });
});

// Email validation

form.addEventListener('submit', (event) => {
  const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (inputEmail.value.match(pattern)) {
    errorMsg.innerHTML = 'This is a valid Email';
    errorMsg.style.color = '#00ff00';
  } else {
    event.preventDefault();
    errorMsg.innerHTML = 'Error Email Not Valid: You must use lowercase in the email field';
    errorMsg.style.color = '#ff0000';
  }
});

// preserve data in the browser

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