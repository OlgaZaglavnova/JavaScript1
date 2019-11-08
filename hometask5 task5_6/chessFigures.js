'use strict';
let chessFigures = {
    mainBlackFigures: ["&#9820", "&#9822", "&#9821", "&#9818", "&#9819", "&#9821", "&#9822", "&#9820"],
    mainWhiteFigures: ["&#9814", "&#9816", "&#9815", "&#9812", "&#9813", "&#9815", "&#9816", "&#9814"],
    //blackPawn: "&#9723",
    blackPawn: "♟",
    whitePawn: "&#9817",
    currentMainFigures: [],
    currentPawn: "",
    setMainFigures(str, color){
        switch (color){
            case "black":
                this.currentMainFigures = this.mainBlackFigures;
                break;
            case "white":
                this.currentMainFigures = this.mainWhiteFigures;
                break;
        }
        for (let x = 1; x <= chessBoard.colCount; x++){
            let currentCell = document.getElementById(`cell${str}${x}`);
            currentCell.innerHTML = this.currentMainFigures[x - 1];
        }
    },
    setPawns(str, color){
        switch (color){
            case "black":
                this.currentPawn = this.blackPawn;
                break;
            case "white":
                this.currentPawn = this.whitePawn;
                break;
        }
        for (let x = 1; x <= chessBoard.colCount; x++){
            let currentCell = document.getElementById(`cell${str}${x}`);
            currentCell.innerHTML = this.currentPawn;
        }
    },
    //Функция для начальной расстановки шахматных фигур
    setChessFigures(){
        this.setMainFigures(1, "black");
        this.setPawns(2, "black");
        this.setPawns(7, "white");
        this.setMainFigures(8, "white");
    }
}