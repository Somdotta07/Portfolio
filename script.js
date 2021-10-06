/* eslint-disable prefer-destructuring */
/* eslint-disable no-loop-func */
/* eslint-disable linebreak-style */
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

// --POP-UP

const projectCard = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'media/image.png',
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
const openButton = document.getElementById('open');// all the buttons
const container = document.querySelector('.container');
let backdrop;
// let modal;

//  --For loop----
// function closeModal() {
//   if (backdrop) {
//     backdrop.remove();
//   }
// }
for (let i = 0; i < projectCard.length; i += 1) {
  openButton.addEventListener('click', () => {
    backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    // backdrop.addEventListener('click', closeModal);
    document.body.insertBefore(backdrop, container);
    // Modal

    const modal = document.createElement('div');
    modal.classList.add('modal');
    // Heading
    const heading = document.createElement('h2');
    heading.textContent = projectCard[i].name;
    modal.appendChild(heading);
    // Technologies
    const technologies = document.createElement('ul');
    technologies.classList.add('technologies-container');
    modal.appendChild(technologies);

    const techList1 = document.createElement('li');
    techList1.textContent = projectCard[i].technologies[0];
    techList1.classList.add('techlist');
    technologies.appendChild(techList1);

    const techList2 = document.createElement('li');
    techList2.textContent = projectCard[i].technologies[1];
    techList2.classList.add('techlist');
    technologies.appendChild(techList2);

    const techList3 = document.createElement('li');
    techList3.textContent = projectCard[i].technologies[2];
    techList3.classList.add('techlist');
    technologies.appendChild(techList3);

    // paragraph
    const description = document.createElement('p');
    description.textContent = projectCard[i].description;
    description.classList.add('modal-description');
    modal.appendChild(description);
    // image
    const image = document.createElement('img');
    image.classList.add('modal-image');
    image.src = projectCard[i].image;
    modal.appendChild(image);
    // Buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-actions');
    modal.appendChild(buttonContainer);
    // Button 1
    const button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.classList.add('buttonLink');
    button1.textContent = 'Live link';
    button1.href = projectCard[i].link;
    buttonContainer.appendChild(button1);

    const button2 = document.createElement('button');
    button2.setAttribute('type', 'button');
    button2.classList.add('buttonSource');
    button2.href = projectCard[i].source;
    button2.textContent = 'Source link';
    buttonContainer.appendChild(button2);

    document.body.insertBefore(modal, container);
  });
}


//Email validation

function validation() {
  const form = document.querySelector('.contact-form');
  const email = document.getElementById('mail').value;
  const text = document.getElementById('text');
  const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

}