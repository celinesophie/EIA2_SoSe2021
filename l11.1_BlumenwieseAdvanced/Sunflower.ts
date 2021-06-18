namespace L11Blumenwiese {

    export class Sunflower extends Flower {

        constructor(_fillLevel?: number, _position?: Vector) {
            super(_fillLevel, _position);
            //random Vektor auf Wiese
            let randomX: number = Math.floor(Math.random() * 900) + 100; 
            let randomY: number = Math.floor(Math.random() * 200) + 270;
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(randomX, randomY);

            let randomFill: number = Math.floor(Math.random() * 50);
           
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            
            this.velocity = new Vector(0, 0);

        }

        draw(): void {
            // console.log("draw sunflower");
            crc2.save();
            //Stängel
            crc2.moveTo(this.position.x, this.position.y);
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(this.position.x, this.position.y, 2, -40);

        //Blütenkreis
            crc2.beginPath();
            crc2.arc(this.position.x + 1, this.position.y - 35, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();

        //Kreis Mitte
            crc2.beginPath();
            crc2.arc(this.position.x + 1, this.position.y - 35, 5, 0, 2 * Math.PI);
        
            crc2.stroke();
            
            crc2.strokeStyle = "brown";
            crc2.fillStyle = "#4d4223";
            crc2.fill();
            
            crc2.closePath();

            // //Blätter
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 10, this.position.y - 18);
            crc2.lineTo(this.position.x, this.position.y - 15);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 10, this.position.y - 18);
            crc2.lineTo(this.position.x, this.position.y - 15);

            crc2.fillStyle = "darkgreen";
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fill();

            crc2.restore();

        }

        public nectar(_timeslice: number): void {
            for (let i: number = 0; i < 10; i++) {
                crc2.save();
                crc2.beginPath();
                crc2.fillRect(this.position.x + 15, this.position.y - 5, 4, this.fillLevel);
                crc2.closePath();
                crc2.fillStyle = "yellow";
                crc2.strokeStyle = "yellow";
                crc2.fill();
                crc2.stroke();
                }
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
    
            if (this.fillLevel < 50)
                    this.fillLevel += 0.03;
            if (this.fillLevel > 50)
                    this.fillLevel -= this.fillLevel;

            crc2.restore();
        }




    } //end Class

} //namespace end