//draws the grass
class grassBody {
    constructor() {
     }    
    draw(pContext) {
        pContext.beginPath();
        pContext.fillStyle = '#008f11';
        pContext.strokeStyle = '#000000'; 
        pContext.rect(0,0,800,100);
        pContext.fill();     
        pContext.stroke();     
    }
}