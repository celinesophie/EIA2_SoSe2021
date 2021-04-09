namespace Boxes {
    let n: number = 5;
    let color: string;
    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < n; i++) {
        y += /*rechtes wird linken hinzugefügt*/ (i == 2) ? 20 : 50; /* prüft ob i = 2 ist, wenn ja +20, nein +50*/
        x = (x + 170) % 400; /*Modulus returns remainder*/
        switch (i) { /* expression: i*/
            case 0:
                color = "#ff0000";
                break; /*stops execution of switch block, springt nach unten zur for schleife*/
            case 1: /*springt zu case 4 und führt ihn aus (nächster der zutrifft)*/ 
            case 4:
                color = "#00ff00";
                break;
            case 3:
                continue; /* bricht schleife ab und geht wieder an anfang, 3 wird zu 4*/
            default: /*if no match (bei 2)*/
                color = "#0000ff";
        }
        
        for (let size of ["big", "medium", "small"]) {
            createBox(color, x, y, size);
            if (i == 4)
                break;
        }
    }

    //wenn break dann function aufgerufen
    function createBox(_color: string, _x: number, _y: number, _size: string): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size);
        div.style.backgroundColor = _color;
        div.style.left = _x + "px";
        div.style.top = _y + "px";
    }
}