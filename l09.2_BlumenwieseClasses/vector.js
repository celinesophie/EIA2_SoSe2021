"use strict";
var L09Blumenwiese;
(function (L09Blumenwiese) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        //vektor mit zufälliger richtung in einem bestimmten Längenbereich
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    L09Blumenwiese.Vector = Vector;
})(L09Blumenwiese || (L09Blumenwiese = {})); //namespace end
//# sourceMappingURL=vector.js.map