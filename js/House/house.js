//class for the house drawing
class House {
    constructor (pPosition,pRotation,pScaleX,pScaleY) {
        this.setPosition(pPosition);
        this.setRotation(pRotation);  
        this.setScaleX(pScaleX);  
        this.setScaleY(pScaleY);
        this.initialiseSceneGraph();
    }
    //gets the position of the house
    getPosition() {
        return this.mPosition;
    }
    //sets position of house 
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    //gets the rotation of the house
    getRotation() {
        return this.mRotation;
    }
    //sets the rotation of the house
    setRotation(pRotation) {
        this.mRotation = pRotation * Math.PI/180;
    }
    //gets the scale of the house in the X direction
    getScaleX() {
        return this.mScaleX;
    }
    //sets the scale of the house in the X direction
    setScaleX(pScaleX) {
        this.mScaleX = pScaleX;
    }
    //gets the scale of the house in the Y direction
    getScaleY() {
        return this.mScaleY;
    }
    //sets the scale of the house in the Y direction
    setScaleY(pScaleY) {
        this.mScaleY = pScaleY;
    }
    //gets the scenegraph for the house
    getSceneGraph() {
        return this.mHouseSceneGraph;
    }
    //sets the scenegraph for the house
    setSceneGraph(pHouseSceneGraph) {
        this.mHouseSceneGraph = pHouseSceneGraph;
    }
    //iniitialises the scenegraph for the house 
    initialiseSceneGraph() {
        var transMatrix, rotationMatrix, scaleMatrix, mHouseSceneGraph,transNode,mRotationNode,mScaleNode,mWallTransNode,mRoofTransNode,mDoorTransNode,mLeftWinTransNode,mRightWinTransNode;     
        //
        var position = this.getPosition();
        transMatrix = Matrix.createTranslation(position);
        transNode = new SceneGraphNode(transMatrix,"transNode");        
        //
        rotationMatrix = Matrix.createRotation(this.getRotation());
        mRotationNode = new SceneGraphNode(rotationMatrix, "rotationNode")
        //
        scaleMatrix = Matrix.createScale(new Vector(this.getScaleX(),this.getScaleY()));
        mScaleNode = new SceneGraphNode(scaleMatrix,"scaleNode");

        var identity = Matrix.createIdentity();
        mHouseSceneGraph = new SceneGraphNode(identity,"house");
        this.setSceneGraph(mHouseSceneGraph);
        
        mHouseSceneGraph.addChild(transNode);
        transNode.addChild(mRotationNode);
        mRotationNode.addChild(mScaleNode);

        var transMatrix1 = Matrix.createTranslation(new Vector(0, 0, 1));
        mWallTransNode = new SceneGraphNode(transMatrix1,"wallTransNode");
        mScaleNode.addChild(mWallTransNode);
        mWallTransNode.addChild(new houseWall);

         var transMatrix2 = Matrix.createTranslation(new Vector(0, -114.5, 1));
        mRoofTransNode = new SceneGraphNode(transMatrix2,"roofTransNode");
        mScaleNode.addChild(mRoofTransNode);
        mRoofTransNode.addChild(new houseRoof);

        var transMatrix3 = Matrix.createTranslation(new Vector(0, 34.5, 1));
        mDoorTransNode = new SceneGraphNode(transMatrix3 ,"doorTransNode");
        mScaleNode.addChild(mDoorTransNode);
        mDoorTransNode.addChild(new houseDoor);

        var transMatrix4 = Matrix.createTranslation(new Vector(-50, -10, 1));
        mLeftWinTransNode = new SceneGraphNode(transMatrix4 ,"leftWinTransNode");
        mScaleNode.addChild(mLeftWinTransNode);
        mLeftWinTransNode.addChild(new houseLeftWindow);
        
        var transMatrix5 = Matrix.createTranslation(new Vector(50,-10, 1));
        mRightWinTransNode = new SceneGraphNode(transMatrix5 ,"RightWinTransNode");
        mScaleNode.addChild(mRightWinTransNode);
        mRightWinTransNode.addChild(new houseRightWindow);
    }

    update(deltaTime) {
    }
}