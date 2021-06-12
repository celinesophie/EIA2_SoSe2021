"use strict";
var L10Blumenwiese;
(function (L10Blumenwiese) {
    let imageData;
    let flowerArray = [];
    let moveablesArray = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L10Blumenwiese.crc2 = canvas.getContext("2d");
        let posMountains = { x: 0, y: 250 };
        drawSky();
        // window.setInterval(moveCloud, 50); // alle xx ms aktualisieren
        drawMeadow();
        drawSun();
        drawMountains(posMountains, 75, 140, "grey", "white");
        drawMountains(posMountains, 50, 100, "grey", "lightgrey");
        drawTrees(250, 250);
        drawTrees(800, 260);
        drawBeehome();
        createFlower();
        drawFlower();
        //save background
        imageData = L10Blumenwiese.crc2.getImageData(0, 0, 900, 500);
        createClouds();
        createBee();
        // window.setInterval(moveBee, 20);
        window.setInterval(update, 20);
    } //end handleload
    function update() {
        console.log("update moveables"); //wirdausgegeben
        L10Blumenwiese.crc2.clearRect(0, 0, 900, 500);
        L10Blumenwiese.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveablesArray) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function createBee() {
        for (let i = 0; i < 10; i++) {
            // console.log("create bee");
            let bee = new L10Blumenwiese.Bee(0.8);
            // beeArray.push(bee);   
            moveablesArray.push(bee);
        }
    }
    // function moveBee(): void {
    //     for (let bee of beeArray) {
    //         bee.move(1 / 50); //20 ms = 1/50
    //         bee.draw();
    //     }
    // }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L10Blumenwiese.Cloud(0.5); //(size?)(Math.random() * (0.9 - 0.8))
            // cloudArray.push(cloud);
            moveablesArray.push(cloud);
            // console.log(cloudArray);                 
        }
    }
    // function moveCloud(): void {
    //     console.log("cloud float");
    //     crc2.clearRect(0, 0, 900, 500);
    //     crc2.putImageData(imageData, 0, 0);
    //     for (let cloud of cloudArray) {
    //         cloud.move(1 / 50); //20 ms = 1/50
    //         cloud.draw();
    //     }
    // }
    function createFlower() {
        console.log("create flower");
        for (let i = 0; i < 10; i++) {
            let rose = new L10Blumenwiese.Flower();
            flowerArray.push(rose);
        }
        for (let i = 0; i < 10; i++) {
            let tulip = new L10Blumenwiese.Flower();
            flowerArray.push(tulip);
        }
        for (let i = 0; i < 10; i++) {
            let sunflower = new L10Blumenwiese.Flower();
            flowerArray.push(sunflower);
        }
    }
    function drawFlower() {
        for (let rose of flowerArray) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            rose.draw(randomX + 100, randomY + 270);
        }
        for (let tulip of flowerArray) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            tulip.draww(randomX + 100, randomY + 270);
        }
        for (let sunflower of flowerArray) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            sunflower.drawww(randomX + 100, randomY + 270);
        }
    }
    function drawSky() {
        let gradient = L10Blumenwiese.crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "royalblue");
        gradient.addColorStop(0.4, "white");
        gradient.addColorStop(1, "white");
        L10Blumenwiese.crc2.fillStyle = gradient;
        L10Blumenwiese.crc2.fillRect(0, 0, 900, 500);
    }
    function drawMeadow() {
        let gradient = L10Blumenwiese.crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "lightgreen");
        gradient.addColorStop(1, "green");
        L10Blumenwiese.crc2.fillStyle = gradient;
        L10Blumenwiese.crc2.fillRect(0, 250, 900, 300);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L10Blumenwiese.crc2.save();
        L10Blumenwiese.crc2.translate(_position.x, _position.y);
        L10Blumenwiese.crc2.beginPath();
        L10Blumenwiese.crc2.moveTo(0, 0);
        L10Blumenwiese.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10Blumenwiese.crc2.lineTo(x, y);
        } while (x < L10Blumenwiese.crc2.canvas.width);
        L10Blumenwiese.crc2.lineTo(x, 0);
        L10Blumenwiese.crc2.closePath();
        let gradient = L10Blumenwiese.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10Blumenwiese.crc2.fillStyle = gradient;
        L10Blumenwiese.crc2.fill();
        L10Blumenwiese.crc2.restore();
    }
    function drawSun() {
        let gradient = L10Blumenwiese.crc2.createRadialGradient(150, 75, 5, 90, 60, 100);
        gradient.addColorStop(0, "#fffc4f");
        gradient.addColorStop(1, "#faf9ba");
        L10Blumenwiese.crc2.beginPath();
        L10Blumenwiese.crc2.arc(150, 75, 50, 0, 2 * Math.PI);
        L10Blumenwiese.crc2.strokeStyle = "yellow";
        L10Blumenwiese.crc2.stroke();
        L10Blumenwiese.crc2.fillStyle = gradient;
        L10Blumenwiese.crc2.fill();
        L10Blumenwiese.crc2.closePath();
    }
    function drawTrees(_x, _y) {
        //Stamm
        L10Blumenwiese.crc2.beginPath();
        L10Blumenwiese.crc2.fillStyle = "brown";
        L10Blumenwiese.crc2.fillRect(_x, _y, 20, -70);
        L10Blumenwiese.crc2.closePath();
        //Ast
        L10Blumenwiese.crc2.beginPath();
        L10Blumenwiese.crc2.moveTo(_x + 10, _y - 30);
        L10Blumenwiese.crc2.lineTo(_x + 50, _y - 50);
        L10Blumenwiese.crc2.lineTo(_x + 10, _y - 40);
        L10Blumenwiese.crc2.fillStyle = "brown";
        L10Blumenwiese.crc2.fill();
        L10Blumenwiese.crc2.closePath();
        //Baumkrone
        L10Blumenwiese.crc2.beginPath();
        L10Blumenwiese.crc2.arc(_x + 9, _y - 100, 40, 0, 2 * Math.PI);
        L10Blumenwiese.crc2.fillStyle = "green";
        L10Blumenwiese.crc2.fill();
        L10Blumenwiese.crc2.closePath();
    }
    function drawBeehome() {
        L10Blumenwiese.crc2.restore();
        //main house
        L10Blumenwiese.crc2.beginPath();
        L10Blumenwiese.crc2.arc(50, 300, 50, 0, 2 * Math.PI);
        L10Blumenwiese.crc2.fillStyle = "#d3a259";
        L10Blumenwiese.crc2.fill();
        L10Blumenwiese.crc2.closePath();
        //stripes
        L10Blumenwiese.crc2.beginPath();
        L10Blumenwiese.crc2.moveTo(5, 320);
        L10Blumenwiese.crc2.lineTo(95, 320);
        L10Blumenwiese.crc2.moveTo(0, 300);
        L10Blumenwiese.crc2.lineTo(100, 300);
        L10Blumenwiese.crc2.moveTo(5, 280);
        L10Blumenwiese.crc2.lineTo(95, 280);
        L10Blumenwiese.crc2.moveTo(22, 260);
        L10Blumenwiese.crc2.lineTo(80, 260);
        L10Blumenwiese.crc2.strokeStyle = "black";
        L10Blumenwiese.crc2.lineWidth = 2;
        L10Blumenwiese.crc2.stroke();
        L10Blumenwiese.crc2.closePath();
        //entrance
        L10Blumenwiese.crc2.beginPath();
        L10Blumenwiese.crc2.arc(50, 320, 10, 0, 2 * Math.PI);
        L10Blumenwiese.crc2.fillStyle = "black";
        L10Blumenwiese.crc2.fill();
        L10Blumenwiese.crc2.closePath();
        //Ast
        L10Blumenwiese.crc2.beginPath();
        // crc2.moveTo(0, 300);
        L10Blumenwiese.crc2.fillStyle = "brown";
        L10Blumenwiese.crc2.fillRect(0, 235, 100, 20);
        L10Blumenwiese.crc2.closePath();
        L10Blumenwiese.crc2.save();
    }
})(L10Blumenwiese || (L10Blumenwiese = {})); //end namespace
//# sourceMappingURL=blumenwiese10.js.map