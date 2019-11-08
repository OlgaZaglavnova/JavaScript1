'use strict';
let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    this.classList.add("buttonOnClick");
    chessFigures.setChessFigures();
});
btn.addEventListener('mouseleave', function(){
    this.classList.remove("buttonOnClick");
    chessFigures.setChessFigures();
});