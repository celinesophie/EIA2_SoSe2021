"use strict";
var l08Kunst;
(function (l08Kunst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        //background gradient
        gradient();
        crc2.save();
        //bezier curves
        for (let index = 0; index < Math.random() * 20; index++) {
            curve();
            crc2.translate(0, +20);
        }
        crc2.restore();
        crc2.save();
        //dots on canvas
        for (let index = 0; index < 45; index++) {
            let x = Math.floor(Math.random() * 900);
            let y = Math.floor(Math.random() * 500);
            crc2.fillStyle = "white";
            crc2.fillRect(x, y, 2, 2);
        }
        crc2.restore();
        //small circles
        for (let index = 0; index < 10; index++) {
            smallCircle();
        }
        crc2.save();
        //circles shaped as a v
        for (let index = 0; index <= 19; index++) {
            if (index <= 9) {
                circle();
                crc2.translate(+39, +15);
            }
            else if (index > 9) {
                circle();
                crc2.translate(+39, -15);
            }
            //Diese Weise wurde im Praktikum mit Lisa W. und Jirka erarbeitet:
            //hsl colors for circles
            let h = Math.floor(Math.random() * (329 - 186 + 1)) + 166; //farbe, bläulich
            let s = Math.floor(Math.random() * 100); //saturation
            let l = Math.floor(Math.random() * 70); //luminanz
            let a = 0.4; //durchsichtigkeit
            crc2.fillStyle = "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
            crc2.fill();
        }
    } //end handleLoad
    function circle() {
        crc2.beginPath();
        crc2.arc(70, 75, 50, 0, 2 * Math.PI);
        crc2.stroke();
    }
    function smallCircle() {
        let randomRadius = Math.random() * 30;
        let x = Math.random() * 900;
        let y = Math.random() * 500;
        crc2.beginPath();
        crc2.arc(x, y, randomRadius, 0, 2 * Math.PI);
        crc2.stroke();
    }
    function curve() {
        crc2.beginPath();
        crc2.moveTo(20, 499); //starting point 
        //(cp1x,cp1y,cp2x,cp2y,x,y);
        crc2.bezierCurveTo(20, 200, 880, 200, 880, 499);
        crc2.stroke();
        // crc2.strokeStyle = "#FF0000";
        // crc2.lineWidth = 5;
    }
    function gradient() {
        // Create a linear gradient
        let gradient = crc2.createLinearGradient(0, 0, 899, 499);
        //gradient stop 1
        let h1 = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s1 = Math.floor(Math.random() * 100); //saturation
        let l1 = Math.floor(Math.random() * 70); //luminanz
        let a1 = 1; //durchsichtigkeit
        //gradient stop 2
        let h2 = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s2 = Math.floor(Math.random() * 100); //saturation
        let l2 = Math.floor(Math.random() * 70); //luminanz
        //gradient stop 3
        let h3 = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s3 = Math.floor(Math.random() * 100); //saturation
        let l3 = Math.floor(Math.random() * 70); //luminanz
        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");
        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 899, 499);
    }
})(l08Kunst || (l08Kunst = {})); //end namespace
//# sourceMappingURL=kunstScript.js.map