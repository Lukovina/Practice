window.onload = function() {

    var blocks = this.document.querySelectorAll('.block');
    console.log(blocks)
    
    
    var i = 0;
    var step = 1;

       
    setInterval(function(){
        
        if(i == blocks.length - 1) {
            step = -1
        }else if(i == 0) {
            step = 1
        }
        
        blocks[i].classList.toggle('bottom');
       
        i+=step;
       
    }, 300)
    // VERSION 1 
    // setInterval(function(){
    //         if(i == blocks.length) {
    //             i = 0;
    //         }
            
    //         blocks[i].classList.toggle('bottom');
            

    //         i+=step;
           
    //     }, 300)
    }