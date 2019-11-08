'use strict';
// Объект для добавления html-кода карточек товаров

let rotateImg = function(){
    let btnId = event.target.id;
    let prodNumber = btnId.replace("btn", "");
    let imgI = document.getElementById("img" + prodNumber);
    let descrI = document.getElementById("desc" + prodNumber);
    if (event.target.innerText == "Подробнее") {
        /*imgI.classList.add('hidden');
        descrI.classList.remove('hidden');*/
        imgI.classList.remove('flipInY');
        descrI.classList.remove('flipOutY');
        imgI.classList.add('flipOutY');
        descrI.classList.add('flipInY');
        event.target.innerText = "Отмена";
    }else if(event.target.innerText == "Отмена"){
        /*imgI.classList.remove('hidden');
        descrI.classList.add('hidden');*/
        imgI.classList.remove('flipOutY');
        descrI.classList.remove('flipInY');
        imgI.classList.add('flipInY');
        descrI.classList.add('flipOutY');
        event.target.innerText = "Подробнее";
    }

};
let addBtnClickEvent = function(prodBtn) {
    //let btn.target.id;
    prodBtn.addEventListener('click', rotateImg);
};
let cardsCreater = {
    imgName: "productPicture.jpg",
    codeText: "",
    createHTMLcode(num){
        for (let i = 0; i < num; i++){
            this.codeText += "<div class = \"product\">\n";
            this.codeText += `<div class = \"productName\">Product ${i + 1} name</div>\n`;
            this.codeText += `<div class = \"prodCard\">\n`;
            this.codeText += `<div class = \"desc animated\" id = \"desc${i}\">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, cumque ipsam. Culpa tempore sequi ducimus magni cumque aspernatur non officia autem vitae quis, perspiciatis quo qui amet excepturi, possimus recusandae. Asperiores, dolores!</div>\n`;
            this.codeText += `<img src = \"${this.imgName}\" alt class = \"productImg animated\" id = \"img${i}\"> \n`;
            this.codeText += `</div>`;
            this.codeText += `<button id = \"btn${i}\">Подробнее</button>\n`;
            this.codeText += "</div>\n";
        }
        document.querySelector('.container').insertAdjacentHTML("afterbegin", this.codeText);

        let buttons = document.querySelectorAll('button');
        buttons.forEach(addBtnClickEvent);
        //document.body.insertAdjacentHTML("afterbegin",this.codeText);
    }
}