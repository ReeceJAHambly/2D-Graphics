class SceneGraphNode {
    constructor (pMatrix,pName) {
        this.setlocalMatrix(pMatrix);
        this.mChildren =[];
        this.setName(pName);
    }
    getlocalMatrix() {
        return this.mMatrix;
    }
    setlocalMatrix(pMatrix) {
        this.mMatrix = pMatrix;
    }
    getName() {
        return this.mName;
    }
    setName(pName) {
        this.mName =  pName;
    }
    getArray() {
        return this.mChildren;
    }
    getNumberOfChildren() {
        return this.mChildren.length;
    }
    getChildAt(index) {
        return this.mChildren[index];
    }
    addChild(pParameter) {
        this.mChildren.push(pParameter);
    }
    clear() {
        this.mChildren = [];
    }
    draw(pContext,pWorldTransformMatrix) {
    var newMatrix = pWorldTransformMatrix.multiply(this.getlocalMatrix());
    newMatrix.setTransform(pContext);
    for(var i = 0; i < this.getNumberOfChildren(); i++)
        {       
            var child = this.getChildAt(i);          
            child.draw(pContext, newMatrix);      
        }
        pWorldTransformMatrix.setTransform(pContext);
    }
}