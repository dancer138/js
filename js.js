 let age =  "Вы принимаете файлы  cookie!";
    alert(age); // выводит "undefined"
    let password;
    do {
        password = prompt("Введите пароль:");
    } while (password !== "1234");
    alert ("подтверждено");
    console.log("пароль принят!");

    let x = 10;
    let y = 5;
    let sum = x + y;
    console.log(sum);

    let name = " i love JS";
    console.log(name);

    let n = 7;
    let sum2 = n*2;
    console.log(sum2);

    let message =" "; 

//     let value = 42;
//     console.log(typeof value);

//     // const wallet = createWallet();

    Promise.catch(error => {
        console.log(error);
    })
    
    Promise.finally(() => {
        console.log("конец");
    })

    new Promise.data((HI) => {
then(result => "!");
console.log(Promise.data);
})


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

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 55, 50);

ctx.fillStyle = "rgb(0, 200, 0.5)";
ctx.fillRect(30, 30, 55, 50);

ctx.fillRect(25, 25, 100, 100);
ctx.fillRect(45, 45, 60, 60);
ctx.fillRect(50, 50, 50, 50);

ctx.beginPath();
ctx.moveTo(125, 125);
ctx.lineTo(125, 45);
ctx.lineTo(45, 125);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(105, 25);
ctx.lineTo(25, 105);
ctx.fill();



ctx.beginPath();
ctx.arc(75,75,50,0,Math.PI*2,true);
ctx.moveTo(110,75);
ctx.arc(75,75,35,0,Math.PI,false);
ctx.moveTo(65,65);
ctx.arc(60,60,5,0,Math.PI*2,true);
ctx.moveTo(95,65);
ctx.arc(90,60,5,0,Math.PI*2,true);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fill();

const canvas1 = document.getElementById("canvas");
const contexst = canvas.getContext("2d");
const img = new Image();
img.src = "forest2/png";
img.onload = ()=> contexst.drawImage(img, 0, 0);

const canvas2 = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

const bg = new Image();
bg.src = "bg.jpg";

const hero = new Image();
hero.src = "hero.png";

let loaded = 0;
const onLoad = () => {
    loaded++;
    if (loaded === 2) {
        ctx.drawImage(bg, 0, 0, 600, 400);
        ctx.drawImage(hero, 250, 220, 100, 100);
    }
};

bg.onload = onLoad;
hero.onload = onLoad;


// const img = new Image();
img.src = "texture.png"; 

img.onload = () => {
    const pattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};
 



// const img = new Image();
img.src = "image.png"; 
img.onload = () => {
 

    
    ctx.globalAlpha = 0.5;
    ctx.drawImage(img, 50, 50, 200, 150);
    ctx.globalAlpha = 1;
};

ctx.shadowColor = "rgba(0, 0, 0.35)";
ctx.shadowBlur =12;
ctx.shadow0ffseX = 8;
ctx.shadow0ffseY = 8;



ctx.shadowColor = "rgba(0,0,0,0.5)";
ctx.shadowBlur = 6;
ctx.shadowOffsetX = 3;
ctx.shadowOffsetY = 3;

ctx.font = "32px Arial";
ctx.fillStyle = "#ffffff";
ctx.fillText("Canvas!", 60, 80);

const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data;

for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const gray = (r + g + b) / 3;

    data[i] = gray; // R
    data[i + 1] = gray; // G
    data[i + 2] = gray; // B
}

// A не трогаем

ctx.putImageData(imageData, 0, 0);

