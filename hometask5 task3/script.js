'use strict';
let btn = document.querySelector('.openModalBtn');
let modalBackground = document.querySelector('.modalBackground');
let modalWindow = document.querySelector('.modalWindow');
let closeCross = document.querySelector('.closeCross');
btn.addEventListener('click', function(event){
    modalWindow.classList.remove('zoomOutUp');
    modalWindow.classList.add('zoomInDown');
    modalBackground.classList.remove('hidden');
});
closeCross.addEventListener('click', function(event){
    modalWindow.classList.remove('zoomInDown');
    modalWindow.classList.add('zoomOutUp');
    setTimeout(function(){
        modalBackground.classList.add('hidden');
    }, 1000);
    
});