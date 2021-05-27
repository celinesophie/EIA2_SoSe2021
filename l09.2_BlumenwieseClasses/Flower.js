"use strict";
var L09Blumenwiese;
(function (L09Blumenwiese) {
    class Flower {
        // position: Vector;
        constructor(_position) {
            console.log("flower constructor");
            // let randomX: number = Math.floor(Math.random() * 900);
            // let randomY: number = Math.floor(Math.random() * 200);
            // if (_position) //kein Vektor angegeben
            //     this.position = _position;
            // else    
            //     this.position = new Vector (randomX + 100, randomY + 270); // position wenn Vektor nicht angegeben ist
        }
        draw(_x, _y) {
            console.log("draw rose");
            //Stängel
            L09Blumenwiese.crc2.moveTo(_x, _y);
            L09Blumenwiese.crc2.fillStyle = "darkgreen";
            L09Blumenwiese.crc2.fillRect(_x, _y, 2, 20);
            //Blätter
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.moveTo(_x, _y + 2);
            L09Blumenwiese.crc2.lineTo(_x + 10, _y + 10);
            L09Blumenwiese.crc2.lineTo(_x, _y + 12);
            L09Blumenwiese.crc2.stroke();
            L09Blumenwiese.crc2.fill();
            //Blüten
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.arc(_x + 2, _y - 8, 8, 0, Math.PI, false);
            L09Blumenwiese.crc2.closePath();
            L09Blumenwiese.crc2.lineWidth = 5;
            L09Blumenwiese.crc2.fillStyle = "pink";
            L09Blumenwiese.crc2.lineWidth = 1;
            L09Blumenwiese.crc2.fillStyle = "pink";
            L09Blumenwiese.crc2.fill();
            L09Blumenwiese.crc2.strokeStyle = "purple";
            L09Blumenwiese.crc2.stroke();
        }
        draww(_x, _y) {
            console.log("draw tulip");
            //Stängel
            L09Blumenwiese.crc2.moveTo(_x, _y);
            L09Blumenwiese.crc2.fillStyle = "darkgreen";
            L09Blumenwiese.crc2.fillRect(_x, _y, 2, -20);
            //Blätter
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.moveTo(_x, _y);
            L09Blumenwiese.crc2.lineTo(_x + 10, _y - 10);
            L09Blumenwiese.crc2.lineTo(_x, _y - 15);
            L09Blumenwiese.crc2.stroke();
            L09Blumenwiese.crc2.fill();
            //BlütenKopf
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.arc(_x + 2, _y - 24, 8, 0, Math.PI, false);
            L09Blumenwiese.crc2.closePath();
            L09Blumenwiese.crc2.lineWidth = 5;
            L09Blumenwiese.crc2.fillStyle = "red";
            L09Blumenwiese.crc2.lineWidth = 1;
            L09Blumenwiese.crc2.fillStyle = "red";
            L09Blumenwiese.crc2.fill();
            //einzelne Blüten
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.moveTo(_x - 6, _y - 24);
            L09Blumenwiese.crc2.lineTo(_x - 6, _y - 30);
            L09Blumenwiese.crc2.lineTo(_x, _y - 24); //erste Spitze fertig
            L09Blumenwiese.crc2.lineTo(_x + 1, _y - 30); //mittlere Spitze oben
            L09Blumenwiese.crc2.lineTo(_x + 5, _y - 24);
            L09Blumenwiese.crc2.lineTo(_x + 8, _y - 30);
            L09Blumenwiese.crc2.lineTo(_x + 10, _y - 24);
            L09Blumenwiese.crc2.closePath();
            L09Blumenwiese.crc2.fillStyle = "red";
            L09Blumenwiese.crc2.fill();
        }
        drawww(_x, _y) {
            console.log("draw sunflower");
            //Stängel
            L09Blumenwiese.crc2.moveTo(_x, _y);
            L09Blumenwiese.crc2.fillStyle = "darkgreen";
            L09Blumenwiese.crc2.fillRect(_x, _y, 2, -40);
            //Blütenkreis
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.arc(_x + 1, _y - 35, 10, 0, 2 * Math.PI);
            L09Blumenwiese.crc2.fillStyle = "yellow";
            L09Blumenwiese.crc2.fill();
            L09Blumenwiese.crc2.closePath();
            //Kreis Mitte
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.arc(_x + 1, _y - 35, 5, 0, 2 * Math.PI);
            L09Blumenwiese.crc2.stroke();
            L09Blumenwiese.crc2.strokeStyle = "brown";
            L09Blumenwiese.crc2.fillStyle = "#4d4223";
            L09Blumenwiese.crc2.fill();
            L09Blumenwiese.crc2.closePath();
            // //Blätter
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.moveTo(_x, _y);
            L09Blumenwiese.crc2.lineTo(_x + 10, _y - 18);
            L09Blumenwiese.crc2.lineTo(_x, _y - 15);
            L09Blumenwiese.crc2.moveTo(_x, _y);
            L09Blumenwiese.crc2.lineTo(_x - 10, _y - 18);
            L09Blumenwiese.crc2.lineTo(_x, _y - 15);
            L09Blumenwiese.crc2.fillStyle = "darkgreen";
            L09Blumenwiese.crc2.strokeStyle = "black";
            L09Blumenwiese.crc2.stroke();
            L09Blumenwiese.crc2.fill();
        }
    } //end flower class
    L09Blumenwiese.Flower = Flower;
})(L09Blumenwiese || (L09Blumenwiese = {})); //end namespace
//# sourceMappingURL=Flower.js.map