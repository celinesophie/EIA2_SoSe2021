//Nectar Methode inspiriert von Lisa Waletzko

namespace L11Blumenwiese {

    export abstract class Flower {

        protected position: Vector;
        protected fillLevel: number;
        protected velocity: Vector;

        constructor(_fillLevel?: number, _position?: Vector) {
            // console.log("flower constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            let randomFill: number = Math.floor(Math.random() * 50);
           
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;

            this.velocity = new Vector(0, 0);
            
        }

        public draw(): void {
            console.log("Flower draw");
            
        }

        public nectar(_timeslice: number): void {
            // console.log("Flower nectar");
        }


        
    }//end flower class

}//end namespace