//Calc
function Calc(x){
    this.x = x;
}

Calc.prototype.render = function() {
    return this.x;
}

Calc.prototype.clear = function() {
    return this.x = 0;
}


function SqvCalc(){}

SqvCalc.prototype = Object.create(Calc.prototype)

SqvCalc.prototype.sum = function(x,y){
    var res = x + y;
    res*=res
    return this.setValue(res)
}

SqvCalc.prototype.mul = function(x,y){
    var res = x * y;
    res*=res
    return this.setValue(res)
}

SqvCalc.prototype.div = function(x,y){
    var res = x / y;
    res*=res
    return this.setValue(res)
}

SqvCalc.prototype.min = function(x,y){
    var res = x - y;
    res*=res
    return this.setValue(res)
}

SqvCalc.prototype.setValue = function(x) {
    this.x = x
    return this.x
}

function ArrCalc(){
}

ArrCalc.prototype = Object.create(SqvCalc.prototype)

ArrCalc.prototype.reinit = function() {
    arr = []
    for( var i = 0, n = 200; i < n ; i++) {
        arr[i] = Math.floor(Math.random()*(50+1));
    }
    return this.arr = arr 
}

var arc = new ArrCalc()

function Calculator(){}

Calculator.prototype = Object.create(ArrCalc.prototype)

calculator = new Calculator()


