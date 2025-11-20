// // 1

// let numbers = [10, 65, 30, 80, 5, 99];

// let result = numbers.filter(num => num > 50);

// console.log(result); 










// 2
// let numbers = [10, 65, 30, 80, 5, 99];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum); 










// 3
// let age = prompt("Введите ваш возраст:");

// age = Number(age); 

// if (age < 18) {
//   alert("Несовершеннолетний");
// } else if (age <= 60) {
//   alert("Взрослый");
// } else {
//   alert("Пожилой человек");
// }











// 4
// let nums = [5, -3, 8, 0, -9, 12, -1];

// let positive = [];
// let negative = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 0) {
//     positive.push(nums[i]);
//   } else if (nums[i] < 0) {
//     negative.push(nums[i]);
//   }
// }

// console.log("Положительные:", positive); 
// console.log("Отрицательные:", negative); 












// 5
// let number = [45, 2, 77, 100, 5, 32];

// let min = Math.min(number);
// let max = Math.max(number);

// console.log("Минимум:", min);   
// console.log("Максимум:", max);  













// 6
// let str = prompt("Введите строку:");


// let upper = str.toUpperCase();


// console.log("Длина строки:", upper.length);

// if (upper.length > 10) {
//   console.log("Длинная строка");
// } else {
//   console.log("Короткая строка");
// }














// 7
// let points = [64, 72, 9886, 90, 1566600];

// let sum = 0;

// for (let i = 0; i < points.length; i++) {
//   sum += points[i];
// }

// let average = sum / points.length;

// console.log(average); 






// 8
// let numbers = [10, 15, 20, 25, 30, 33, 40];

// let even = [];
// let odd = [];
// let divBy3 = [];

// for (let i = 0; i < numbers.length; i++) {
//   let n = numbers[i];

//   if (n % 2 === 0) even.push(n);
//   else odd.push(n);

//   if (n % 3 === 0) divBy3.push(n);
// }

// console.log("Чётные:", even);       
// console.log("Нечётные:", odd);      
// console.log("Кратные 3:", divBy3);  















// 9
// let users = [
//   {name: "Ali", age: 17},
//   {name: "Laylo", age: 22},
//   {name: "Sardor", age: 15},
//   {name: "Kamila", age: 30}
// ];

// users.forEach(user => {
//   if (user.age > 18) {
//     console.log(user.name);
//   }
// });










11
let num = 0;

while (num <= 0) {
  num = Number(prompt("Введите число больше 0:"));
}

alert("Спасибо! Вы ввели: " + num);



