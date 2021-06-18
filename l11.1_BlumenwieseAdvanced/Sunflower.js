"use strict";
var L11Blumenwiese;
(function (L11Blumenwiese) {
    class Sunflower extends L11Blumenwiese.Flower {
        constructor(_fillLevel, _position) {
            super(_fillLevel, _position);
            //random Vektor auf Wiese
            let randomX = Math.floor(Math.random() * 900) + 100;
            let randomY = Math.floor(Math.random() * 200) + 270;
            if (_position)
                this.position = _position;
            else
                this.position = new L11Blumenwiese.Vector(randomX, randomY);
            let randomFill = Math.floor(Math.random() * 50);
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            this.velocity = new L11Blumenwiese.Vector(0, 0);
        }
        draw() {
            // console.log("draw sunflower");
            L11Blumenwiese.crc2.save();
            //Stängel
            L11Blumenwiese.crc2.moveTo(this.position.x, this.position.y);
            L11Blumenwiese.crc2.fillStyle = "darkgreen";
            L11Blumenwiese.crc2.fillRect(this.position.x, this.position.y, 2, -40);
            //Blütenkreis
            L11Blumenwiese.crc2.beginPath();
            L11Blumenwiese.crc2.arc(this.position.x + 1, this.position.y - 35, 10, 0, 2 * Math.PI);
            L11Blumenwiese.crc2.fillStyle = "yellow";
            L11Blumenwiese.crc2.fill();
            L11Blumenwiese.crc2.closePath();
            //Kreis Mitte
            L11Blumenwiese.crc2.beginPath();
            L11Blumenwiese.crc2.arc(this.position.x + 1, this.position.y - 35, 5, 0, 2 * Math.PI);
            L11Blumenwiese.crc2.stroke();
            L11Blumenwiese.crc2.strokeStyle = "brown";
            L11Blumenwiese.crc2.fillStyle = "#4d4223";
            L11Blumenwiese.crc2.fill();
            L11Blumenwiese.crc2.closePath();
            // //Blätter
            L11Blumenwiese.crc2.beginPath();
            L11Blumenwiese.crc2.moveTo(this.position.x, this.position.y);
            L11Blumenwiese.crc2.lineTo(this.position.x + 10, this.position.y - 18);
            L11Blumenwiese.crc2.lineTo(this.position.x, this.position.y - 15);
            L11Blumenwiese.crc2.moveTo(this.position.x, this.position.y);
            L11Blumenwiese.crc2.lineTo(this.position.x - 10, this.position.y - 18);
            L11Blumenwiese.crc2.lineTo(this.position.x, this.position.y - 15);
            L11Blumenwiese.crc2.fillStyle = "darkgreen";
            L11Blumenwiese.crc2.strokeStyle = "black";
            L11Blumenwiese.crc2.stroke();
            L11Blumenwiese.crc2.fill();
            L11Blumenwiese.crc2.restore();
        }
        nectar(_timeslice) {
            for (let i = 0; i < 10; i++) {
                L11Blumenwiese.crc2.save();
                L11Blumenwiese.crc2.beginPath();
                L11Blumenwiese.crc2.fillRect(this.position.x + 15, this.position.y - 5, 4, this.fillLevel);
                L11Blumenwiese.crc2.closePath();
                L11Blumenwiese.crc2.fillStyle = "yellow";
                L11Blumenwiese.crc2.strokeStyle = "yellow";
                L11Blumenwiese.crc2.fill();
                L11Blumenwiese.crc2.stroke();
            }
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.fillLevel < 50)
                this.fillLevel += 0.03;
            if (this.fillLevel > 50)
                this.fillLevel -= this.fillLevel;
            L11Blumenwiese.crc2.restore();
        }
    } //end Class
    L11Blumenwiese.Sunflower = Sunflower;
})(L11Blumenwiese || (L11Blumenwiese = {})); //namespace end
//# sourceMappingURL=Sunflower.js.map