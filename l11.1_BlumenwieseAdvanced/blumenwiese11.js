"use strict";
//Nectar-Methode inspiriert von Lisa W.
var L11Blumenwiese;
(function (L11Blumenwiese) {
    let imageData;
    let flowerArray = [];
    let moveablesArray = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L11Blumenwiese.crc2 = canvas.getContext("2d");
        let posMountains = { x: 0, y: 250 };
        drawSky();
        drawMeadow();
        drawSun();
        drawMountains(posMountains, 75, 140, "grey", "white");
        drawMountains(posMountains, 50, 100, "grey", "lightgrey");
        drawTrees(250, 250);
        drawTrees(800, 260);
        drawBeehome();
        createFlower();
        createClouds();
        createBee();
        console.log(flowerArray);
        //save background
        imageData = L11Blumenwiese.crc2.getImageData(0, 0, 900, 500);
        window.setInterval(update, 20);
    } //end handleload
    //draw and move Bees/Clouds. Draw flowers from Array
    function update() {
        // console.log("update moveables");
        L11Blumenwiese.crc2.clearRect(0, 0, 900, 500);
        L11Blumenwiese.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveablesArray) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        for (let flower of flowerArray) {
            flower.draw();
            flower.nectar(0.1);
        }
    }
    function createBee() {
        for (let i = 0; i < 10; i++) {
            // console.log("create bee");
            let bee = new L11Blumenwiese.Bee(1);
            moveablesArray.push(bee);
        }
    }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L11Blumenwiese.Cloud(0.5);
            moveablesArray.push(cloud);
        }
    }
    function createFlower() {
        console.log("create flower");
        for (let i = 0; i < 10; i++) {
            let rose = new L11Blumenwiese.Rose();
            flowerArray.push(rose);
        }
        for (let i = 0; i < 10; i++) {
            let tulip = new L11Blumenwiese.Tulip();
            flowerArray.push(tulip);
        }
        for (let i = 0; i < 10; i++) {
            let sunflower = new L11Blumenwiese.Sunflower();
            flowerArray.push(sunflower);
        }
    }
    function drawSky() {
        let gradient = L11Blumenwiese.crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "royalblue");
        gradient.addColorStop(0.4, "white");
        gradient.addColorStop(1, "white");
        L11Blumenwiese.crc2.fillStyle = gradient;
        L11Blumenwiese.crc2.fillRect(0, 0, 900, 500);
    }
    function drawMeadow() {
        let gradient = L11Blumenwiese.crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "lightgreen");
        gradient.addColorStop(1, "green");
        L11Blumenwiese.crc2.fillStyle = gradient;
        L11Blumenwiese.crc2.fillRect(0, 250, 900, 300);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11Blumenwiese.crc2.save();
        L11Blumenwiese.crc2.translate(_position.x, _position.y);
        L11Blumenwiese.crc2.beginPath();
        L11Blumenwiese.crc2.moveTo(0, 0);
        L11Blumenwiese.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11Blumenwiese.crc2.lineTo(x, y);
        } while (x < L11Blumenwiese.crc2.canvas.width);
        L11Blumenwiese.crc2.lineTo(x, 0);
        L11Blumenwiese.crc2.closePath();
        let gradient = L11Blumenwiese.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11Blumenwiese.crc2.fillStyle = gradient;
        L11Blumenwiese.crc2.fill();
        L11Blumenwiese.crc2.restore();
    }
    function drawSun() {
        let gradient = L11Blumenwiese.crc2.createRadialGradient(150, 75, 5, 90, 60, 100);
        gradient.addColorStop(0, "#fffc4f");
        gradient.addColorStop(1, "#faf9ba");
        L11Blumenwiese.crc2.beginPath();
        L11Blumenwiese.crc2.arc(150, 75, 50, 0, 2 * Math.PI);
        L11Blumenwiese.crc2.strokeStyle = "yellow";
        L11Blumenwiese.crc2.stroke();
        L11Blumenwiese.crc2.fillStyle = gradient;
        L11Blumenwiese.crc2.fill();
        L11Blumenwiese.crc2.closePath();
    }
    function drawTrees(_x, _y) {
        //Stamm
        L11Blumenwiese.crc2.beginPath();
        L11Blumenwiese.crc2.fillStyle = "brown";
        L11Blumenwiese.crc2.fillRect(_x, _y, 20, -70);
        L11Blumenwiese.crc2.closePath();
        //Ast
        L11Blumenwiese.crc2.beginPath();
        L11Blumenwiese.crc2.moveTo(_x + 10, _y - 30);
        L11Blumenwiese.crc2.lineTo(_x + 50, _y - 50);
        L11Blumenwiese.crc2.lineTo(_x + 10, _y - 40);
        L11Blumenwiese.crc2.fillStyle = "brown";
        L11Blumenwiese.crc2.fill();
        L11Blumenwiese.crc2.closePath();
        //Baumkrone
        L11Blumenwiese.crc2.beginPath();
        L11Blumenwiese.crc2.arc(_x + 9, _y - 100, 40, 0, 2 * Math.PI);
        L11Blumenwiese.crc2.fillStyle = "green";
        L11Blumenwiese.crc2.fill();
        L11Blumenwiese.crc2.closePath();
    }
    function drawBeehome() {
        L11Blumenwiese.crc2.restore();
        //main house
        L11Blumenwiese.crc2.beginPath();
        L11Blumenwiese.crc2.arc(50, 300, 50, 0, 2 * Math.PI);
        L11Blumenwiese.crc2.fillStyle = "#d3a259";
        L11Blumenwiese.crc2.fill();
        L11Blumenwiese.crc2.closePath();
        //stripes
        L11Blumenwiese.crc2.beginPath();
        L11Blumenwiese.crc2.moveTo(5, 320);
        L11Blumenwiese.crc2.lineTo(95, 320);
        L11Blumenwiese.crc2.moveTo(0, 300);
        L11Blumenwiese.crc2.lineTo(100, 300);
        L11Blumenwiese.crc2.moveTo(5, 280);
        L11Blumenwiese.crc2.lineTo(95, 280);
        L11Blumenwiese.crc2.moveTo(22, 260);
        L11Blumenwiese.crc2.lineTo(80, 260);
        L11Blumenwiese.crc2.strokeStyle = "black";
        L11Blumenwiese.crc2.lineWidth = 2;
        L11Blumenwiese.crc2.stroke();
        L11Blumenwiese.crc2.closePath();
        //entrance
        L11Blumenwiese.crc2.beginPath();
        L11Blumenwiese.crc2.arc(50, 320, 10, 0, 2 * Math.PI);
        L11Blumenwiese.crc2.fillStyle = "black";
        L11Blumenwiese.crc2.fill();
        L11Blumenwiese.crc2.closePath();
        //Ast
        L11Blumenwiese.crc2.beginPath();
        // crc2.moveTo(0, 300);
        L11Blumenwiese.crc2.fillStyle = "brown";
        L11Blumenwiese.crc2.fillRect(0, 235, 100, 20);
        L11Blumenwiese.crc2.closePath();
        L11Blumenwiese.crc2.save();
    }
})(L11Blumenwiese || (L11Blumenwiese = {})); //end namespace
//# sourceMappingURL=blumenwiese11.js.map