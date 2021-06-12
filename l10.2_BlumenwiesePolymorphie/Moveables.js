"use strict";
var L10Blumenwiese;
(function (L10Blumenwiese) {
    class Moveables {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            console.log("Moveables constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10Blumenwiese.Vector(0, 0);
            this.velocity = new L10Blumenwiese.Vector(0, 0);
        }
        draw() {
            console.log("Moveables draw");
        }
        move(_timeslice) {
            console.log("Moveables move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10Blumenwiese.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10Blumenwiese.crc2.canvas.height;
            if (this.position.x > L10Blumenwiese.crc2.canvas.width)
                this.position.x -= L10Blumenwiese.crc2.canvas.width;
            if (this.position.y > L10Blumenwiese.crc2.canvas.height)
                this.position.y -= L10Blumenwiese.crc2.canvas.height;
        }
    } //class Moveables
    L10Blumenwiese.Moveables = Moveables;
})(L10Blumenwiese || (L10Blumenwiese = {})); //namesapce
//# sourceMappingURL=Moveables.js.map