let hamburger = document.querySelector('.menu');
let toolbar =document.getElementById('.mobile-menu');

hamburger.addEventListener('click',()=>{
    toolbar.classList.remove('display-none');
});

let closeMenu =document.getElementById('close-menu');
closeMenu.addEventListener('click', ()=>{
    toolbar.classList.add('display-none');
});
let links = document.querySelectorAll('.menu-links');

for (let i=0; i<links.length ; i++){
    links[i].addEventListener('click',()=>{
        toolbar.classList.add('mobile-menu');
    });
}