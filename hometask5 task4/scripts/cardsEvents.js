'use strict';
let cardsEvents = {
buttons: document.querySelectorAll('button'),

getCardNumber(event){
    let btnId = event.target.id;
    return prodNumber = btnId.replace('btn', "");
},
rotateProdImg(event){
    let prodN = getCardNumber(event);
    let prodImg = document.querySelector('#img' + prodN);
    let prodDesc = document.querySelector('#desc' + prodN);
    prodImg.classList.add('hidden');
    prodDesc.classList.remove('hidden')
},
addBtnClickEvent(){
    this.buttons.forEach(function(btn){
        btn.addEventListener('click', rotateProdImg(event));
    })
}
}
