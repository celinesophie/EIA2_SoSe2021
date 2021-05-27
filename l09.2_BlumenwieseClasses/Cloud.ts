namespace L09Blumenwiese {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            // console.log("cloud constructor");

            if (_position) //kein Vektor angegeben
                this.position = _position;
            else
                this.position = new Vector(50, 50); // position wenn Vektor nicht angegeben ist
                
            this.velocity = new Vector(30, 0); //start

            this.size = _size;
        }

        move(_timeslice: number): void { //timeslice = milli)sekunde
            //console.log("cloud move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
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