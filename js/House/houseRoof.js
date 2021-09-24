class houseRoof {
    constructor() {
        
     }
     
    //getSceneGraph() {
        //translationMatrix = Matrix.createTranslation(new Vector(0,-114.5,1));
        //return translationMatrix;
    //}
    draw(pContext,pMatrix) { 
        pMatrix.setTransform(pContext);
        pContext.beginPath();
        pContext.fillStyle = '#ff0000';
        pContext.strokeStyle = '#000000';
        pContext.moveTo(- 100,+ 37.5);
        pContext.lineTo(+ 0,- 37.5);
        pContext.lineTo(+ 100,+ 37.5);
        pContext.lineTo(-100,+ 37.5);
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath()       
    }
}