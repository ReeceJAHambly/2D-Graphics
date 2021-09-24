//for the green grass in the canvas
class Grass {
    constructor (pPosition,pRotation,pScale) {
      this.setPosition(pPosition);
      this.setRotation(pRotation);
      this.setScale(pScale);
      this.initialiseSceneGraph();
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
        return this.mRoadSceneGraph;
    }
    setSceneGraph(pRoadSceneGraph) {
        this.mRoadSceneGraph = pRoadSceneGraph;
    }

    initialiseSceneGraph() {
    var transMatrix,rotationMatrix, scaleMatrix,transNode,mRotationNode,mScaleNode;
        
    transMatrix = Matrix.createTranslation(this.getPosition());
    transNode = new SceneGraphNode(transMatrix,"transNode");        
    //
    var newRotation = this.getRotation();
    rotationMatrix = Matrix.createRotation(newRotation);
    mRotationNode = new SceneGraphNode(rotationMatrix, "rotationNode")
    //
    scaleMatrix = Matrix.createScale(new Vector(this.getScale(),this.getScale(),1));
    mScaleNode = new SceneGraphNode(scaleMatrix,"scaleNode");

    var identity = Matrix.createIdentity();
    var mGrassSceneGraph = new SceneGraphNode(identity,"grass");
    this.setSceneGraph(mGrassSceneGraph);


    mGrassSceneGraph.addChild(transNode);
    transNode.addChild(mRotationNode);
    mRotationNode.addChild(mScaleNode);
    mScaleNode.addChild(new grassBody);
    }
}