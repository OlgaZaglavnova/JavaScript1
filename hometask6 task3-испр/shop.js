'use strict';
let shop = {
    basketProds: [],
    basketColumns: ['Наименование', 'вид', 'цена', ' ', 'количество', ""],
    /**
     * Функция возвращает индекс элемента массива, 
     * соответствующего продукту, если он есть в массиве,
     * и null, если такого продукта в корзине нет.
     * @param {Object} prod 
     */
    searchProdInBasket(prod){
        return this.basketProds.find(prodI => prodI.prodId === prod.prodId);
    },
    /**
     * Функция для добавления продукта в корзину.
     * @param {*} prod 
     */
    append2Basket(prod){
        let prodInBasket = this.searchProdInBasket(prod);
        if (prodInBasket){
            prodInBasket.count++;
        } else {
            prod.count = 1;
            this.basketProds.push(prod);
        };
        console.log(this.basketProds);
    },
    /**
     * Метод добавляет элемент корзины в HTML-разметку страницы
     */
    addBasket(){
        let basketHTML = `<a href="#" class="shopHeader clearFix" title="Перейти в корзину">
                          <i class="fa fa-shopping-basket basket"></i>
                          </a>`;
        let container = document.querySelector('.container');
        container.insertAdjacentHTML('afterbegin', basketHTML);
        //обработчик клика
        let basket = document.querySelector('.shopHeader');
        basket.addEventListener('click', function(event){
            shop.createBasketHTML();
        });
    },
    /**
     * Метод установки обработчикв событий нажатия для отдельной кнопки
     * @param {Button} btnObj 
     */
    setBtnEvent(btnObj){
        btnObj.addEventListener('click', function(){
            let prodId = +btnObj.dataset.productid;
            let prod = products.find(prodI => prodI.prodId === prodId);
            shop.append2Basket(prod);
        })
    },
    /**
     * Метод установки обработчиков событий нажатия для всех кнопок
     */
    setBtnsEventClick(){
        let buyBtns = document.querySelectorAll("button");
        buyBtns.forEach(element => this.setBtnEvent(element));
    },
    /**
     * Метод формирования разметки HTML карт товаров
     */
    addProductCard(){
        let prodCardsHTML = "";
        products.forEach(prod => {
            //блок карты товара
            prodCardsHTML += `<div class="productCard`;
            if (prod.productAvailability != "в наличии"){
                prodCardsHTML +=  ` productIsNotAvailable`;
            } 
            prodCardsHTML += `">`;
            // название
            prodCardsHTML += `<h2>${prod.productName}</h2>`;
            //картинка
            prodCardsHTML += `<img src="${prod.productImg}">`;
            //цена
            if (prod.productAvailability == "в наличии"){
                prodCardsHTML += "<h3>" + prod.productPrice + " " + prod.productValue +"</h3>";
            }
            //статус - в наличии/отсутствует
            prodCardsHTML += `<p>${prod.productAvailability}</p>`;
            //кнопка Купить
            if (prod.productAvailability == "в наличии"){
                prodCardsHTML += `<button class="buyButton" data-productId="${prod.prodId}">Купить</button>`;
            };
            prodCardsHTML += `</div>`;
        });
        let container = document.querySelector('.container');
        container.insertAdjacentHTML('afterbegin', prodCardsHTML);
    },
/**
 * Метод инициализации магазина
 */
    initShopHTML(){
        //Подключение fontawesome
        document.head.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">`);
        this.addProductCard();
        this.addBasket();
        this.setBtnsEventClick();
    },
    /**
     * функция возвращает итоговую сумму выбранных товаров
     */
    getSum(){
        let sum = 0;
        this.basketProds.forEach(elem => {
            sum += elem.productPrice * elem.count;
        });
        return sum;
    },
    /**
     * метод для добавления кода HTML корзины
     */
    createBasketHTML(){
        let basketInnerHTML = `<div class="basketBck" id="basketBck">
                                    <div class="basketDiv">
                                        <div class="basketCloseBtn">
                                            <a href="#" class="closeA">&times</a>
                                        </div>`;
        basketInnerHTML +=`<table><tr>`;
        //заголовки
        this.basketColumns.forEach(elem => {
            basketInnerHTML +=`<th>${elem}</th>`;
        });
        basketInnerHTML +=`</tr>`;
        //товары
        this.basketProds.forEach(elem => {
            if (elem.count > 0) {
                basketInnerHTML +=`<tr id="tr${elem.prodId}">`;
                //название продукта
                basketInnerHTML +=`<td>${elem.productName}</td>`;
                //изображение
                basketInnerHTML +=`<td><img src=${elem.productImg} class="basketImg"></td>`;
                // цена
                basketInnerHTML +=`<td>${elem.productPrice}</td>`;
                //валюта
                basketInnerHTML +=`<td>${elem.productValue}</td>`;
                //количество
                basketInnerHTML +=`<td id="basketCount${elem.prodId}">${elem.count}</td>`;
                //delete element
                basketInnerHTML +=`<td><a href="#" class="deleteBasketElem" data-id=${elem.prodId}>&times</a></td>`;
                //закрываем строку
                basketInnerHTML +=`</tr>`;
            }
        });
        basketInnerHTML +=`</table>`;
        basketInnerHTML +=`<p id="summary">Итого : ${this.getSum()} руб.</p>`;
        basketInnerHTML +=`</div></div>`;
        let container = document.querySelector('.container');
        container.insertAdjacentHTML('beforeend', basketInnerHTML);
        //у
        this.setBasketCloseBtnClick();
        this.setDeleteBasketProdClick();
    },
    /**
     * метод устанавливает обработчик события click для кнопки закрытия корзины
     */
    setBasketCloseBtnClick(){
        let basketCloseBtn = document.querySelector('.basketCloseBtn');
        basketCloseBtn.addEventListener('click', function(){
            shop.closeBasketHTML();
        });
    },
    
    /**
     * метод для удаления блока корзины в HTML 
     */
    closeBasketHTML(){
        console.log('close Btn');
        document.getElementById('basketBck').remove();
    },
    /**
     * Метод устанавливает обработчик события click всем кнопкам удаления товара из таблицы
     */
    setDeleteBasketProdClick(){
        let delProdBtns = document.querySelectorAll('.deleteBasketElem');
        delProdBtns.forEach(btn => btn.addEventListener('click', function(event){
            shop.deleteBasketProd(event);
        }));
    },
    /**
     * Метод для удаления товара из корзины
     */
    deleteBasketProd(event){
        let delProdId = +event.target.dataset.id;
        let delProd = shop.basketProds.find(prodI => prodI.prodId === delProdId);
        delProd.count--;
        if (delProd.count <= 0){
            document.getElementById(`tr${delProdId}`).remove();
        }
        else{
            document.getElementById(`basketCount${delProdId}`).innerHTML = delProd.count;
        }
        document.getElementById('summary').innerText = `Итого : ${shop.getSum()} руб.`;
    },
};
//инициализация магазина
shop.initShopHTML() ;