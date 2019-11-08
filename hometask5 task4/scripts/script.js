'use strict';
let init = function(){
    let cardsCount = Number(prompt("Введите количество товаров (целое число от 1 до 100"));
    if (cardsCount > 0 && cardsCount <101 && Number.isInteger(cardsCount)){
        cardsCreater.createHTMLcode(cardsCount);
        return;
    } else{
        alert ("Введено значение вне диапазона");
        init();
    }
}
init();