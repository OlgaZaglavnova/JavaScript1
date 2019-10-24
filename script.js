'use strict';

    //1
    let cTemperature=prompt("Введите температуру в градусах Цельсия: ", 0);
    let fTemperature = (9/5)*cTemperature+32;
    alert("Температура по Фаренгейту: "+fTemperature);
    //2
    let admin;
    let name="Василий";
    admin=name;
    alert("admin: "+admin);
    //3
    let a=1000;
    let b="108";
    let c=a+b;
    alert(`В JavaScript ${a} +\"${b}\"=${c}`);
