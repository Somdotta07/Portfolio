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
  technologies.appendChild(modal);
 for (let key in Object){
   let li =document.createElement('li');
   li.textContent= this.technologies;
   li.appendChild(technologies)
 }
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
  
})