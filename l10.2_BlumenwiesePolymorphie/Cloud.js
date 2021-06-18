"use strict";
var L10Blumenwiese;
(function (L10Blumenwiese) {
    class Cloud extends L10Blumenwiese.Moveables {
        constructor(_size, _position) {
            // console.log("cloud constructor");
            super(_size, _position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10Blumenwiese.Vector(50, 50); // position wenn Vektor nicht angegeben ist
            this.velocity = new L10Blumenwiese.Vector(30, 0); //start
            this.size = _size;
        }
        draw() {
            // console.log("cloud draw");
            L10Blumenwiese.crc2.save();
            L10Blumenwiese.crc2.translate(this.position.x, this.position.y);
            L10Blumenwiese.crc2.scale(this.size, this.size);
            L10Blumenwiese.crc2.beginPath();
            L10Blumenwiese.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            L10Blumenwiese.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            L10Blumenwiese.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            L10Blumenwiese.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            L10Blumenwiese.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            L10Blumenwiese.crc2.lineTo(this.position.x, this.position.y + 60);
            L10Blumenwiese.crc2.strokeStyle = "white";
            L10Blumenwiese.crc2.stroke();
            L10Blumenwiese.crc2.fillStyle = "white";
            L10Blumenwiese.crc2.fill();
            L10Blumenwiese.crc2.restore();
        }
    } //end cloud class
    L10Blumenwiese.Cloud = Cloud;
})(L10Blumenwiese || (L10Blumenwiese = {})); //end namespace
//# sourceMappingURL=Cloud.js.map