class houseDoor  {
    constructor() {
     }
    draw(pContext,pMatrix) {  
        pMatrix.setTransform(pContext);   
        pContext.beginPath();
        pContext.fillStyle = '#0000ff';
        pContext.strokeStyle = '#000000';
        pContext.moveTo(- 15,+ 37.5);
        pContext.lineTo(- 15,- 37.5);
        pContext.lineTo(+ 15,- 37.5);
        pContext.lineTo(+ 15,+ 37.5);
        pContext.lineTo(- 15,+ 37.5);
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath()
    }
}