class Road {
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
        var mRoadSceneGraph = new SceneGraphNode(identity,"road");
        this.setSceneGraph(mRoadSceneGraph);


        mRoadSceneGraph.addChild(transNode);
        transNode.addChild(mRotationNode);
        mRotationNode.addChild(mScaleNode);

        mScaleNode.addChild(new roadBody);

        var firstMarkingPosition = Matrix.createTranslation(new Vector(50,40,1));
        var firstMarkingNode = new SceneGraphNode(firstMarkingPosition,"firstMark");
        mScaleNode.addChild(firstMarkingNode);
        firstMarkingNode.addChild(new roadMarkings);

        var secondMarkingPosition = Matrix.createTranslation(new Vector(250,40,1));
        var secondMarkingNode = new SceneGraphNode(secondMarkingPosition,"secondMark");
        mScaleNode.addChild(secondMarkingNode);
        secondMarkingNode.addChild(new roadMarkings);

        var thirdMarkingPosition = Matrix.createTranslation(new Vector(450,40,1));
        var thirdMarkingNode = new SceneGraphNode(thirdMarkingPosition,"thirdMark");
        mScaleNode.addChild(thirdMarkingNode);
        thirdMarkingNode.addChild(new roadMarkings);

        var fourthMarkingPosition = Matrix.createTranslation(new Vector(650,40,1));
        var fourthMarkingNode = new SceneGraphNode(fourthMarkingPosition,"fourthMark");
        mScaleNode.addChild(fourthMarkingNode);
        fourthMarkingNode.addChild(new roadMarkings);
    }


}