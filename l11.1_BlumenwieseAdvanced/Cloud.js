"use strict";
var L11Blumenwiese;
(function (L11Blumenwiese) {
    class Cloud extends L11Blumenwiese.Moveable {
        constructor(_size, _position) {
            // console.log("cloud constructor");
            super(_size, _position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11Blumenwiese.Vector(50, 50); // position wenn Vektor nicht angegeben ist
            this.velocity = new L11Blumenwiese.Vector(30, 0); //start
            this.size = _size;
        }
        draw() {
            // console.log("cloud draw");
            L11Blumenwiese.crc2.save();
            L11Blumenwiese.crc2.translate(this.position.x, this.position.y);
            L11Blumenwiese.crc2.scale(this.size, this.size);
            L11Blumenwiese.crc2.beginPath();
            L11Blumenwiese.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            L11Blumenwiese.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            L11Blumenwiese.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            L11Blumenwiese.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            L11Blumenwiese.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            L11Blumenwiese.crc2.lineTo(this.position.x, this.position.y + 60);
            L11Blumenwiese.crc2.strokeStyle = "white";
            L11Blumenwiese.crc2.stroke();
            L11Blumenwiese.crc2.fillStyle = "white";
            L11Blumenwiese.crc2.fill();
            L11Blumenwiese.crc2.restore();
        }
    } //end cloud class
    L11Blumenwiese.Cloud = Cloud;
})(L11Blumenwiese || (L11Blumenwiese = {})); //end namespace
//# sourceMappingURL=Cloud.js.map