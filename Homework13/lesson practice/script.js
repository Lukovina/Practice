window.onload = function() {

    var blocks = this.document.querySelectorAll('.block');
    console.log(blocks)
    
    
    

      //VERSION 2 
      
      var i = 0;
      var step = 0;

    setInterval(function(){
        
        if(i == blocks.length - 1) {
            step --;
        }else if(i == 0) {
            step ++;
        }
        
        blocks[i].classList.toggle('bottom');
       
        i+=step;
       
    }, 300)
}
    
    

    // VERSION 1 
    // var i = 0;
    // var step = 1;
    // setInterval(function(){
    //         if(i == blocks.length) {
    //             i = 0;
            
    //         }
            
    //         blocks[i].classList.toggle('bottom');

    //         i+=step;
           
    //     }, 300)
    //  }