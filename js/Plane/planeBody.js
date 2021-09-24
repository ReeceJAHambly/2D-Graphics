class planeBody {
    constructor() {     
     }    
    draw(pContext,pMatrix) {   
        pMatrix.setTransform(pContext);  
        
        pContext.beginPath();
        pContext.fillStyle = '#000000';//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.rect(-5,0,10,-75); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();

        pContext.beginPath();
        pContext.fillStyle = '#000000'//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.arc(100,20,20,0,360); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();

        pContext.beginPath();
        pContext.fillStyle = '#000000'//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.arc(-100,20,20,0,360); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();

        pContext.beginPath();
        pContext.fillStyle = '#ffffff';//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.rect(0,0,150,-10); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();

        pContext.beginPath();
        pContext.fillStyle = '#ffffff';//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.rect(0,0,-150,-10); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();

        pContext.beginPath();
        pContext.fillStyle = '#ffffff';//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.rect(0,-25,-80,-10); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();

        pContext.beginPath();
        pContext.fillStyle = '#ffffff';//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.rect(0,-25,80,-10); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();


        pContext.beginPath();
        pContext.fillStyle = '#ffffff'//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.arc(0,0,50,0,360); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();

        pContext.beginPath();
        pContext.fillStyle = '#000000';//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.rect(-40,-25,80,20); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();
      
        pContext.beginPath();
        pContext.fillStyle = '#ff0000'//'hsl(' + 20 * Math.random() + ', 50%, 50%)';
        pContext.strokeStyle = '#000000';
        pContext.arc(0,20,15,0,360); 
        pContext.fill();
        pContext.stroke(); 
        pContext.closePath();
       
    }
}