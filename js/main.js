// the window load event handler
function onload() {
    var mainCanvas, mainContext, rootNode, lastTime,house,firstRoad,plane,ball;
    //this function will initialise our variables 
    function initialiseCanvasContext() {
        //Find the canvas element using its id attribute.
        mainCanvas = document.getElementById('mainCanvas');
        // if it couldn't be found
        if (!mainCanvas) {
            //make a meassage box pop up with the error.
            alert('Error: I cannot find the canvas element!');
            return;
        }
        // Get the 2D canvas context.
        mainContext =mainCanvas.getContext('2d');
        if(!mainContext) {
            alert('Error: failed to get context!');
            return;
        }
        lastTime = Date.now();
                              
    }

    function initialiseDrawing() {

        rootNode = new SceneGraphNode(Matrix.createIdentity(),"root");  
        sunStartPosition = new Vector(-450,-200,1); 
        sun1 = new Sun(sunStartPosition,0,0.75);
        var planeStartPosition = new Vector(0,-200,1);
        plane = new Plane(planeStartPosition,0,0.01);       
         
       var house1Position = new Vector(-300,100,1)
       var house2Position = new Vector(-100,100,1)
       var house3Position = new Vector(100,100,1)
       var house4Position = new Vector(300,100,1)

       house = new House(house1Position,270,0.35,0.35);
       house2 = new House(house2Position,0,0.85,1);
       house3 = new House(house3Position,0,0.5,0.5);
       house4 = new House(house4Position,0,0.65,1);

       var RoadPosition = new Vector(-400,200,1);
       firstRoad = new Road(RoadPosition,0,1);

       var grassPosition = new Vector(-400,100,1)
       var housesGrass = new Grass(grassPosition,0,1);

       var ballStartingPosition = new Vector(100,0,1); 
       ball = new Ball(ballStartingPosition,0,0,0);

       rootNode.addChild(sun1.getSceneGraph());
       rootNode.addChild(plane.getSceneGraph());     
       rootNode.addChild(housesGrass.getSceneGraph());   
       rootNode.addChild(house.getSceneGraph());
       rootNode.addChild(house2.getSceneGraph());  
       rootNode.addChild(house3.getSceneGraph());  
       rootNode.addChild(house4.getSceneGraph());
       rootNode.addChild(firstRoad.getSceneGraph());    
       rootNode.addChild(ball.getSceneGraph()); 
    }    
    
   
    function draw() {
    var originMatrix = Matrix.createTranslation(new Vector(mainCanvas.width * 0.5, mainCanvas.height * 0.5));        
    //rootNode.draw(mainContext,originMatrix);   
    
    mainContext.fillStyle = '#4DB4D7';
    //fill the canvas with blue
    mainContext.fillRect(-mainCanvas.width/2,-mainCanvas.height/2,mainCanvas.width,mainCanvas.height);
    // choose a line width 
    mainContext.lineWidth = 5;
    // set the line join
    mainContext.lineJoin = 'round';
          
    rootNode.draw(mainContext,originMatrix);  
    drawAnimatedSprite();     
    }


    function update(pDeltaTime) {
      xPosition = xPosition + 60/pDeltaTime;   
      sun1.update(pDeltaTime);
      plane.update(pDeltaTime); 
      ball.update(pDeltaTime);     
    }
    
    var image = new Image();
    image.src = 'G:/500085 2DCGAS/lab/images/Car.png';
    var frameWidth = 600;
    var frameHeight = 600;
    var xPosition = - 400;
    
    function drawAnimatedSprite() {
      if(xPosition > 800) {
        xPosition = -800;
      }  
      mainContext.drawImage(image,xPosition,100,frameWidth/3,frameHeight/3);   
      }
   
    function animationLoop() {
      var thisTime = Date.now();
      var deltaTime = thisTime - lastTime;
      
      
      update(deltaTime)    
      draw()  

      lastTime = thisTime;     
      requestAnimationFrame(animationLoop);
    }
    
    initialiseCanvasContext();
   
    initialiseDrawing()  
   
    animationLoop();
}
window.addEventListener('load',onload,false);
