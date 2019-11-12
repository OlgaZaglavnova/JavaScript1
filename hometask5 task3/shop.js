'use strict';
let shop = {
    basketProds: [],
    basketColumns: ['Наименование', 'вид', 'цена', 'валюта', 'количество'],
    /**
     * Функция возвращает индекс элемента массива, 
     * соответствующего продукту, если он есть в массиве,
     * и null, если такого продукта в корзине нет.
     * @param {Object} prod 
     */
    prodInBasket(prod){
        for (let i = 0; i <= this.basketProds.length - 1; i++){
            if (prod.prodId === this.basketProds[i].prodId){
                return i;
            };
        };
        return null;
    },
    /**
     * Функция для добавления продукта в корзину.
     * @param {*} prod 
     */
    appendBasket(prod){
        let basketProductIdx = this.prodInBasket(prod);
        if (basketProductIdx != null){
            this.basketProds[basketProductIdx].count++;
        } else {
            prod.count = 1;
            this.basketProds.push(prod);
        };
        console.log(this.basketProds);
    },
    addBasket(){
        let basket = document.createElement('a');
        //basket.href = "basket.html";
        basket.href = "#";
        //basket.target = '_blank';
        basket.title = "Перейти в корзину";
        basket.addEventListener('click', function(event){
            console.log(this.basketProds);
            shop.createBasketHTML();
        });
        let basketI = document.createElement('i');
        basketI.classList.add("fa", "fa-shopping-basket", 'basket');
        basket.appendChild(basketI);
        document.body.insertAdjacentElement('afterbegin', basket);
    },
    addProductCard(prod){
        //блок карты товара
        let productCard = document.createElement('div');
        productCard.classList.add('productCard');
        // название
        let productName = document.createElement('h2');
        productName.innerText = prod.productName;
        productCard.appendChild(productName);
        //improductCardg
        let productImg = document.createElement('img');
        productImg.src = prod.productImg;
        productCard.appendChild(productImg);
        //цена
        let productPrice = document.createElement('h3');
        if (prod.productAvailability == "в наличии"){
            productPrice.innerText = prod.productPrice + " " + prod.productValue;
        }else{
            productCard.classList.add('productIsNotAvailable');
        };
        productCard.appendChild(productPrice);
        //в наличии
        let productAvail = document.createElement('p');
        productAvail.innerText = prod.productAvailability;
        productCard.appendChild(productAvail);
        //кнопка Купить
        if (prod.productAvailability == "в наличии"){
            let buyBtn = document.createElement('button');
            buyBtn.classList.add('buyButton');
            buyBtn.dataset.productId = prod.prodId;
            buyBtn.innerText = "Купить";
            productCard.appendChild(buyBtn);
            buyBtn.addEventListener('click', function(event){
                let prodId = event.target.dataset.productId;
                let buyProd ={};
                for (let j = 0; j < products.length; j++){
                    if (products[j].prodId == prodId){
                        buyProd = products[j];
                        break;
                    }
                };
                //
                if (buyProd != {}){
                    shop.appendBasket(buyProd);
                    this.innerText = "В корзине";
                };
            });
        }
        //добавим карту товара в документ
        let container = document.querySelector('.container');
        container.appendChild(productCard);
    },
    /*
    putProd2basket(event){
        prodId = event.target.dataset.productId;
        let buyProd ={};
        for (let j = 1; j < products.length; j++){
            if (products.prodId === prodId){
                buyProd =products[j];
            }
        };
        basket.appendBasket(buyProd);
    },*/
    initShopHTML(){
        //Подключение fontawesome
        document.head.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">`);
        this.addBasket();
        products.forEach(elem => {
            this.addProductCard(elem);
        });
/*
        for (let i = products.length - 1; i >= 0; i--){
            this.addProductCard(products[i]);
        };
*/
    },
    getSum(){
        let sum = 0;
        this.basketProds.forEach(elem => {
            sum += elem.productPrice * elem.count;
        });
        return sum;
    },
    createBasketHTML(){
        let basketDiv = document.createElement('div');
        basketDiv.classList.add('basketDiv');
        let basketCloseBtn = document.createElement('div');
        basketCloseBtn.classList.add('basketCloseBtn');
        basketCloseBtn.addEventListener('click', function(){
            shop.closeBasketHTML();
        });
        //basketCloseBtn.innerText = `&#10006;`;
        basketDiv.appendChild(basketCloseBtn);
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
        this.basketProds.forEach(elem => {
            let prodRow = document.createElement('tr');
            //
            let prodColName = document.createElement('td');
            prodColName.innerText = elem.productName;
            prodRow.appendChild(prodColName);
            //
            let prodColPic = document.createElement('td');
            let prImg = document.createElement('img');
            prImg.src = elem.productImg;
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
        basketDiv.appendChild(basketTable);
        let summary = document.createElement('p');
        summary.innerText = "Итого : " + this.getSum() + "руб.";
        basketDiv.appendChild(summary);
        let container = document.querySelector('.container');
        container.insertAdjacentElement('beforeend', basketDiv);
    },
    closeBasketHTML(){
        let BasketDiv = document.querySelector('basketDiv');
        BasketDiv.parentNode.removeChild(BasketDiv);
        
    }
};
shop.initShopHTML() ;