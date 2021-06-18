"use strict";
//Nectar Methode inspiriert von Lisa Waletzko
var L11Blumenwiese;
(function (L11Blumenwiese) {
    class Flower {
        position;
        fillLevel;
        velocity;
        constructor(_fillLevel, _position) {
            // console.log("flower constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11Blumenwiese.Vector(0, 0);
            let randomFill = Math.floor(Math.random() * 50);
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            this.velocity = new L11Blumenwiese.Vector(0, 0);
        }
        draw() {
            console.log("Flower draw");
        }
        nectar(_timeslice) {
            // console.log("Flower nectar");
        }
    } //end flower class
    L11Blumenwiese.Flower = Flower;
})(L11Blumenwiese || (L11Blumenwiese = {})); //end namespace
//# sourceMappingURL=Flower.js.map