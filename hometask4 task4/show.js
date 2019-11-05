'use strict'
let show = {
    consoleText: "",
    showStairs(){
        // Показываем возможные баллы
        for (let questionIname in questionsObject){
            let tmpObj = questionsObject[questionIname];
            this.consoleText += "Вопрос " + tmpObj.questionNumber + " - " + tmpObj.cost + " баллов\n";
        };
        console.log(this.consoleText);
    },
    clear(){
        //чистим консоль
        console.clear();
        this.consoleText = "";
    }
}