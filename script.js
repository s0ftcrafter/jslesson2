let age = +prompt("Введите ваш возраст:");

if (age > 0 && age <= 18) {
    alert("Вы еще молоды, Вам нужно учиться");
} else if (age > 18 && age <= 50) {
    alert("Вам нужно работать");
} else if (age > 50 && age <= 59) {
    alert("Вам скоро на пенсию");
} else if (age > 59 && age <= 100) {
    alert("Вы пенсионер");
} else {
    alert("Что-то пошло не так");
}

let time = +prompt("Введите время (от 0 до 23):");

if (time >= 0 && time <= 6) {
    alert(time + " часа ночи");
} 
else if (time >= 7 && time <= 10) {
    alert(time + " часов утра");
} 
else if (time >= 11 && time <= 17) {
    alert((time - 12) + " часа дня");
} 
else if (time >= 18 && time <= 23) {
    alert((time - 12) + " часов вечера");
} 

let X = +prompt("Введите первое число ");
let Y = +prompt("Введите второе число ");
let Z = +prompt("Введите третье число ");

if (X > Y && X > Z) {
    alert("Наибольшее число: " + X);
}
else if (Y > X && Y > Z) {
    alert("Наибольшее число: " + Y);
}
else if (Z > X && Z > Y) {
    alert("Наибольшее число: " + Z);
}