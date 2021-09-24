class houseRightWindow {
    constructor() {
     }    
    draw(pContext) {
        pContext.beginPath();
        pContext.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';   
        pContext.moveTo(+ 25, -25);
        pContext.lineTo(+ 25,+ 25);
        pContext.lineTo( - 25, + 25);
        pContext.lineTo(- 25,- 25);
        pContext.closePath() 
        pContext.moveTo( + 0,- 25);
        pContext.lineTo(+ 0,+ 25);
        pContext.moveTo(- 25,+ 0);
        pContext.lineTo(+ 25,+ 0);    
        pContext.fill();     
        pContext.stroke();     
      }
    }