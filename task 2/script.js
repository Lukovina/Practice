function SuperMath(x,y,znak){
	this.x = x;
	this.y = y;
	this.znak = znak;
	this.check()
}

SuperMath.prototype.check = function(){
	
	if(confirm("Вы действительно хотите выполнить " + this.x + this.znak  +this.y + "?")){
		if(this.znak == "+") {
			console.log(this.x+this.y)
			return this.res = this.x+this.y
		}else if(this.znak == "-") {
			console.log(this.x-this.y)
			return this.res = this.x-this.y
		}else if(this.znak == "*") {
			console.log(this.x*this.y)
			return this.res = this.x*this.y
		}else if(this.znak == "/") {
			console.log(this.x/this.y)
			return this.res = this.x/this.y
		}else if(this.znak == "%") {
			console.log(this.x%this.y)
			return this.res = this.x%this.y
		}
	}else {
		return this.input()
	}			
}

SuperMath.prototype.input = function() {

	this.x = +prompt("Введите значение 1");
	this.y = +prompt("Введите значение 2");
	do {
        this.znak = prompt("Введите значение оператора");
    }while (
         this.znak !== '+' && this.znak!== '-' && this.znak !== '*' && this.znak !== '/' && this.znak !== '%'
        )

	if(this.znak == "+") {
			console.log(this.x+this.y)
			return this.res = this.x+this.y
		}else if(this.znak == "-") {
			console.log(this.x-this.y)
			return this.res = this.x-this.y
		}else if(this.znak == "*") {
			console.log(this.x*this.y)
			return this.res = this.x*this.y
		}else if(this.znak == "/") {
			console.log(this.x/this.y)
			return this.res = this.x/this.y
        }else if(this.znak == "%") {
			console.log(this.x&this.y)
            return this.res = this.x%this.y 
        }else {
		return this.res
	}
}

var test = new SuperMath(5,4,"+")
