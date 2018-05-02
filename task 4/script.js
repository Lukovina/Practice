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
    for (var i = 0; i<this.arr[0].length; i++) {
        document.write ('* ')
    }    
    document.write ('</br>')

    for (i = 0; i<this.arr.length; i++) {
        for (var j = 0; j < this.arr[i].length; j++) {
            document.write (this.arr[i][j] + ' ')
        }
        document.write ('</br>')
    }
    for (var i = 0; i<this.arr[0].length; i++) {
        document.write ('* ')
    }    
    document.write ('</br>')
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
    this.XPosition = XPosition;
    this.YPosition = YPosition;
}

Person.prototype = Object.create(Field.prototype)

Person.prototype.start = function(){
    field.arr[this.XPosition][this.YPosition] = 1
    field.renderField()
}

Person.prototype.go = function (direction, step) {
    if(direction == 'left') {
        field.arr[this.XPosition][this.YPosition - step] = 1;
        field.arr[this.XPosition][this.YPosition] = 0;
        this.YPosition = this.YPosition - step;
    }

    if(direction == 'right') {
        field.arr[this.XPosition][this.YPosition + step] = 1;
        field.arr[this.XPosition][this.YPosition] = 0;
        this.YPosition = this.YPosition + step;
    }

    if(direction == 'top') {
        field.arr[this.XPosition-step][this.YPosition] = 1;
        field.arr[this.XPosition][this.YPosition] = 0;
        this.XPosition = this.XPosition - step;
    }

    if(direction == 'bottom') {
        field.arr[this.XPosition+step][this.YPosition] = 1;
        field.arr[this.XPosition][this.YPosition] = 0;
        this.XPosition = this.XPosition + step;
    }
}

Person.prototype.resetPosition = function() {
    field.arr[this.XPosition][this.YPosition] = 0;
    this.XPosition = 0;
    this.YPosition = 0;
    field.arr[this.XPosition][this.YPosition] = 1;
}

var person = new Person('Vasya', 5,4)