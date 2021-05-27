namespace L09Blumenwiese {

    export class Flower {
        // position: Vector;

        constructor(_position?: Vector) {
            console.log("flower constructor");
            // let randomX: number = Math.floor(Math.random() * 900);
            // let randomY: number = Math.floor(Math.random() * 200);

            // if (_position) //kein Vektor angegeben
            //     this.position = _position;
            // else    
            //     this.position = new Vector (randomX + 100, randomY + 270); // position wenn Vektor nicht angegeben ist
        }

        draw(_x: number, _y: number): void {
            console.log("draw rose");
            //Stängel
            crc2.moveTo(_x, _y);
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(_x, _y, 2, 20);
  
            //Blätter
            crc2.beginPath();
            crc2.moveTo(_x, _y + 2);
            crc2.lineTo(_x + 10, _y + 10);
            crc2.lineTo(_x, _y + 12);
  
            crc2.stroke();
            crc2.fill();
      
            //Blüten
            crc2.beginPath();
            crc2.arc(_x + 2, _y - 8, 8, 0, Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.fillStyle = "pink";
            crc2.lineWidth = 1;
            crc2.fillStyle = "pink";
            crc2.fill();
            crc2.strokeStyle = "purple";
            crc2.stroke();

        }

        draww(_x: number, _y: number): void {
            console.log("draw tulip");
            
            //Stängel
            crc2.moveTo(_x, _y);
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(_x, _y, 2, -20);

            //Blätter
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 10, _y - 10);
            crc2.lineTo(_x, _y - 15);

            crc2.stroke();
            crc2.fill();
            
            //BlütenKopf
            crc2.beginPath();
            crc2.arc(_x + 2, _y - 24, 8, 0, Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.fillStyle = "red";
            crc2.lineWidth = 1;
            crc2.fillStyle = "red";
            crc2.fill();
                //einzelne Blüten
            crc2.beginPath();
            crc2.moveTo(_x - 6, _y - 24);
            crc2.lineTo(_x - 6, _y - 30);
            crc2.lineTo(_x, _y - 24); //erste Spitze fertig
            crc2.lineTo(_x + 1, _y - 30); //mittlere Spitze oben
            crc2.lineTo(_x + 5, _y - 24);
            crc2.lineTo(_x + 8, _y - 30);
            crc2.lineTo(_x + 10, _y - 24);
            crc2.closePath();
            crc2.fillStyle = "red";
            crc2.fill();
        }

        drawww(_x: number, _y: number): void {
            console.log("draw sunflower");
            //Stängel
            crc2.moveTo(_x, _y);
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(_x, _y, 2, -40);

        //Blütenkreis
            crc2.beginPath();
            crc2.arc(_x + 1, _y - 35, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();

        //Kreis Mitte
            crc2.beginPath();
            crc2.arc(_x + 1, _y - 35, 5, 0, 2 * Math.PI);
        
            crc2.stroke();
            
            crc2.strokeStyle = "brown";
            crc2.fillStyle = "#4d4223";
            crc2.fill();
            
            crc2.closePath();

            // //Blätter
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 10, _y - 18);
            crc2.lineTo(_x, _y - 15);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 10, _y - 18);
            crc2.lineTo(_x, _y - 15);

            crc2.fillStyle = "darkgreen";
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fill();

        }
    }//end flower class

















}//end namespace