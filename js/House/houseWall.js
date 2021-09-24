class houseWall {
    constructor() {
       
     }    
    //getSceneGraph() {
        //translationMatrix = Matrix.createTranslation(new Vector(0,0,1));        
    //}
    draw(pContext,pMatrix) {   
        pMatrix.setTransform(pContext);        
        pContext.beginPath();
        pContext.fillStyle = '#ffffff'//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.moveTo(+ 0, - 75);
        pContext.lineTo(+ 100, - 75);  
        pContext.lineTo(+ 100,+ 75);  
        pContext.lineTo(- 100,+ 75);  
        pContext.lineTo(- 100,- 75);
        pContext.lineTo(- 0,- 75);        
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath() 
    }
}