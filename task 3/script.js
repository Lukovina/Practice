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

var sArr = new SuperArray(20,50, {min: 0, max: 9})

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
            this.arr[obj.x][obj.y] = "&"
    
    this.render()
}
