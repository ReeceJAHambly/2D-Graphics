class Plane {
    constructor (pPosition,pRotation,pScale) {
      this.setPosition(pPosition);
      this.setRotation(pRotation);
      this.setScale(pScale);
      this.initialiseSceneGraph();
       
      this.setScaleNode(this.mScaleNode);
      this.setRotationNode(this.mRotationNode);
    }

    getRotationNode() {
        return this.mRotationNode;
    }
    setRotationNode(pRotationNode) {
        this.mRotationNode = pRotationNode;
    }
    getScaleNode() {
        return this.mScaleNode;
    }
    setScaleNode(pScaleNode) {
        this.mScaleNode = pScaleNode;
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
        return this.mPlaneSceneGraph;
    }
    setSceneGraph(pPlaneSceneGraph) {
        this.mPlaneSceneGraph = pPlaneSceneGraph;
    }    
  
    initialiseSceneGraph() {
        var transNode,mRotationNode,scaleMatrix,mScaleNode,mPlaneSceneGraph;

        var transMatrix = Matrix.createTranslation(this.getPosition());
        transNode = new SceneGraphNode(transMatrix,"transNode"); 
        //
        var rotationMatrix = Matrix.createRotation(this.getRotation());
        mRotationNode = new SceneGraphNode(rotationMatrix, "rotationNode")
        //
        //scaleMatrix = Matrix.createScale(new Vector(this.getScale(),this.getScale(),1));
        this.mScaleNode = new SceneGraphNode(this.scaleMatrix,"scaleNode");

        var identity = Matrix.createIdentity();
        mPlaneSceneGraph = new SceneGraphNode(identity,"plane");
        this.setSceneGraph(mPlaneSceneGraph);


        mPlaneSceneGraph.addChild(transNode);   
        transNode.addChild(mRotationNode);
        mRotationNode.addChild(this.mScaleNode);
        this.mScaleNode.addChild(new planeBody);
    }

    update(pDeltaTime) {     
       var currentScale = this.getScale();
       if(currentScale >= 2)
       {
           currentScale = 0;
       }
       this.setScale(currentScale + 0.05/pDeltaTime);
       var newScale = Matrix.createScale(new Vector(this.getScale(),this.getScale(),1));
       this.mScaleNode.setlocalMatrix(newScale);
    }
}