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

    let value = 42;
    console.log(typeof value);

    // const wallet = createWallet();

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


const img = new Image();
img.src = "texture.png"; 

img.onload = () => {
    const pattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};
 



const img = new Image();
img.src = "image.png"; 
img.onload = () => {
 

    
    ctx.globalAlpha = 0.5;
    ctx.drawImage(img, 50, 50, 200, 150);
    ctx.globalAlpha = 1;
};
