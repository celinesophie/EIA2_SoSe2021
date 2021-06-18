"use strict";
var L11Blumenwiese;
(function (L11Blumenwiese) {
    class Bee extends L11Blumenwiese.Moveable {
        constructor(_size, _position) {
            // console.log("bee constructor");
            super(_size, _position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11Blumenwiese.Vector(45, 325); // position wenn Vektor nicht angegeben ist
            this.velocity = new L11Blumenwiese.Vector(50, 0); //start
            this.velocity.random(120, 20); //random. Pixelwerte (min und max)
        }
        draw() {
            //console.log("bee draw");
            L11Blumenwiese.crc2.save();
            L11Blumenwiese.crc2.beginPath();
            //body
            L11Blumenwiese.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L11Blumenwiese.crc2.strokeStyle = "yellow";
            L11Blumenwiese.crc2.fillStyle = "yellow";
            L11Blumenwiese.crc2.fill();
            L11Blumenwiese.crc2.closePath();
            //stripes
            L11Blumenwiese.crc2.beginPath();
            L11Blumenwiese.crc2.moveTo(this.position.x - 3, this.position.y + 7);
            L11Blumenwiese.crc2.lineTo(this.position.x - 3, this.position.y - 7);
            L11Blumenwiese.crc2.moveTo(this.position.x, this.position.y + 8);
            L11Blumenwiese.crc2.lineTo(this.position.x, this.position.y - 8);
            L11Blumenwiese.crc2.moveTo(this.position.x + 3, this.position.y + 7);
            L11Blumenwiese.crc2.lineTo(this.position.x + 3, this.position.y - 7);
            L11Blumenwiese.crc2.strokeStyle = "black";
            L11Blumenwiese.crc2.stroke();
            L11Blumenwiese.crc2.lineWidth = 1.5;
            L11Blumenwiese.crc2.closePath();
            L11Blumenwiese.crc2.restore();
            //wings
            L11Blumenwiese.crc2.save();
            L11Blumenwiese.crc2.beginPath();
            L11Blumenwiese.crc2.arc(this.position.x - 4, this.position.y - 8, 4, 0, 2 * Math.PI);
            L11Blumenwiese.crc2.strokeStyle = "lightblue";
            L11Blumenwiese.crc2.fillStyle = "lightblue";
            L11Blumenwiese.crc2.fill();
            L11Blumenwiese.crc2.closePath();
            L11Blumenwiese.crc2.stroke();
            L11Blumenwiese.crc2.restore();
        }
    } //end bee class
    L11Blumenwiese.Bee = Bee;
})(L11Blumenwiese || (L11Blumenwiese = {})); //namespace end
//# sourceMappingURL=Bee.js.map