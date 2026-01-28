//  let age =  "Вы принимаете файлы  cookie!";
//     alert(age); // выводит "undefined"
//     let password;
//     do {
//         password = prompt("Введите пароль:");
//     } while (password !== "1234");
//     alert ("подтверждено");
//     console.log("пароль принят!");

//     let x = 10;
//     let y = 5;
//     let sum = x + y;
//     console.log(sum);

//     let name = " i love JS";
//     console.log(name);

//     let n = 7;
//     let sum2 = n*2;
//     console.log(sum2);

//     let message =" ";

//     let value = 42;
//     console.log(typeof value);

//     // const wallet = createWallet();

//     Promise.catch(error => {
//         console.log(error);
//     })
    
//     Promise.finally(() => {
//         console.log("конец");
//     })

//     new Promise.data((HI) => {
// then(result => "!");
// console.log(Promise.data);
// })

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(50,50,100,60);

ctx.fillStyle = "blue";
ctx.fillRect(10,10,50,50);

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(200, 50);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 40, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.arc(300, 150, 40, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = "purple";
ctx.stroke();