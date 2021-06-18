namespace L11Blumenwiese {

    export class Cloud extends Moveable {

    constructor(_size: number, _position?: Vector) {
            // console.log("cloud constructor");
            super(_size, _position);
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(50, 50); // position wenn Vektor nicht angegeben ist
                
            this.velocity = new Vector(30, 0); //start

            this.size = _size;
        }

    draw(): void {
            // console.log("cloud draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            crc2.moveTo(this.position.x + 200, this.position.y + 60);
            crc2.lineTo(this.position.x, this.position.y + 60);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            
            crc2.restore();
            
        }

    } //end cloud class

}//end namespace