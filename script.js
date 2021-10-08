/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-loop-func */

const hamburger = document.querySelector('.hamburger');
const toolbar = document.querySelector('.mobile-menu');
const form = document.getElementById('contact-form');
const errorMsg = document.getElementById('text');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMsg = document.getElementById('msg');

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

const projectCard = [
  {
    name: 'Tonic',
    image: 'media/image.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: '#',
    source: '#',
  },

  {
    name: 'Multi Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'media/layout2nd.png',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: '#',
    source: '#',
  },

  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'media/layout2nd.png',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: '#',
    source: '#',
  },

  {
    name: 'Multi Post Stories ',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'media/layout2nd.png',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: '#',
    source: '#',
  },
];

//  ---Object declaration----//
const openButton = document.querySelectorAll('.modal-btn');
const container = document.querySelector('.container');
let backdrop;

openButton.forEach((event) => {
  event.addEventListener('click', () => {
    backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    document.body.insertBefore(backdrop, container);
    // Modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    // Heading
    const heading = document.createElement('h2');
    heading.textContent = projectCard[0].name;
    modal.appendChild(heading);
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
    // image
    const image = document.createElement('img');
    image.classList.add('modal-image');
    image.src = projectCard[0].image;
    modal.appendChild(image);
    // paragraph
    const description = document.createElement('p');
    description.textContent = projectCard[0].description;
    description.classList.add('modal-description');
    modal.appendChild(description);
    // Buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-actions');
    modal.appendChild(buttonContainer);
    // Button 1
    const button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.classList.add('buttonLink');
    button1.textContent = 'See Live';
    button1.href = projectCard[0].link;
    buttonContainer.appendChild(button1);
    // Button 2
    const button2 = document.createElement('button');
    button2.setAttribute('type', 'button');
    button2.classList.add('buttonSource');
    button2.href = projectCard[0].source;
    button2.textContent = 'See Source';
    buttonContainer.appendChild(button2);
    document.body.insertBefore(modal, container);

    // Cross Button
    const closeButton = document.createElement('img');
    closeButton.classList.add('closeBtnImg');
    closeButton.src = 'media/crossBtn.png';
    modal.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
      modal.remove();
      backdrop.remove();
    });
  });
});

// openButton.forEach((event) => {
//   event.addEventListener('click', () => {
//     addElement();
//   });
// });

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