var firstColorText = document.querySelector("#firstNumber");
var secondColorText = document.querySelector("#secondNumber");
var thirdColorText = document.querySelector("#thirdNumber");

var firstColorNumber, secondColorNumber, thirdColorNumber;

firstColorText.textContent = firstColorNumber = Math.floor(Math.random() * 255);
secondColorText.textContent = secondColorNumber = Math.floor(Math.random() * 255);
thirdColorText.textContent = thirdColorNumber = Math.floor(Math.random() * 255);

var newColorButton = document.querySelector("#newColorButton");
var hardButton = document.querySelector("#hardButton");
var easyButton = document.querySelector("#easyButton");
var isEasy = true;
var rightAnswer = Math.ceil(Math.random() * 5);
var div = document.querySelector("#aboveFirst");

var squres = document.querySelectorAll(".square");

for (let i = 0; i < squres.length; i++) {
    if (i === rightAnswer) {
        squres[i].style.backgroundColor = "rgb(" + firstColorNumber + " ," + secondColorNumber + " ," + thirdColorNumber + ")";
        continue;
    }
    squres[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + " ," + Math.floor(Math.random() * 255) + " ," +
        Math.floor(Math.random() * 255) + ")";

}

newColorButton.addEventListener("click", function () {
    firstColorText.textContent = firstColorNumber = Math.floor(Math.random() * 255);
    secondColorText.textContent = secondColorNumber = Math.floor(Math.random() * 255);
    thirdColorText.textContent = thirdColorNumber = Math.floor(Math.random() * 255);
    rightAnswer = Math.ceil(Math.random() * 5);

    for (let i = 0; i < squres.length; i++) {
        if (i === rightAnswer) {
            squres[i].style.backgroundColor = "rgb(" + firstColorNumber + " ," + secondColorNumber + " ," + thirdColorNumber + ")";
            continue;
        }
        squres[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + " ," + Math.floor(Math.random() * 255) + " ," +
            Math.floor(Math.random() * 255) + ")";
        squres[i].setAttribute("disabled", false);
    }
    newColorButton.textContent = "New Color";
    div.style.backgroundColor = "#180eff";
});

var message = document.querySelector("#message");
for (let i = 0; i < squres.length; i++) {

    squres[i].addEventListener("click", function () {
        if (i === rightAnswer) {
            div.style.backgroundColor = "rgb(" + firstColorNumber + "," + secondColorNumber + " ," + thirdColorNumber + ")";
            message.textContent = "CORRECT!!!";
            for (let i = 0; i < squres.length; i++) {
                squres[i].style.backgroundColor = "rgb(" + firstColorNumber + " ," + secondColorNumber + " ," + thirdColorNumber + ")";
                squres[i].setAttribute("disabled", true);
            }
            newColorButton.textContent = "Play Again?"
        } else {
            squres[i].style.backgroundColor = "white";
            message.textContent = "TRY AGAIN!!!";
        }
    })

}
