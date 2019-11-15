class Menu {
    constructor() {
        this.startBtnEl = document.getElementById('startBtn');
        this.pauseBtnEl = document.getElementById('pauseBtn');
        this.scoreFieldEl = document.querySelector('.score');
    }
    init(settings, status){
        this.settings = settings;
        this.status = status;
    }
    /**
     * Метод назначает переданные функции в качестве обработчиков
     * событий клика на кнопки "Старт" и "Пауза".
     * @param {Function} startBtnClickHandler 
     * @param {Function} pauseBtnClickHandler 
     */
    addButtonsClickListeners(startBtnClickHandler, pauseBtnClickHandler) {
        this.startBtnEl.addEventListener('click', startBtnClickHandler);
        this.pauseBtnEl.addEventListener('click', pauseBtnClickHandler);
    }
    showScore(){
        this.scoreFieldEl.innerHTML = "Счёт: " + this.status.score + " / " + this.settings.winLength;
    }
}