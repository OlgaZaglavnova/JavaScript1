'use strict';
class Status{
    constructor(){
        this.status = 'play';
        this.boardValues = [["", "", ""], 
                            ["", "", ""], 
                            ["", "", ""]];
        this.currentSymbol = "X";
    }
    /**
     * Метод возвращает true, если статус игры = 'play'
     */
    isStatusPlay(){
        return this.status === 'play';
    }
    /**
     * Метод устанавливает статус игры = 'stop'
     */
    setStopStatus(){
        this.status = 'stop';
    }
    /**
     * Метод меняет текущий символ: 
     * если был Х, заменит на 0,
     * если был 0, заменит на Х.
     */
    changeSymbol(){
        this.currentSymbol = this.currentSymbol === "X"? "0" : "X";
    }
}