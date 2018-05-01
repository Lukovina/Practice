function SuperArray(n,m,obj) {
   
    var massive = new Array(n)
    
    for(var i = 0; i < massive.length; i++){
        massive[i] = new Array(m);
    }

    for(i = 0; i < massive.length; i++){
        for(var j = 0; j < massive[i].length; j++){
            massive[i][j] = Math.floor(Math.random()*(obj.max-obj.min+1)+obj.min);
        }
    } 
    this.arr = massive

}

SuperArray.prototype.render = function(separator){
        separator = separator||'*'
    for(var i = 0; i < this.arr.length; i++){
        for(var j = 0; j < this.arr[i].length; j++){
            document.write(this.arr[i][j] + ' ');
        }
        document.write('<br />');
    }
    
    for(i = 0; i<this.arr[0].length;i++){
        document.write(separator + " ");
    }
    document.write('<br />');
}

var sArr = new SuperArray(15,20, {min: 0, max: 9})

SuperArray.prototype.clear = function(direction, k) {
    
    if(direction == 'row') {
        for(var i = 0; i < this.arr[k].length; i++){
                this.arr[k][i] = '0'
            }
    }

    if(direction == 'column') {
        for(var i = 0; i < this.arr.length; i++){
            for( var j = 0; j < this.arr[i].length; j++) {
                this.arr[i][k] = '0'
            }
        }
    }
        this.render()
}


SuperArray.prototype.setMarker = function(obj){
            this.buffer = this.arr[obj.x][obj.y]
            this.bufferX = obj.x
            this.bufferY = obj.y
            this.arr[obj.x][obj.y] = "&"
    
    this.render()
}

SuperArray.prototype.goTo = function(obj) {
            this.arr[this.bufferX][this.bufferY] = this.buffer
            this.bufferX = obj.x
            this.bufferY = obj.y
            this.buffer = this.arr[obj.x][obj.y]
            this.arr[obj.x][obj.y] = "&"
    this.render()
}


SuperArray.prototype.shift = function(direction) {
    if(direction == 'left') {
        this.arr[this.bufferX][this.bufferY]  = this.buffer
        this.bufferY = this.bufferY-1
        this.buffer = this.arr[this.bufferX][this.bufferY]
        this.arr[this.bufferX][this.bufferY] = '&'
        
    }    
    if(direction == 'right') {
        this.arr[this.bufferX][this.bufferY]  = this.buffer
        this.buffer = this.arr[this.bufferX][this.bufferY+1]
        this.arr[this.bufferX][this.bufferY+1] = '&'
        this.bufferY = this.bufferY+1
    }    
    if(direction == 'top') {
        this.arr[this.bufferX][this.bufferY]  = this.buffer
        this.buffer = this.arr[this.bufferX-1][this.bufferY]
        this.arr[this.bufferX-1][this.bufferY] = '&'
        this.bufferX = this.bufferX-1
    }    
    if(direction == 'bottom') {
        this.arr[this.bufferX][this.bufferY]  = this.buffer
        this.buffer = this.arr[this.bufferX+1][this.bufferY]
        this.arr[this.bufferX+1][this.bufferY] = '&'
        this.bufferX = this.bufferX+1
    }            
    this.render()
}