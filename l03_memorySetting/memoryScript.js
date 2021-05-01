"use strict";
var memoryGameL03;
(function (memoryGameL03) {
    window.addEventListener("load", handleLoad);
    let pairs;
    let turnedCards = 0;
    let wonPairs = 0;
    let startButton;
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y"];
    let cardArray = [];
    // let start: number = new Date().getTime();
    // let end: number = new Date().getTime;
    // let timer: TimeRanges = end - start;
    function handleLoad(_event) {
        startButton = document.getElementById("startButton");
        startButton.addEventListener("click", createCards);
    }
    //cards are created an style is selected
    function createCards(_event) {
        //get formdata
        let formData = new FormData(document.forms[0]);
        console.log(formData + " formdata");
        let pairNumber = formData.get("pairNumber");
        let cardSize = formData.get("cardSize");
        let backgroundColor = formData.get("backgroundColor");
        let cardColor = formData.get("cardColor");
        let fontColor = formData.get("fontColor");
        let font = formData.get("font");
        if (pairNumber) {
            pairs = Number(pairNumber);
        }
        //make settings div invisible
        // let settings: HTMLDivElement = <HTMLDivElement>document.querySelector("#settings");
        let gameBoard = document.getElementById("gameBoard");
        gameBoard.innerHTML = " ";
        //set backgroundcolor
        gameBoard.style.backgroundColor = backgroundColor.toString();
        gameBoard.setAttribute("class", "game");
        for (let i = 0; i < pairs; i++) {
            console.log(pairs + " pairs");
            //div wird erstellt
            let card1 = document.createElement("div");
            //back Klasse wird hinzugefügt
            // card.classList.add("back");
            card1.innerHTML = "<p>" + letters[i] + "</p>";
            card1.style.width = cardSize + "px";
            card1.style.height = cardSize + "px";
            card1.setAttribute("class", "back");
            card1.style.backgroundColor = cardColor.toString();
            card1.style.color = fontColor.toString();
            card1.style.fontFamily = font.toString();
            //Karten werden gameboard hinzugefügt    
            gameBoard.appendChild(card1);
            card1.addEventListener("click", chooseCard);
            //div wird erstellt
            let card2 = document.createElement("div");
            //back Klasse wird hinzugefügt
            // card.classList.add("back");
            card2.innerHTML = "<p>" + letters[i] + "</p>";
            card2.style.width = cardSize + "px";
            card2.style.height = cardSize + "px";
            card2.setAttribute("class", "back");
            card2.style.backgroundColor = cardColor.toString();
            card2.style.color = fontColor.toString();
            card2.style.fontFamily = font.toString();
            //Karten werden gameboard hinzugefügt    
            gameBoard.appendChild(card2);
            card2.addEventListener("click", chooseCard);
        }
    } //createCards end
    //cards are clicked
    function chooseCard(_event) {
        console.log("chooseCard");
        let clickedCard = _event.target;
        clickedCard.setAttribute("class", "front");
        clickedCard.classList.remove("back");
        turnedCards++;
        cardArray.push(clickedCard);
        console.log(turnedCards);
        if (turnedCards == 2) {
            setTimeout(() => {
                compareCards();
            }, 2000);
        }
    } //end chooseCards
    //cards are compared
    function compareCards() {
        console.log("comparing");
        //if match, cards become invisible
        if (cardArray[0].innerHTML == cardArray[1].innerHTML) {
            cardArray[0].setAttribute("class", "isHidden");
            cardArray[0].classList.remove("front");
            cardArray[1].setAttribute("class", "isHidden");
            cardArray[1].classList.remove("front");
            turnedCards = 0;
            wonPairs++;
            console.log(turnedCards);
        }
        else if (cardArray[0].innerHTML != cardArray[1].innerHTML) { //if no match, then cards show back again
            cardArray[0].setAttribute("class", "back");
            cardArray[0].classList.remove("front");
            cardArray[1].setAttribute("class", "back");
            cardArray[1].classList.remove("front");
            turnedCards = 0;
        }
        else if (wonPairs == pairs) {
            alert("Congratulations!");
        }
    } //end comparecards
})(memoryGameL03 || (memoryGameL03 = {})); //end namespace
//# sourceMappingURL=memoryScript.js.map