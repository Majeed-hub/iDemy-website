burger = document.querySelector('.burger');
nav_bar = document.querySelector('.nav-bar');
nav_list = document.querySelector('.nav-list');

burger.addEventListener("click", ()=>{
nav_list.classList.toggle('nav-visibility-resp');
nav_bar.classList.toggle("nav-height-resp");


})
