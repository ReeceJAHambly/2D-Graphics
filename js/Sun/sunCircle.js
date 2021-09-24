class sunCircle {
    constructor () {
      
    }
draw(pContext,pMatrix) {
    pMatrix.setTransform(pContext);
    pContext.beginPath();
    pContext.fillStyle = '#ffff00';
    pContext.strokeStyle = '#000000';
    pContext.arc(0,0,55,0, 2 * Math.PI)       
    pContext.fill();
    pContext.stroke();
    pContext.closePath();  
    }
}