class Sun {
    constructor (pPosition,pRotation,pScale) {
      this.setPosition(pPosition);
      this.setRotation(pRotation);
      this.setScale(pScale);
      this.initialiseSceneGraph();
      this.startX = -420;
      this.startY = -200;
      this.rotationRate = 1;
      this.scale = 0.5;
       
      this.setTransNode(this.transNode);
      this.setRotationNode(this.mRotationNode);
    }

    getRotationNode() {
        return this.mRotationNode;
    }
    setRotationNode(pRotationNode) {
        this.mRotationNode = pRotationNode;
    }


    getTransNode() {
        return this.mTransNode;
    }
    setTransNode(pTransNode) {
        this.mTransNode = pTransNode;
    }
    getPosition() {
        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    getRotation() {
        return this.mRotation;
    }
    setRotation(pRotation) {
        this.mRotation = pRotation * Math.PI/180;
    }
    getRotationRate() {
        return this.rotationRate;
    }
    getScale() {
        return this.mScale;
    }
    setScale(pScale) {
        this.mScale = pScale;
    }
    getSceneGraph() {
        return this.mSunSceneGraph;
    }
    setSceneGraph(pSunSceneGraph) {
        this.mSunSceneGraph = pSunSceneGraph;
    }    
  
    initialiseSceneGraph() {
        var scaleMatrix,mScaleNode,mSunSceneGraph,mFirstTriangleTransNode,mSunTransNode;

        //this.transMatrix = Matrix.createTranslation(this.getPosition());
        this.transNode = new SceneGraphNode(this.transMatrix,"transNode"); 
        //
        //rotationMatrix = Matrix.createRotation(this.getRotation());
        this.mRotationNode = new SceneGraphNode(this.rotationMatrix, "rotationNode")
        //
        scaleMatrix = Matrix.createScale(new Vector(this.getScale(),this.getScale(),1));
        mScaleNode = new SceneGraphNode(scaleMatrix,"scaleNode");

        var identity = Matrix.createIdentity();
        mSunSceneGraph = new SceneGraphNode(identity,"sun");
        this.setSceneGraph(mSunSceneGraph);


        mSunSceneGraph.addChild(this.transNode);   
        this.transNode.addChild(this.mRotationNode);
        this.mRotationNode.addChild(mScaleNode);

        var transMatrix1 = Matrix.createTranslation(new Vector(0, 0, 1));
        mSunTransNode = new SceneGraphNode(transMatrix1,"sunTransNode");
        mScaleNode.addChild(mSunTransNode);
        mSunTransNode.addChild(new sunCircle);

        var triangle1Trans = Matrix.createTranslation(new Vector(60 , 0, 1));
        mFirstTriangleTransNode = new SceneGraphNode(triangle1Trans,"firstTriangleTransNode");
        var triangle1rotate = Matrix.createRotation(Math.PI/2);
        var mFirstTriangleRotateNode = new SceneGraphNode(triangle1rotate,"triangle1rotate");
        mFirstTriangleTransNode.addChild(mFirstTriangleRotateNode);   
        mScaleNode.addChild(mFirstTriangleTransNode);     
        mFirstTriangleRotateNode.addChild(new sunTriangle);
       
        var triangle2Trans = Matrix.createTranslation(new Vector(40, 45, 1));
        var mSecondTriangleTransNode = new SceneGraphNode(triangle2Trans,"secondTriangleTransNode");
        var triangle2rotate = Matrix.createRotation(Math.PI/2 + Math.PI/4);
        var mSecondTriangleRotateNode = new SceneGraphNode(triangle2rotate,"triangle2rotate");
        mSecondTriangleTransNode.addChild(mSecondTriangleRotateNode);   
        mScaleNode.addChild(mSecondTriangleTransNode);     
        mSecondTriangleRotateNode.addChild(new sunTriangle);
       
        var triangle3Trans = Matrix.createTranslation(new Vector(0, 60, 1));
        var mThirdTriangleTransNode = new SceneGraphNode(triangle3Trans,"thirdTriangleTransNode");
        var triangle3rotate = Matrix.createRotation(Math.PI);
        var mThirdTriangleRotateNode = new SceneGraphNode(triangle3rotate,"triangle3rotate");
        mThirdTriangleTransNode.addChild(mThirdTriangleRotateNode);   
        mScaleNode.addChild(mThirdTriangleTransNode);     
        mThirdTriangleRotateNode.addChild(new sunTriangle);

        var triangle4Trans = Matrix.createTranslation(new Vector(-40, 45, 1));
        var mFourthTriangleTransNode = new SceneGraphNode(triangle4Trans,"fourthTriangleTransNode");
        var triangle4rotate = Matrix.createRotation(Math.PI + Math.PI/4);
        var mFourthTriangleRotateNode = new SceneGraphNode(triangle4rotate,"triangle4rotate");
        mFourthTriangleTransNode.addChild(mFourthTriangleRotateNode);   
        mScaleNode.addChild(mFourthTriangleTransNode);     
        mFourthTriangleRotateNode.addChild(new sunTriangle);

        var triangle5Trans = Matrix.createTranslation(new Vector(-60, 0, 1));
        var mFifthTriangleTransNode = new SceneGraphNode(triangle5Trans,"fifthTriangleTransNode");
        var triangle5rotate = Matrix.createRotation(-Math.PI/2);
        var mFifthTriangleRotateNode = new SceneGraphNode(triangle5rotate,"triangle5rotate");
        mFifthTriangleTransNode.addChild(mFifthTriangleRotateNode);   
        mScaleNode.addChild(mFifthTriangleTransNode);     
        mFifthTriangleRotateNode.addChild(new sunTriangle);

        var triangle6Trans = Matrix.createTranslation(new Vector(-40, -45, 1));
        var mSixthTriangleTransNode = new SceneGraphNode(triangle6Trans,"sixthTriangleTransNode");
        var triangle6rotate = Matrix.createRotation(Math.PI + Math.PI/4 * 3);
        var mSixthTriangleRotateNode = new SceneGraphNode(triangle6rotate,"triangle6rotate");
        mSixthTriangleTransNode.addChild(mSixthTriangleRotateNode);   
        mScaleNode.addChild(mSixthTriangleTransNode);     
        mSixthTriangleRotateNode.addChild(new sunTriangle);

        var triangle7Trans = Matrix.createTranslation(new Vector(0, -60, 1));
        var mSeventhTriangleTransNode = new SceneGraphNode(triangle7Trans,"seventhTriangleTransNode");
        var triangle7rotate = Matrix.createRotation(2*Math.PI);
        var mSeventhTriangleRotateNode = new SceneGraphNode(triangle7rotate,"triangle7rotate");
        mSeventhTriangleTransNode.addChild(mSeventhTriangleRotateNode);   
        mScaleNode.addChild(mSeventhTriangleTransNode);     
        mSeventhTriangleRotateNode.addChild(new sunTriangle);

        var triangle8Trans = Matrix.createTranslation(new Vector(40, -45, 1));
        var mEigthTriangleTransNode = new SceneGraphNode(triangle8Trans,"eigthTriangleTransNode");
        var triangle8rotate = Matrix.createRotation(2*Math.PI + Math.PI/4);
        var mEigthTriangleRotateNode = new SceneGraphNode(triangle8rotate,"triangle8rotate");
        mEigthTriangleTransNode.addChild(mEigthTriangleRotateNode);   
        mScaleNode.addChild(mEigthTriangleTransNode);     
        mEigthTriangleRotateNode.addChild(new sunTriangle);        
    }

    update(pDeltaTime) {     
       var currentPosition = this.getPosition();
       currentPosition.setX(currentPosition.getX() + 5/pDeltaTime); 
       if(currentPosition.getX() >= 0) {
        currentPosition.setY(currentPosition.getY() + 1/pDeltaTime)
       }
       if(currentPosition.getX() <= 0) {
        currentPosition.setY(currentPosition.getY() - 1/pDeltaTime);
       }
       if(currentPosition.getX() >= 450){
           currentPosition.setX(-500);
       }
       var movement = currentPosition;
       var newPosition = Matrix.createTranslation(movement);
       this.transNode.setlocalMatrix(newPosition);

       this.mRotation = this.mRotation + this.rotationRate/pDeltaTime;
       var newRotation = Matrix.createRotation(this.mRotation)
       this.mRotationNode.setlocalMatrix(newRotation); 
    }
}

    
    