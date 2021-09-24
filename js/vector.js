
class Vector { 
    constructor(pX,pY,pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY() {
        return this.mY;
    }
    setY(pY) {
        this.mY = pY;
    }
    getZ() {
        return this.mZ;
    }
    setZ(pZ) {
        this.mZ = pZ;
    }
    add(pVector) {
        return new Vector(this.getX()+pVector.getX(),this.getY()+pVector.getY(),this.getZ()+pVector.getZ());
    }
    subtract(pVector) {
        return new Vector(this.getX()-pVector.getX(),this.getY()-pVector.getY(),this.getZ()-pVector.getZ());
    }
    multiply(pScalar) {
        return new Vector(this.getX()*pScalar,this.getY()*pScalar,this.getZ()*pScalar)
    }
    divide(pScalar) {
        return new Vector(this.getX()/pScalar,this.getY()/pScalar,this.getZ()/pScalar)
    }
    magnitude() {
        var xSquared = this.getX()*this.getX();
        var ySquared = this.getY()*this.getY();
        var zSquared = this.getZ()*this.getZ();
        var total = xSquared + ySquared + zSquared
        var Mag = Math.sqrt(total);
        return Mag;
    }
    normalise() {
        var xSquared = this.getX()*this.getX();
        var ySquared = this.getY()*this.getY();
        var zSquared = this.getZ()*this.getZ();
        var total = xSquared + ySquared + zSquared
        var Mag = Math.sqrt(total);
        return new Vector(this.getX()/Mag,this.getY()/Mag,this.getZ()/Mag);
    }
    limitTo(pScalar) {
        var thisVector = new Vector(this.getX(),this.getY(),this.getZ()); 
        return thisVector.normalise().multiply(Math.min(this.magnitude(),pScalar));
    }
    dotProduct(pVector) {
        var dotProd = (this.getX()*pVector.getX()) + (this.getY()*pVector.getY()) + (this.getZ()*pVector.getZ())  
        return dotProd;
    }
    interpolate(pVector,pScalar) {
     return (this.subtract(pVector).multiply(pScalar).add(pVector)); 
    }
    rotate(pScalar) {
        var X = this.getX()*Math.cos(pScalar) - this.getY()*Math.sin(pScalar);
        var Y = this.getX()*Math.sin(pScalar) + this.getY()*Math.cos(pScalar);
        var Z = this.getZ();
        return new Vector(X,Y,Z);
    }
    angleBetween(pVector) {
        var Vec1 = this.magnitude()
        var Vec2 = pVector.magnitude();
        var dot = this.dotProduct(this) * this.dotProduct(pVector);
        return Math.acos(dot/(Vec1+Vec2) * Math.PI/180);
    }

}
