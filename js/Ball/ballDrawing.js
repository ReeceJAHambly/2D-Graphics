//draws the ball
class ballDrawing {
    constructor() {

    }
    draw(pContext,pMatrix) {
        pMatrix.setTransform(pContext);       
        pContext.beginPath();
        pContext.fillStyle = '#00ff00';
        pContext.strokeStyle = '#000000';
        pContext.arc(0,0,20,0,360); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();
    }
}