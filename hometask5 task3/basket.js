'use strict'
let basket = {
    basketProducts: [],
    basketColumns: ['Наименование', 'вид', 'цена', 'валюта', 'количество'],
    
    
    showBasket(){
        let basketTable = document.createElement('table');
        //заголовки
        let basketHead = document.createElement('tr');
        this.basketColumns.forEach(elem => {
            let basketHeadCol = document.createElement('th');
            basketHeadCol.innerText = elem;
            basketHead.appendChild(basketHeadCol);
        });
        basketTable.appendChild(basketHead);
        //товары
        this.basketProducts.forEach(elem => {
            let prodRow = document.createElement('tr');
            //
            let prodColName = document.createElement('td');
            prodColName.innerText = elem.productName;
            prodRow.appendChild(prodColName);
            //
            let prodColPic = document.createElement('td');
            let prImg = document.createElement('img');
            prImg.classList.add('basketImg');
            prodColPic.appendChild(prImg);
            prodRow.appendChild(prodColPic);
            //
            let prodColPrice = document.createElement('td');
            prodColPrice.innerText = elem.productPrice;
            prodRow.appendChild(prodColPrice);
            //
            let prodColValue = document.createElement('td');
            prodColValue.innerText = elem.productValue;
            prodRow.appendChild(prodColValue);
            //
            let prodColCount = document.createElement('td');
            prodColCount.innerText = elem.count;
            prodRow.appendChild(prodColCount);
            //
            basketTable.appendChild(prodRow);
        });
        document.body.insertAdjacentElement('afterbegin',basketTable);
    },
};
if(document.title == "Basket"){
    shop.basketProds.forEach(elem => {
        basket.basketProducts.push(elem);
    });
    basket.basketProducts = 
    basket.showBasket();
};
