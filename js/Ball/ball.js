// Ball drawing for simulation 
class Ball {
    constructor(pPosition,velocity,accelerlation,mass) {
    this.setPosition(pPosition);
    this.mVelocity = velocity;
    this.mAcceleration = accelerlation;
    this.mMass = mass;
    this.g = 9.81;
    this.initialiseSceneGraph();
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
    
    setPosition(pPosition)
    {
        this.mPosition = pPosition;
    }

    update(pDeltaTime) {
        var currentSpeed = this.mPosition.getY() + this.g / pDeltaTime;
        var newPosition = Matrix.createTranslation(new Vector(0,currentSpeed,1));
        this.transNode.setlocalMatrix(newPosition);
    }

    getSceneGraph() {
        return this.mBallSceneGraph;
    }
    setSceneGraph(pBallSceneGraph) {
        this.mBallSceneGraph = pBallSceneGraph;
    }    
    initialiseSceneGraph() {
        var scaleMatrix,mScaleNode,mBallSceneGraph;

        this.transMatrix = Matrix.createTranslation(this.getPosition());
        this.transNode = new SceneGraphNode(this.transMatrix,"transNode"); 
        //
        var identity = Matrix.createIdentity();
        mBallSceneGraph = new SceneGraphNode(identity,"ball");
        this.setSceneGraph(mBallSceneGraph);

        mBallSceneGraph.addChild(this.transNode);   
        this.transNode.addChild(new ballDrawing);
    }
}