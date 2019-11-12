'use strict';
//Подключение fontawesome
document.head.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">`);
/**
 * Функция для создания разметки слайдера на странице.
 */
let initHTML = function(){
    //создадим разметку страницы
    let containerObject = document.querySelector('.container');
    let sliderObject = document.createElement('div');
    let spinner = document.createElement('i');
    let spinnerSpan = document.createElement('span');
    let sliderPic1 = document.createElement('div');
    let sliderPic2 = document.createElement('div');
    let sliderPic3 = document.createElement('div');
    let leftArrow = document.createElement('i');
    let rightArrow = document.createElement('i');
    sliderObject.classList.add('slider');
    containerObject.appendChild(sliderObject);
    //spinner
    spinner.classList.add("fa", "fa-spinner", "fa-spin", "fa-3x", "fa-fw", "spinnerPosition");
    spinnerSpan.classList.add("sr-only");
    spinnerSpan.textContent = "Загрузка...";
    sliderObject.insertAdjacentElement('afterbegin', spinnerSpan);
    sliderObject.insertAdjacentElement('afterbegin', spinner);
    //1 картинка
    sliderPic1.classList.add('sliderPic', 'sliderPic1', "animated", "hidden");
    sliderObject.appendChild(sliderPic1);
    //2 картинка
    sliderPic2.classList.add('sliderPic', 'sliderPic2', "animated", 'hidden');
    sliderObject.appendChild(sliderPic2);
    //3 картинка
    sliderPic3.classList.add('sliderPic', 'sliderPic3', "animated", 'hidden');
    sliderObject.appendChild(sliderPic3);
    //левая стрелка
    leftArrow.classList.add("fa", "fa-chevron-circle-left", 'arrow', 'leftArrow');
    sliderObject.insertAdjacentElement('beforeend', leftArrow);
    setLeftArrowEvent(leftArrow);
    //правая стрелка
    rightArrow.classList.add("fa", "fa-chevron-circle-right", 'arrow', 'rightArrow');
    sliderObject.insertAdjacentElement('beforeend', rightArrow);
    setRightArrowEvent(rightArrow);
};
/**
 * Функция для обработки события нажатия на правую стрелку сладера
 * @param {Object} rightArrow 
 */
let setRightArrowEvent = function(rightArrow){
    rightArrow.addEventListener('click', function(){
        slider.slideShiftRight();
    });
};
/**
 * Функция для обработки события нажатия на левую стрелку сладера
 * @param {Object} leftArrow 
 */
let setLeftArrowEvent = function(leftArrow){
    leftArrow.addEventListener('click', function(){
        slider.slideShiftLeft();
    });
};
// Объект слайдер
let slider = {
    // номер текущего изображения
    currentIdx: 0, 
    // все слайды
    slides: [],
    /**
     * Функция делает текущий слайд невидимым
     */
    setAllSlidesHide(){
        this.slides[this.currentIdx].classList.add('hidden');
    },
    /**
     * Функция для отображения слайда с текущим индексом
     */
    showImageWithCurrentIdx(){
        this.slides[this.currentIdx].classList.remove('hidden');
    },
    /**
     * Функция возвращает индекс следующего слайда при нажатии на кнопку "Вправо"
     */
    getNextRightSliderIdx(){
        let next = 0;
        if (this.currentIdx != this.slides.length - 1){
            next = this.currentIdx + 1;
        };
        return next;
    },
    /**
     * Функция возвращает индекс следующего слайда при нажатии на кнопку "Влево"
     */
    getNextLeftSliderIdx(){
        let next = this.slides.length - 1;
        if (this.currentIdx != 0){
            next = this.currentIdx - 1;
        };
        return next;
    },
    /**
     * Функция, удаляющая лишние классы после выполнения прокрутки
     */
    clearClassList(){
        this.slides.forEach(item => {
            item.classList.remove('slideInRight');
            item.classList.remove('slideOutLeft');
            item.classList.remove('slideOutRight');
            item.classList.remove('slideInLeft');
            if (item != this.slides[this.currentIdx]) {
                item.classList.add('hidden');
            }
        });
    },
    /**
     * Функция для сдвига слайда при нажатии на кнопку "Вправо"
     */
    slideShiftRight(){
        let nextSlideIdx = this.getNextRightSliderIdx();
        this.slides[this.currentIdx].classList.add('slideOutLeft');
        this.slides[nextSlideIdx].classList.add('slideInRight');
        this.slides[nextSlideIdx].classList.remove('hidden');
        this.currentIdx = nextSlideIdx;
        setTimeout(()=>{this.clearClassList()}, 1000);
    },
    /**
     * Функция для сдвига слайда при нажатии на кнопку "Влево"
     */
    slideShiftLeft(){
        let nextSlideIdx = this.getNextLeftSliderIdx();
        this.slides[this.currentIdx].classList.add('slideOutRight');
        this.slides[nextSlideIdx].classList.add('slideInLeft');
        this.slides[nextSlideIdx].classList.remove('hidden');
        this.currentIdx = nextSlideIdx;
        setTimeout(()=>{this.clearClassList()}, 1000);
    },
    /**
     * Инициализация слайдов
     */
    initSlides(){
        this.slides = document.querySelectorAll('.sliderPic');
        this.showImageWithCurrentIdx();
    },
};
//Вызов функции инициализации страницы
initHTML();
//Отображение страницы с индексом 0
window.addEventListener('load', function(){
    slider.initSlides();
});
