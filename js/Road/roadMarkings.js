class roadMarkings {
    constructor() {
     }    
    draw(pContext) {
        pContext.beginPath();
        pContext.fillStyle = '#FFBF00';
        pContext.strokeStyle = '#000000'; 
        pContext.rect(0,0,100,10);
        pContext.fill();     
        pContext.stroke();     
    }
}