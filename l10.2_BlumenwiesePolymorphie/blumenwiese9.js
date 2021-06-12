"use strict";
var L09Blumenwiese;
(function (L09Blumenwiese) {
    let imageData;
    let cloudArray = [];
    let beeArray = [];
    let flowerArray = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L09Blumenwiese.crc2 = canvas.getContext("2d");
        let posMountains = { x: 0, y: 250 };
        drawSky();
        createClouds();
        window.setInterval(moveCloud, 50); // alle xx ms aktualisieren
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
        imageData = L09Blumenwiese.crc2.getImageData(0, 0, 900, 500);
        createBee();
        window.setInterval(moveBee, 20);
    } //end handleload
    function createBee() {
        for (let i = 0; i < 10; i++) {
            // console.log("create bee");
            let bee = new L09Blumenwiese.Bee(0.8);
            beeArray.push(bee);
        }
    }
    function moveBee() {
        // crc2.clearRect(0, 0, 900, 500);
        // crc2.putImageData(imageData, 0, 0);
        // console.log("movebee");
        for (let bee of beeArray) {
            bee.move(1 / 50); //20 ms = 1/50
            bee.draw();
        }
    }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L09Blumenwiese.Cloud(0.5); //(size?)(Math.random() * (0.9 - 0.8))
            cloudArray.push(cloud);
            // console.log(cloudArray);                 
        }
    }
    function moveCloud() {
        // console.log("cloud float");
        L09Blumenwiese.crc2.clearRect(0, 0, 900, 500);
        L09Blumenwiese.crc2.putImageData(imageData, 0, 0);
        for (let cloud of cloudArray) {
            cloud.move(1 / 50); //20 ms = 1/50
            cloud.draw();
        }
    }
    function createFlower() {
        console.log("create flower");
        for (let i = 0; i < 10; i++) {
            let rose = new L09Blumenwiese.Flower();
            flowerArray.push(rose);
        }
        for (let i = 0; i < 10; i++) {
            let tulip = new L09Blumenwiese.Flower();
            flowerArray.push(tulip);
        }
        for (let i = 0; i < 10; i++) {
            let sunflower = new L09Blumenwiese.Flower();
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
        let gradient = L09Blumenwiese.crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "royalblue");
        gradient.addColorStop(0.4, "white");
        gradient.addColorStop(1, "white");
        L09Blumenwiese.crc2.fillStyle = gradient;
        L09Blumenwiese.crc2.fillRect(0, 0, 900, 500);
    }
    function drawMeadow() {
        let gradient = L09Blumenwiese.crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "lightgreen");
        gradient.addColorStop(1, "green");
        L09Blumenwiese.crc2.fillStyle = gradient;
        L09Blumenwiese.crc2.fillRect(0, 250, 900, 300);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09Blumenwiese.crc2.save();
        L09Blumenwiese.crc2.translate(_position.x, _position.y);
        L09Blumenwiese.crc2.beginPath();
        L09Blumenwiese.crc2.moveTo(0, 0);
        L09Blumenwiese.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09Blumenwiese.crc2.lineTo(x, y);
        } while (x < L09Blumenwiese.crc2.canvas.width);
        L09Blumenwiese.crc2.lineTo(x, 0);
        L09Blumenwiese.crc2.closePath();
        let gradient = L09Blumenwiese.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09Blumenwiese.crc2.fillStyle = gradient;
        L09Blumenwiese.crc2.fill();
        L09Blumenwiese.crc2.restore();
    }
    function drawSun() {
        let gradient = L09Blumenwiese.crc2.createRadialGradient(150, 75, 5, 90, 60, 100);
        gradient.addColorStop(0, "#fffc4f");
        gradient.addColorStop(1, "#faf9ba");
        L09Blumenwiese.crc2.beginPath();
        L09Blumenwiese.crc2.arc(150, 75, 50, 0, 2 * Math.PI);
        L09Blumenwiese.crc2.strokeStyle = "yellow";
        L09Blumenwiese.crc2.stroke();
        L09Blumenwiese.crc2.fillStyle = gradient;
        L09Blumenwiese.crc2.fill();
        L09Blumenwiese.crc2.closePath();
    }
    function drawTrees(_x, _y) {
        //Stamm
        L09Blumenwiese.crc2.beginPath();
        L09Blumenwiese.crc2.fillStyle = "brown";
        L09Blumenwiese.crc2.fillRect(_x, _y, 20, -70);
        L09Blumenwiese.crc2.closePath();
        //Ast
        L09Blumenwiese.crc2.beginPath();
        L09Blumenwiese.crc2.moveTo(_x + 10, _y - 30);
        L09Blumenwiese.crc2.lineTo(_x + 50, _y - 50);
        L09Blumenwiese.crc2.lineTo(_x + 10, _y - 40);
        L09Blumenwiese.crc2.fillStyle = "brown";
        L09Blumenwiese.crc2.fill();
        L09Blumenwiese.crc2.closePath();
        //Baumkrone
        L09Blumenwiese.crc2.beginPath();
        L09Blumenwiese.crc2.arc(_x + 9, _y - 100, 40, 0, 2 * Math.PI);
        L09Blumenwiese.crc2.fillStyle = "green";
        L09Blumenwiese.crc2.fill();
        L09Blumenwiese.crc2.closePath();
    }
    function drawBeehome() {
        L09Blumenwiese.crc2.restore();
        //main house
        L09Blumenwiese.crc2.beginPath();
        L09Blumenwiese.crc2.arc(50, 300, 50, 0, 2 * Math.PI);
        L09Blumenwiese.crc2.fillStyle = "#d3a259";
        L09Blumenwiese.crc2.fill();
        L09Blumenwiese.crc2.closePath();
        //stripes
        L09Blumenwiese.crc2.beginPath();
        L09Blumenwiese.crc2.moveTo(5, 320);
        L09Blumenwiese.crc2.lineTo(95, 320);
        L09Blumenwiese.crc2.moveTo(0, 300);
        L09Blumenwiese.crc2.lineTo(100, 300);
        L09Blumenwiese.crc2.moveTo(5, 280);
        L09Blumenwiese.crc2.lineTo(95, 280);
        L09Blumenwiese.crc2.moveTo(22, 260);
        L09Blumenwiese.crc2.lineTo(80, 260);
        L09Blumenwiese.crc2.strokeStyle = "black";
        L09Blumenwiese.crc2.lineWidth = 2;
        L09Blumenwiese.crc2.stroke();
        L09Blumenwiese.crc2.closePath();
        //entrance
        L09Blumenwiese.crc2.beginPath();
        L09Blumenwiese.crc2.arc(50, 320, 10, 0, 2 * Math.PI);
        L09Blumenwiese.crc2.fillStyle = "black";
        L09Blumenwiese.crc2.fill();
        L09Blumenwiese.crc2.closePath();
        //Ast
        L09Blumenwiese.crc2.beginPath();
        // crc2.moveTo(0, 300);
        L09Blumenwiese.crc2.fillStyle = "brown";
        L09Blumenwiese.crc2.fillRect(0, 235, 100, 20);
        L09Blumenwiese.crc2.closePath();
        L09Blumenwiese.crc2.save();
    }
})(L09Blumenwiese || (L09Blumenwiese = {})); //end namespace
//# sourceMappingURL=blumenwiese9.js.map