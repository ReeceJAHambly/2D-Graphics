class sunTriangle {
    constructor () {
      
    }

draw(pContext,pMatrix) {      
    pMatrix.setTransform(pContext); 
    pContext.beginPath();
    pContext.fillStyle = '#ffff00';
    pContext.strokeStyle = '#000000';
    pContext.moveTo(-20,0);
    pContext.lineTo(0,-50);
    pContext.lineTo(+20,0);
    pContext.lineTo(-20,0);
    pContext.fill();
    pContext.stroke();
    pContext.closePath();
    }
}