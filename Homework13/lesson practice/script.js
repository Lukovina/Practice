window.onload = function() {

    var blocks = this.document.querySelectorAll('.block');
    console.log(blocks)
    
    
    var i = 0;
    var step = 1;
    
   
    setInterval(function(){
            if(i == blocks.length) {
                i = 0;
            }
            
            blocks[i].classList.toggle('bottom');
            
            
            
            console.log('hello')
            i+=step;
           
        }, 300)
    }