namespace L09Blumenwiese {
    interface Vector {
        x: number;
        y: number;
    }  
    let imageData: ImageData;
    let cloudArray: Cloud [] = [];
    let beeArray: Bee [] = [];
    let flowerArray: Flower [] = [];

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;  

        let posMountains: Vector = { x: 0, y: 250 };

        drawSky();

        createClouds();
        window.setInterval(moveCloud, 50); // alle xx ms aktualisieren

        drawMeadow();
        drawSun();
        drawMountains(posMountains, 75, 140, "grey", "white");
        drawMountains(posMountains, 50, 100, "grey", "lightgrey");       
        drawTrees(250, 250);
        drawTrees(800, 260);

        drawBeehome();

        createFlower();
        drawFlower();


        //save background
        imageData = crc2.getImageData(0, 0, 900, 500);
        
        createBee();
        window.setInterval(moveBee, 20);

        

    }//end handleload

    

    function createBee(): void {
        for (let i: number = 0; i < 10; i++) {
            // console.log("create bee");
            let bee: Bee = new Bee(0.8);
            beeArray.push(bee);    
        }
    }

    function moveBee(): void {
        // crc2.clearRect(0, 0, 900, 500);
        // crc2.putImageData(imageData, 0, 0);
        // console.log("movebee");
        
        for (let bee of beeArray) {
            bee.move(1 / 50); //20 ms = 1/50
            bee.draw();
        }
    }

    function createClouds(): void {
        for (let i: number = 0; i < 1; i++) {
            let cloud: Cloud = new Cloud(0.5); //(size?)(Math.random() * (0.9 - 0.8))
            cloudArray.push(cloud);
            // console.log(cloudArray);                 
        }
    }

    function moveCloud(): void {
        // console.log("cloud float");
        crc2.clearRect(0, 0, 900, 500);
        crc2.putImageData(imageData, 0, 0);

        for (let cloud of cloudArray) {
            cloud.move(1 / 50); //20 ms = 1/50
            cloud.draw();
        }
    }

    function createFlower(): void {
        console.log("create flower");
        for (let i: number = 0; i < 10; i++) {
            let rose: Flower = new Flower();
            flowerArray.push(rose);  
        } 
        
        for (let i: number = 0; i < 10; i++) {
            let tulip: Flower = new Flower();
            flowerArray.push(tulip);  
        } 

        for (let i: number = 0; i < 10; i++) {
            let sunflower: Flower = new Flower();
            flowerArray.push(sunflower);  
        } 
        
    }

    function drawFlower(): void {

        for (let rose of flowerArray) {
            let randomX: number = Math.floor(Math.random() * 900);
            let randomY: number = Math.floor(Math.random() * 200);
            rose.draw(randomX + 100, randomY + 270);
        }
        for (let tulip of flowerArray) {
            let randomX: number = Math.floor(Math.random() * 900);
            let randomY: number = Math.floor(Math.random() * 200);
            tulip.draww(randomX + 100, randomY + 270);
        }
        for (let sunflower of flowerArray) {
            let randomX: number = Math.floor(Math.random() * 900);
            let randomY: number = Math.floor(Math.random() * 200);
            sunflower.drawww(randomX + 100, randomY + 270);
        }
    }

    function drawSky(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "royalblue");
        gradient.addColorStop(0.4, "white");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 900, 500);

    }

    function drawMeadow(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(450, 0, 450, 500);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "lightgreen");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 250, 900, 300);
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawSun(): void {
        let gradient: CanvasGradient = crc2.createRadialGradient(150, 75, 5, 90, 60, 100);
        gradient.addColorStop(0, "#fffc4f");
        gradient.addColorStop(1, "#faf9ba");
        crc2.beginPath();
        crc2.arc(150, 75, 50, 0, 2 * Math.PI);
        crc2.strokeStyle = "yellow";
        crc2.stroke();
        crc2.fillStyle = gradient;
        crc2.fill(); 
        crc2.closePath();
    }
      
    function drawTrees(_x: number, _y: number): void { 
        //Stamm
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_x, _y, 20, -70);
        crc2.closePath();
        //Ast
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y - 30);
        crc2.lineTo(_x + 50, _y - 50);
        crc2.lineTo(_x + 10, _y - 40);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        //Baumkrone
        crc2.beginPath();
        crc2.arc(_x + 9, _y - 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        
    }

    function drawBeehome(): void {
        crc2.restore();
        //main house
        crc2.beginPath();
        crc2.arc(50, 300, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#d3a259";
        crc2.fill();
        crc2.closePath();
        //stripes
        crc2.beginPath();
        crc2.moveTo(5, 320);
        crc2.lineTo(95, 320);
        crc2.moveTo(0, 300);
        crc2.lineTo(100, 300);
        crc2.moveTo(5, 280);
        crc2.lineTo(95, 280);
        crc2.moveTo(22, 260);
        crc2.lineTo(80, 260);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        //entrance
        crc2.beginPath();
        crc2.arc(50, 320, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        //Ast
        crc2.beginPath();
        // crc2.moveTo(0, 300);
        crc2.fillStyle = "brown";
        crc2.fillRect(0, 235, 100, 20);

        crc2.closePath();

        crc2.save();
    }

}//end namespace
        