'use strict'
let game = {
    questionText: "",
    resultMessage: "",
    score: 0,
    init(){
        console.log("Вас приветствует игра \"Кто хочет стать миллионером \"");
        show.showStairs();
        console.log("Чтобы начать игру наберите game.run()");
        console.log ("Выход из игры - нечисловой ответ или Отмена.")
    },
    run(){
        for (let questionIname in questionsObject){
            let tmpObj = questionsObject[questionIname];
            this.questionText =  "Вопрос " + tmpObj.questionNumber + " (" + tmpObj.cost + " баллов): \n" + tmpObj.question + "\n" + "Варианты ответов:\n";
            for (let i=0; i < tmpObj.possibleAnswers.length; i++){
                this.questionText += tmpObj.possibleAnswers[i] + "\n";
            }
            this.questionText += "Введите номер правильного ответа";
            let userAnswer = Number(prompt(this.questionText));
            if (isNaN(userAnswer) || userAnswer == undefined || userAnswer == 0){
                break;
            }else if (userAnswer == tmpObj.rightAnswer){
                this.resultMessage = "Вы угадали,  правильный ответ \"" + tmpObj.possibleAnswers[userAnswer - 1] + "\".  Вы заработали " + tmpObj.cost + " баллов.";
                this.score += tmpObj.cost;
                console.log(this.resultMessage);
                console.log("Общий счет: " + this.score + " из 1500");
            } else{
                this.resultMessage = "Ваш ответ \"" + tmpObj.possibleAnswers[userAnswer - 1] + "\" неверный. \nПравильный ответ: " + tmpObj.possibleAnswers[tmpObj.rightAnswer - 1];
                console.log(this.resultMessage);
                console.log("Общий счет: " + this.score + " из 1500");
            }
        };
        console.log("Игра окончена. Счет игры: " + this.score + " баллов  из 1500.");
    }
}

game.init();