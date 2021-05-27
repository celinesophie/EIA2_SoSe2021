"use strict";
var L09Blumenwiese;
(function (L09Blumenwiese) {
    class Bee {
        constructor(_size, _position) {
            // console.log("bee constructor");
            if (_position) //kein Vektor angegeben
                this.position = _position;
            else
                this.position = new L09Blumenwiese.Vector(45, 325); // position wenn Vektor nicht angegeben ist
            this.velocity = new L09Blumenwiese.Vector(50, 0); //start
            this.velocity.random(120, 20); //random. Pixelwerte (min und max)
        }
        move(_timeslice) {
            // console.log("bee move");
            let offset = new L09Blumenwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09Blumenwiese.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09Blumenwiese.crc2.canvas.height;
            if (this.position.x > L09Blumenwiese.crc2.canvas.width)
                this.position.x -= L09Blumenwiese.crc2.canvas.width;
            if (this.position.y > L09Blumenwiese.crc2.canvas.height)
                this.position.y -= L09Blumenwiese.crc2.canvas.height;
        }
        draw() {
            //console.log("bee draw");
            L09Blumenwiese.crc2.save();
            L09Blumenwiese.crc2.beginPath();
            //body
            L09Blumenwiese.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L09Blumenwiese.crc2.strokeStyle = "yellow";
            L09Blumenwiese.crc2.fillStyle = "yellow";
            L09Blumenwiese.crc2.fill();
            L09Blumenwiese.crc2.closePath();
            //stripes
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.moveTo(this.position.x - 3, this.position.y + 7);
            L09Blumenwiese.crc2.lineTo(this.position.x - 3, this.position.y - 7);
            L09Blumenwiese.crc2.moveTo(this.position.x, this.position.y + 8);
            L09Blumenwiese.crc2.lineTo(this.position.x, this.position.y - 8);
            L09Blumenwiese.crc2.moveTo(this.position.x + 3, this.position.y + 7);
            L09Blumenwiese.crc2.lineTo(this.position.x + 3, this.position.y - 7);
            L09Blumenwiese.crc2.strokeStyle = "black";
            L09Blumenwiese.crc2.stroke();
            L09Blumenwiese.crc2.lineWidth = 1.5;
            L09Blumenwiese.crc2.closePath();
            L09Blumenwiese.crc2.restore();
            //wings
            L09Blumenwiese.crc2.save();
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.arc(this.position.x - 4, this.position.y - 8, 4, 0, 2 * Math.PI);
            L09Blumenwiese.crc2.strokeStyle = "lightblue";
            L09Blumenwiese.crc2.fillStyle = "lightblue";
            L09Blumenwiese.crc2.fill();
            L09Blumenwiese.crc2.closePath();
            L09Blumenwiese.crc2.stroke();
            L09Blumenwiese.crc2.restore();
        }
    } //end bee class
    L09Blumenwiese.Bee = Bee;
})(L09Blumenwiese || (L09Blumenwiese = {})); //namespace end
//# sourceMappingURL=Bee.js.map