function Field(width, height) {
    this.width = width;
    this.height = height;
    var arr = new Array(this.height)
        for (var i = 0; i < this.height; i++) {
            arr[i] = new Array(this.width);
        }
        for (i = 0; i<arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0
            }
        }
    this.arr = arr;
}
var field = new Field(10,10)

Field.prototype.renderField = function () {
   
    document.write ('<hr />')
     
    for (i = 0; i<this.arr.length; i++) {
        for (var j = 0; j < this.arr[i].length; j++) {
            document.write (this.arr[i][j] + ' ')
        }
        document.write ('</br>')
    }
    
    document.write ('<hr />')
}

Field.prototype.clearField = function () {
    for (var i = 0; i<this.arr.length; i++) {
        for(var j = 0; j<this.arr[i].length; j++) {
            this.arr[i][j] = 0
        }
    }
    this.renderField()
}


Field.prototype.changeSize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
    var arr = new Array(this.height)
        for (var i = 0; i < this.height; i++) {
            arr[i] = new Array(this.width);
        }
        for (i = 0; i<arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0
            }
        }
    this.arr = arr;
    this.renderField()
}


function Person(name, XPosition, YPosition) {
    this.name  = name;
    this.XPosition = XPosition||0;
    this.YPosition = YPosition||0;
}

Person.prototype = Object.create(Field.prototype)

Person.prototype.start = function(){
    field.arr[this.XPosition][this.YPosition] = 1;
    field.renderField()
}

Person.prototype.go = function (direction, step) {
    if(direction == 'left') {
        if(this.YPosition - step <= 0) {
            field.arr[this.XPosition][this.YPosition] = 0;
            this.YPosition = field.width - (step -this.YPosition);
            if (
            this.YPosition == field.width){
            this.YPosition = field.width-1
            }
            field.arr[this.XPosition][this.YPosition] = 1;
        }else {
            field.arr[this.XPosition][this.YPosition - step] = 1;
            field.arr[this.XPosition][this.YPosition] = 0;
            this.YPosition = this.YPosition - step;
        }
      
    }

    if(direction == 'right') {
       if(this.YPosition + step >= field.width) {
            field.arr[this.XPosition][this.YPosition] = 0;
            this.YPosition = step - (field.width - this.YPosition)
            field.arr[this.XPosition][this.YPosition] = 1;
        }else{
            field.arr[this.XPosition][this.YPosition + step] = 1;
            field.arr[this.XPosition][this.YPosition] = 0;
            this.YPosition = this.YPosition + step;
        }
       

    }

    if(direction == 'top') {
        if(this.XPosition - step <= 0) {
            field.arr[this.XPosition][this.YPosition] = 0;
            this.XPosition = field.height - (step -this.XPosition);
            field.arr[this.XPosition][this.YPosition] = 1;
        }else {    
            field.arr[this.XPosition-step][this.YPosition] = 1;
            field.arr[this.XPosition][this.YPosition] = 0;
            this.XPosition = this.XPosition - step;
        }

    }

    if(direction == 'bottom') {
        if(this.XPosition + step >= field.width) {
            field.arr[this.XPosition][this.YPosition] = 0;
             this.XPosition = step - (field.width - this.XPosition)
             field.arr[this.XPosition][this.YPosition] = 1;
            } else {
            field.arr[this.XPosition+step][this.YPosition] = 1;
            field.arr[this.XPosition][this.YPosition] = 0;
            this.XPosition = this.XPosition + step;
                }   
            }
        
    field.renderField()
}

Person.prototype.resetPosition = function() {
    field.arr[this.XPosition][this.YPosition] = 0;
    this.XPosition = 0;
    this.YPosition = 0;
    field.arr[this.XPosition][this.YPosition] = 1;
    field.renderField()
}

var person = new Person('Vasya')

var person1 = new Person('Katya')