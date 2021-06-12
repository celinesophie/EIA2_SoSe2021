namespace L10Blumenwiese {

    export class Bee extends Moveables {
        // position: Vector;
        // velocity: Vector;
        // size: number;

        constructor(_size: number, _position?: Vector) {
            // console.log("bee constructor");
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(45, 325); // position wenn Vektor nicht angegeben ist
                
            this.velocity = new Vector(50, 0); //start
            this.velocity.random(120, 20); //random. Pixelwerte (min und max)
        }

        draw(): void {
            //console.log("bee draw");
            crc2.save();
            crc2.beginPath();
            //body
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.strokeStyle = "yellow";
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();
            
            //stripes
            crc2.beginPath();
            crc2.moveTo(this.position.x - 3, this.position.y + 7);
            crc2.lineTo(this.position.x - 3, this.position.y - 7);
            crc2.moveTo(this.position.x, this.position.y + 8);
            crc2.lineTo(this.position.x, this.position.y - 8);
            crc2.moveTo(this.position.x + 3, this.position.y + 7);
            crc2.lineTo(this.position.x + 3, this.position.y - 7);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.lineWidth = 1.5;
            crc2.closePath();
            crc2.restore();

            //wings
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x - 4, this.position.y - 8, 4, 0, 2 * Math.PI);
            crc2.strokeStyle = "lightblue";
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.closePath();
            
            crc2.stroke();
            
            crc2.restore();
        }





    }//end bee class

} //namespace end