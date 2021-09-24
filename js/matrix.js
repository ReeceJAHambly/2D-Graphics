class Matrix {
    constructor(pX1,pX2,pX3,pY1,pY2,pY3,pZ1,pZ2,pZ3) {
    this.setX1(pX1);
    this.setY1(pY1);
    this.setZ1(pZ1);
    this.setX2(pX2);
    this.setY2(pY2);
    this.setZ2(pZ2);
    this.setX3(pX3);
    this.setY3(pY3);
    this.setZ3(pZ3);
    }

    getX1() {
        return this.mX1;
    }
    setX1(pX1) {
        this.mX1 = pX1;
    }
    getX2() {
        return this.mX2;
    }
    setX2(pX2) {
        this.mX2 = pX2;
    }
    getX3() {
        return this.mX3;
    }
    setX3(pX3) {
        this.mX3 = pX3;
    }
    getY1() {
        return this.mY1;
    }
    setY1(pY1) {
        this.mY1 = pY1;
    }
    getY2() {
        return this.mY2;
    }
    setY2(pY2) {
        this.mY2 = pY2;
    }
    getY3() {
        return this.mY3;
    }
    setY3(pY3) {
        this.mY3 = pY3;
    }
    getZ1() {
        return this.mZ1;
    }
    setZ1(pZ1) {
        this.mZ1 = pZ1;
    }
    getZ2() {
        return this.mZ2;
    }
    setZ2(pZ2) {
        this.mZ2 = pZ2;
    }
    getZ3() {
        return this.mZ3;
    }
    setZ3(pZ3) {
        this.mZ3 = pZ3;
    }

    getElement(pRow,pColumn) {
        var row = pRow;
        var column = pColumn;
        if(row == 0 && column == 0)
        {
            return this.getX1();
        }
        if(row == 0 && column == 1)
        {
            return this.getX2();
        }
        if(row == 0 && column == 2)
        {
            return this.getX3();
        }
        if(row == 1 && column == 0)
        {
            return this.getY1();
        }
        if(row == 1 && column == 1)
        {
            return this.getY2();
        }
        if(row == 1 && column == 2)
        {
            return this.getY3();
        }
        if(row == 2 && column == 0)
        {
            return this.getZ1();
        }
        if(row == 2 && column == 1)
        {
            return this.getZ2();
        }
        if(row == 2 && column == 2)
        {
            return this.getZ3();
        }
    }
    static createIdentity() {
        return new Matrix(1,0,0,0,1,0,0,0,1)
    }
    static createTranslation(pVector) {
        var thisVector = pVector;
        return new Matrix(1,0,thisVector.getX(),0,1,thisVector.getY(),0,0,1)
    }
    static createScale(pVector) {
        var thisVector = pVector;
        return new Matrix(thisVector.getX(),0,0,0,thisVector.getY(),0,0,0,1)
    }
    static createRotation(pScalar) {
        var angleRad = pScalar;
        return new Matrix(Math.cos(angleRad),-Math.sin(angleRad),0,Math.sin(angleRad),Math.cos(angleRad),0,0,0,1);
    }
    multiply(pMatrix) {
        var mMatrix = pMatrix;
        var AnswerX1 = this.getX1() * mMatrix.getX1() + this.getX2() * mMatrix.getY1() + this.getX3() * mMatrix.getZ1();
        var AnswerX2 = this.getX1() * mMatrix.getX2() + this.getX2() * mMatrix.getY2() + this.getX3() * mMatrix.getZ2();
        var AnswerX3 = this.getX1() * mMatrix.getX3() + this.getX2() * mMatrix.getY3() + this.getX3() * mMatrix.getZ3();

        var AnswerY1 = this.getY1() * mMatrix.getX1() + this.getY2() * mMatrix.getY1() + this.getY3() * mMatrix.getZ1();
        var AnswerY2 = this.getY1() * mMatrix.getX2() + this.getY2() * mMatrix.getY2() + this.getY3() * mMatrix.getZ2();
        var AnswerY3 = this.getY1() * mMatrix.getX3() + this.getY2() * mMatrix.getY3() + this.getY3() * mMatrix.getZ3();

        var AnswerZ1 = this.getZ1() * mMatrix.getX1() + this.getZ2() * mMatrix.getY1() + this.getZ3() * mMatrix.getZ1();
        var AnswerZ2 = this.getZ1() * mMatrix.getX2() + this.getZ2() * mMatrix.getY2() + this.getZ3() * mMatrix.getZ2();
        var AnswerZ3 = this.getZ1() * mMatrix.getX3() + this.getZ2() * mMatrix.getY3() + this.getZ3() * mMatrix.getZ3();
        
        return new Matrix(AnswerX1,AnswerX2,AnswerX3,AnswerY1,AnswerY2,AnswerY3,AnswerZ1,AnswerZ2,AnswerZ3);
    }
    multiplyVector(pVector) {
        var thisVector = pVector;
        var x = this.getX1() * thisVector.getX() + this.getX2() * thisVector.getY() + this.getX3() * thisVector.getZ();
        var y = this.getY1() * thisVector.getX() + this.getY2() * thisVector.getY() + this.getY3() * thisVector.getZ();
        var z = this.getZ1() * thisVector.getX() + this.getZ2() * thisVector.getY() + this.getZ3() * thisVector.getZ();
        return new Vector(x,y,z);
    }
    alert() {
        window.alert(this.getX1(),this.getX2(),this.getX3(),this.getY1(),this.getY2(),this.getY3(),this.getZ1(),this.getZ2(),this.getZ3());
    }
    setTransform(pContext) {
        var mContext = pContext;       
        mContext.setTransform(this.getX1(),this.getY1(),this.getX2(),this.getY2(),this.getX3(),this.getY3());
        return mContext;
    }
    transform(pContext) {
        var mContext = pContext;
        mContext.transform(this.getX1(),this.getY1(),this.getX2(),this.getY2(),this.getX3(),this.getY3());
        return mContext;
    }
}