function Calc(x){
    this.x = x;
}

Calc.prototype.render = function(x) {
    return this.x = x;
}

Calc.prototype.clear = function() {
    return this.x = 0;
}


function SqvCalc(){}

SqvCalc.prototype = Object.create(Calc.prototype)

SqvCalc.prototype.sum = function(x,y){
    var res = x + y;
    res*=res
    return this.res = res
}

SqvCalc.prototype.mul = function(x,y){
    var res = x * y;
    res*=res
    return this.res = res
}

SqvCalc.prototype.div = function(x,y){
    var res = x / y;
    res*=res
    return this.res = res
}

SqvCalc.prototype.min = function(x,y){
    var res = x - y;
    res*=res
    return this.res = res
}

SqvCalc.prototype.setValue = function() {
    return this.render(this.res)
}
////////////////////////////////////////////////////////////////

function ArrCalc(){
    this.arr = new Array;
}

ArrCalc.prototype = Object.create(SqvCalc.prototype)

ArrCalc.prototype.reinit = function() {
  
    for( var i = 0, n = 200; i < n ; i++) {
        this.arr[i] = Math.floor(Math.random()*(50+1));
    }
    return this.arr
}

arc = new ArrCalc()

function Calculator(){}

Calculator.prototype = Object.create(ArrCalc.prototype)

calculator = new Calculator()


