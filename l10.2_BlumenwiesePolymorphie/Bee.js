"use strict";
var L10Blumenwiese;
(function (L10Blumenwiese) {
    class Bee extends L10Blumenwiese.Moveables {
        // position: Vector;
        // velocity: Vector;
        // size: number;
        constructor(_size, _position) {
            // console.log("bee constructor");
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10Blumenwiese.Vector(45, 325); // position wenn Vektor nicht angegeben ist
            this.velocity = new L10Blumenwiese.Vector(50, 0); //start
            this.velocity.random(120, 20); //random. Pixelwerte (min und max)
        }
        draw() {
            //console.log("bee draw");
            L10Blumenwiese.crc2.save();
            L10Blumenwiese.crc2.beginPath();
            //body
            L10Blumenwiese.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L10Blumenwiese.crc2.strokeStyle = "yellow";
            L10Blumenwiese.crc2.fillStyle = "yellow";
            L10Blumenwiese.crc2.fill();
            L10Blumenwiese.crc2.closePath();
            //stripes
            L10Blumenwiese.crc2.beginPath();
            L10Blumenwiese.crc2.moveTo(this.position.x - 3, this.position.y + 7);
            L10Blumenwiese.crc2.lineTo(this.position.x - 3, this.position.y - 7);
            L10Blumenwiese.crc2.moveTo(this.position.x, this.position.y + 8);
            L10Blumenwiese.crc2.lineTo(this.position.x, this.position.y - 8);
            L10Blumenwiese.crc2.moveTo(this.position.x + 3, this.position.y + 7);
            L10Blumenwiese.crc2.lineTo(this.position.x + 3, this.position.y - 7);
            L10Blumenwiese.crc2.strokeStyle = "black";
            L10Blumenwiese.crc2.stroke();
            L10Blumenwiese.crc2.lineWidth = 1.5;
            L10Blumenwiese.crc2.closePath();
            L10Blumenwiese.crc2.restore();
            //wings
            L10Blumenwiese.crc2.save();
            L10Blumenwiese.crc2.beginPath();
            L10Blumenwiese.crc2.arc(this.position.x - 4, this.position.y - 8, 4, 0, 2 * Math.PI);
            L10Blumenwiese.crc2.strokeStyle = "lightblue";
            L10Blumenwiese.crc2.fillStyle = "lightblue";
            L10Blumenwiese.crc2.fill();
            L10Blumenwiese.crc2.closePath();
            L10Blumenwiese.crc2.stroke();
            L10Blumenwiese.crc2.restore();
        }
    } //end bee class
    L10Blumenwiese.Bee = Bee;
})(L10Blumenwiese || (L10Blumenwiese = {})); //namespace end
//# sourceMappingURL=Bee.js.map