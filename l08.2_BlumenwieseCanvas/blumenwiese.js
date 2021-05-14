"use strict";
var L08Blumenwiese;
(function (L08Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let posMountains = { x: 0, y: 250 };
        drawSky();
        drawMeadow();
        drawSun();
        drawMountains(posMountains, 75, 140, "grey", "white");
        drawMountains(posMountains, 50, 100, "grey", "lightgrey");
        drawClouds({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawClouds({ x: 100, y: 125 }, { x: 100, y: 75 });
        drawTrees(250, 250);
        drawTrees(800, 260);
        //Tulips
        for (let index = 0; index < 20; index++) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            drawTulip(randomX + 50, randomY + 270);
        }
        //Sunflowers
        for (let index = 0; index < 20; index++) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            drawSunflower(randomX + 50, randomY + 270);
        }
        //Roses
        for (let index = 0; index < 20; index++) {
            let randomX = Math.floor(Math.random() * canvas.width);
            let randomY = Math.floor(Math.random() * 200);
            drawRose(randomX + 50, randomY + 270);
        }
    } //end handleload
    function drawSky() {
        let gradient = crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "royalblue");
        gradient.addColorStop(0.4, "white");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 900, 500);
    }
    function drawMeadow() {
        let gradient = crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "lightgreen");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 250, 900, 300);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawSun() {
        crc2.beginPath();
        crc2.arc(150, 75, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();
    }
    function drawClouds(_position, _size) {
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawTrees(_x, _y) {
        console.log("trees");
        //Stamm
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_x, _y, 20, -70);
        crc2.closePath();
        //Ast
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y - 30);
        crc2.lineTo(_x + 50, _y - 50);
        crc2.lineTo(_x + 10, _y - 40);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        //Baumkrone
        crc2.beginPath();
        crc2.arc(_x + 9, _y - 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();
    }
    function drawTulip(_x, _y) {
        //Stängel
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "darkgreen";
        crc2.fillRect(_x, _y, 2, -20);
        //Blätter
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 10);
        crc2.lineTo(_x, _y - 15);
        crc2.stroke();
        crc2.fill();
        //BlütenKopf
        crc2.beginPath();
        crc2.arc(_x + 2, _y - 24, 8, 0, Math.PI, false);
        crc2.closePath();
        crc2.lineWidth = 5;
        crc2.fillStyle = "red";
        crc2.lineWidth = 1;
        crc2.fillStyle = "red";
        crc2.fill();
        //einzelne Blüten
        crc2.beginPath();
        crc2.moveTo(_x - 6, _y - 24);
        crc2.lineTo(_x - 6, _y - 30);
        crc2.lineTo(_x, _y - 24); //erste Spitze fertig
        crc2.lineTo(_x + 1, _y - 30); //mittlere Spitze oben
        crc2.lineTo(_x + 5, _y - 24);
        crc2.lineTo(_x + 8, _y - 30);
        crc2.lineTo(_x + 10, _y - 24);
        crc2.closePath();
        crc2.fillStyle = "red";
        crc2.fill();
    }
    function drawRose(_x, _y) {
        //Stängel
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "darkgreen";
        crc2.fillRect(_x, _y, 2, 20);
        //Blätter
        crc2.beginPath();
        crc2.moveTo(_x, _y + 2);
        crc2.lineTo(_x + 10, _y + 10);
        crc2.lineTo(_x, _y + 12);
        crc2.stroke();
        crc2.fill();
        //Blüten
        crc2.beginPath();
        crc2.arc(_x + 2, _y - 8, 8, 0, Math.PI, false);
        crc2.closePath();
        crc2.lineWidth = 5;
        crc2.fillStyle = "pink";
        crc2.lineWidth = 1;
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.strokeStyle = "purple";
        crc2.stroke();
        //Spitzen  
        //   crc2.moveTo(_x - 10, _y - 10);
        //   crc2.lineTo(_x, _y + 5);
        //   crc2.lineTo(_x + 5, _y + 5);
        //   crc2.fillStyle = "red";
        //   crc2.fill();
    }
    function drawSunflower(_x, _y) {
        //Stängel
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "darkgreen";
        crc2.fillRect(_x, _y, 2, -40);
        //Blütenkreis
        crc2.beginPath();
        crc2.arc(_x + 1, _y - 35, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();
        //Kreis Mitte
        crc2.beginPath();
        crc2.arc(_x + 1, _y - 35, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.strokeStyle = "brown";
        crc2.fillStyle = "#4d4223";
        crc2.fill();
        crc2.closePath();
        // //Blätter
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 18);
        crc2.lineTo(_x, _y - 15);
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 10, _y - 18);
        crc2.lineTo(_x, _y - 15);
        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();
    }
})(L08Blumenwiese || (L08Blumenwiese = {})); //end namespace
//# sourceMappingURL=blumenwiese.js.map