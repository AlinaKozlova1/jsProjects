const dino = document.getElementById("dino"); //привязываем html элементы к константам
const cactus = document.getElementById("cactus");



document.addEventListener("keydown", function(event) { //обработчик событий
    jump();  //данная функуция активирует класс jump в css файле
});

function jump() {
    if (dino.classList != "jump"){
        dino.classList.add("jump"); //возвращает массив, содержащий все классы элемента
    }
    setTimeout(function(){
        dino.classList.remove("jump");
    }, 300);
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 140)
        alert("GAME OVER")
}, 10);
