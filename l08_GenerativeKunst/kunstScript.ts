namespace l08Kunst {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;      
        
        //background gradient
        gradient();

        crc2.save();

        //bezier curves
        for (let index: number = 0; index < Math.random() * 20; index++) {
            curve();
            crc2.translate(0, +20);
        }
        crc2.restore();
        crc2.save();

        //dots on canvas
        for (let index: number = 0; index < 45; index++) {
            let x: number = Math.floor(Math.random() * 900);
            let y: number = Math.floor(Math.random() * 500);
            
            crc2.fillStyle = "white";
            crc2.fillRect(x, y, 2, 2);   
        }

        crc2.restore();
        

        //small circles
        for (let index: number = 0; index < 10; index++) {
            smallCircle();
            
        }

        crc2.save();

        //circles shaped as a v
        for (let index: number = 0; index <= 19; index++) {
            
            if (index <= 9) {
                circle();
                crc2.translate(+39, +15);
                
            }
            else if (index > 9) {
                circle();
                crc2.translate(+39, -15);
                
            }
            //hsl colors for circles
            let h: number = Math.floor(Math.random() * (329 - 186 + 1)) + 166; //farbe, bläulich
            let s: number = Math.floor(Math.random() * 100); //saturation
            let l: number = Math.floor(Math.random() * 70); //luminanz
            let a: number = 0.4; //durchsichtigkeit

            crc2.fillStyle = "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
            crc2.fill();            
        }
        
    } //end handleLoad
    
    function circle(): void {
        crc2.beginPath();
        crc2.arc(70, 75, 50, 0, 2 * Math.PI);
        crc2.stroke();       
    }

    function smallCircle(): void {
        let randomRadius: number = Math.random() * 30;
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 500;
        crc2.beginPath();
        crc2.arc(x, y, randomRadius, 0, 2 * Math.PI);
        crc2.stroke();   
    }

    function curve(): void {
        crc2.beginPath();
        crc2.moveTo(20, 499); //starting point 
                       //(cp1x,cp1y,cp2x,cp2y,x,y);
        crc2.bezierCurveTo(20, 200, 880, 200, 880, 499); 
        crc2.stroke(); 
        // crc2.strokeStyle = "#FF0000";
        // crc2.lineWidth = 5;
    }

    function gradient(): void {
        // Create a linear gradient
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 899, 499);

        //gradient stop 1
        let h1: number = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s1: number = Math.floor(Math.random() * 100); //saturation
        let l1: number = Math.floor(Math.random() * 70); //luminanz
        let a1: number = 1; //durchsichtigkeit
        //gradient stop 2
        let h2: number = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s2: number = Math.floor(Math.random() * 100); //saturation
        let l2: number = Math.floor(Math.random() * 70); //luminanz
        //gradient stop 3
        let h3: number = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s3: number = Math.floor(Math.random() * 100); //saturation
        let l3: number = Math.floor(Math.random() * 70); //luminanz

        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");

        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 899, 499);
    }

} //end namespace