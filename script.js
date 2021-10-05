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

const details = {
  name: '',
  description: '',
  image: '',
  technologies: [],
  link:'',
  source: '',
}


const openButton = document.getElementById('open');
const projectContainer = document.querySelector('.project-container');
let backdrop;
let modal;
function closeModal() {
  if (backdrop) {
    backdrop.remove();
  }
}

openButton.addEventListener('click', () => {
  // backdrop
  backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  backdrop.addEventListener('click', closeModal);
  document.body.insertBefore(backdrop, projectContainer);
// Modal

  modal = document.createElement('div');
  modal.classList.add('modal');
  //Heading
  const heading = document.createElement('h3');
  heading.textContent = 'Multi Post Stories';
  modal.appendChild(heading);
  //Technologies
  const technologies = document.createElement('ul');
  technologies.classList.add('technologies-container');
  modal.appendChild(technologies);

  const techList1 = document.createElement('li');
  techList1.textContent('HTML');
  techList1.classList.add('techlist');
  technologies.appendChild(techList1);

  const techList2 = document.createElement('li');
  techList2.textContent('CSS');
  techList2.classList.add('techlist');
  technologies.appendChild(techList2);

  const techList3 = document.createElement('li');
  techList3.textContent('JAVASCRIPT');
  techList3.classList.add('techlist');
  technologies.appendChild(techList3);

  //paragraph
  const description = document.createElement('p');
  description.textContent(details.description);
  description.classList.add('modal-description');
  modal.appendChild(description);
  //image
  const image = document.createElement('image');
  image.classList.add('modal-image');
  modal.appendChild(image);
  //Buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-actions');
  modal.appendChild(buttonContainer);
    //Button 1
    const buttton1 = document.createElement('button');
    buttton1.setAttribute('type', 'button');
    buttton1.classList.add('buttonLink');
    buttonContainer.appendChild(button1);

    const button2 = document.createElement('button');
    button2.setAttribute('type', 'button');
    buttton2.classList.add('buttonSource');
    buttonContainer.appendChild(button2);

  
    document.body.insertBefore(modal, projectContainer);
})