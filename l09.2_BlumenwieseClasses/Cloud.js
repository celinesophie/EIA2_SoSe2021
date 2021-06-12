"use strict";
var L09Blumenwiese;
(function (L09Blumenwiese) {
    class Cloud {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            // console.log("cloud constructor");
            if (_position) //kein Vektor angegeben
                this.position = _position;
            else
                this.position = new L09Blumenwiese.Vector(50, 50); // position wenn Vektor nicht angegeben ist
            this.velocity = new L09Blumenwiese.Vector(30, 0); //start
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("cloud move");
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
            // console.log("cloud draw");
            L09Blumenwiese.crc2.save();
            L09Blumenwiese.crc2.translate(this.position.x, this.position.y);
            L09Blumenwiese.crc2.scale(this.size, this.size);
            L09Blumenwiese.crc2.beginPath();
            L09Blumenwiese.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            L09Blumenwiese.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            L09Blumenwiese.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            L09Blumenwiese.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            L09Blumenwiese.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            L09Blumenwiese.crc2.lineTo(this.position.x, this.position.y + 60);
            L09Blumenwiese.crc2.strokeStyle = "white";
            L09Blumenwiese.crc2.stroke();
            L09Blumenwiese.crc2.fillStyle = "white";
            L09Blumenwiese.crc2.fill();
            L09Blumenwiese.crc2.restore();
        }
    } //end cloud class
    L09Blumenwiese.Cloud = Cloud;
})(L09Blumenwiese || (L09Blumenwiese = {})); //end namespace
//# sourceMappingURL=Cloud.js.map