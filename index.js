//Conectando os botões aos sons

function keyToSound (key) {

        switch (key) {
            case "w":
                var tom1 = new Audio ('sounds/tom-1.mp3')
                tom1.play();    
                break;
        
            case "a":
                var tom2 = new Audio ('sounds/tom-2.mp3')
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio ('sounds/tom-3.mp3')
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio ('sounds/tom-4.mp3')
                tom4.play();
                break;
            case "j":
                var crash = new Audio ('sounds/crash.mp3')
                crash.play();
                break;
            case "k":
                var kick = new Audio ('sounds/kick-bass.mp3')
                kick.play();
                break;
            case "l":
                var snare = new Audio ('sounds/snare.mp3')
                snare.play();
                break;
            default:
                console.log(btnInnerHTML)
                break;

        }
}

//Animação para as teclas

function btnAnimation(currentKey) {
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed")

    setTimeout(function() {
        activeBtn.classList.remove("pressed")
    }, 100)
}

//Detectando o mouse

for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button.drum")[i].addEventListener("click", function() {
        var btnInnerHTML = this.innerHTML;
        keyToSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    }
        
)};

//Detectando o teclado

document.addEventListener("keydown", function(event) {
    keyToSound(event.key)
    btnAnimation(event.key)
})