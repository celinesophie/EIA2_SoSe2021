namespace EventInspector {

    window.addEventListener("load", handleLoad);
          
    //install mouse move listener on document
    function handleLoad(_event: Event): void {
            console.log(_event);

            //install mousemove listener on document:
            document.addEventListener("mousemove", setInfoBox);
            //install click and keyup listeners on document, body and all divs:
            document.addEventListener("keyup", logInfo);
            document.addEventListener("click", logInfo); 

            //create span and add to dom
            let mousePositionSpan: HTMLElement = document.createElement("span");
            document.body.appendChild(mousePositionSpan);
        }

 
    //moves mouse
    function setInfoBox(_event: MouseEvent): void {
            console.log("mousemove");
            
            //display mouse position and event's target in span-element
            let mousePositionSpan: HTMLElement = <HTMLElement>document.querySelector("span");

            let x: number = _event.pageX; 
            let y: number = _event.pageY;

            //set position of span with position of mouse, offset
            mousePositionSpan.style.left = x + 10 + "px"; 
            mousePositionSpan.style.top = y + 10 + "px"; 
            
        }

    //log info to browser console
    function logInfo(_event: Event): void {
            //log event's type, target, current Target and whole event object to console
            console.log(_event);
            console.log(_event.target);
            console.log(_event.currentTarget);            
        }


} //end namespace