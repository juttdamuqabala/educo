let burger=document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let navLinks=document.querySelector('.nav-links');
let right=document.querySelector('.right');

burger.addEventListener('click',()=>{
    right.classList.toggle('v-class-resp');
    navLinks.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
