namespace MeinGedicht {
    
    //arrays mit strings
    let subjekte: string[] = ["Mario", "Luigi", "Peach", "Bowser", "Toad", "Daisy"];
    let prädikate: string[] = ["rettet", "liebt", "besiegt", "sieht", "benutzt", "entführt"];
    let objekte: string[] = ["das Power-Up", "die Prinzessin", "den Feind", "das Königreich", "die Brüder", "Gumba"];

    // console.log(subjekte, prädikate, objekte);

    //forschleife gibt strings aus
    for (let index: number = 6; index > 0; index--) {
        // console.log(index);
        getVerse(subjekte, prädikate, objekte);   
    }

    //funktion generiert gedicht
    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
        //nimmt neuen Vers auf
        let neuerVers: string = "";

        //SUBJEKTE
        //zufallszahl erzeugen und mit länge des subjekt arrays multiplizieren. Ergebnis einer Variablen zuweisen
        let ergebnis1: number = Math.floor(Math.random() * subjekte.length);
        neuerVers += _subjekte.splice(ergebnis1, 1) + " ";
   

        //PRÄDIKATE
        let ergebnis2: number = Math.floor(Math.random() * prädikate.length);
        neuerVers += _prädikate.splice(ergebnis2, 1) + " ";

        //OBJEKTE
        let ergebnis3: number = Math.floor(Math.random() * objekte.length);
        neuerVers += _objekte.splice(ergebnis3, 1) + " ";
       

        //FERTIGER VERS
        console.log(neuerVers);
        return neuerVers;  
        
    }

    // let moviename: string = getVerse([], [], []);
    // console.log(moviename);

}//ende namespace