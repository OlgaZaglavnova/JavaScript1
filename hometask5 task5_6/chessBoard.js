'use strict';
let isEven = function(num){
    if (num % 2 == 0){
        return true;
    } else {
        return false;
    }
};
let cellIsWhite =function(y, x){
    if (!isEven(y) && !isEven(x)){
        return true;
    } else if (isEven(y) && isEven(x)){
        return true;
    } else {
        return false;
    }
};
let paintBorder = function(y, x){
    let classStr = "";
    if (y == 1) {
        classStr += "upBorder ";
    }
    if (x == 1){
        classStr +=  "leftBorder ";
    };
    if (y == chessBoard.rowCount){
        classStr +=  "downBorder ";
    };
    if (x == chessBoard.colCount){
        classStr +=  "rightBorder ";
    };
    return classStr;
};
let chessBoard = {
    cols: ["A", "B", "C", "D", "E", "F", "G", "H"],
    rowCount: 8,
    colCount: 8,
    codeText: "",
    chooseLetter(n){
        if (n ==0){
            return "";
        } else {
        return this.cols[n-1];
        }
    },
    paint(){
        this.codeText += "<table>\n";
        //напишем буквенные обозначения столбцов
        this.codeText +="<tr>";
        for (let i = 0; i <= this.colCount; i++){
            let letter = this.chooseLetter(i);
            this.codeText +=`<th>${letter}</th>`;
        };
        this.codeText +="</tr>\n";
        for (let row = 1; row <= this.rowCount; row++){
            this.codeText += "<tr>\n";
            this.codeText += "<td class = \"chessCell rowHeader\">" + row + "</td>\n"
            for (let col = 1; col <= this.colCount; col++){
                this.codeText += "<td class = \"chessCell";
                if (cellIsWhite(row, col)){
                    this.codeText += " white";
                }else{
                    this.codeText += " black";
                }
                this.codeText += " " + paintBorder(row, col);
                this.codeText += `\" id = \"cell${row}${col}\"></td>\n`;
                
            }
            this.codeText += "</tr>\n";
        }
        this.codeText += "</table>\n";
        document.body.insertAdjacentHTML('afterbegin', this.codeText);
    }
}
chessBoard.paint();