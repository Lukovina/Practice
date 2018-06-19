window.onload = function(){

    var block = document.querySelector('.block');
    var start_button = document.querySelector('.start_button');
    var stop_button = document.querySelector('.stop_button');
    var step = 5;
    var dirrection = 1;

    console.log(stop_button)

    var timer = setTimer();
    
    function setTimer(){
        setInterval(startAnimation, 20);
    }

    // var stopTimer = function(){
    //      clearInterval(timer)
    // }
    start_button.addEventListener('click', timer );
    stop_button.addEventListener('click', function(){
        clearInterval(timer)});


    function startAnimation(){
        if(block.offsetLeft >= window.innerWidth-block.offsetWidth){
            dirrection= -dirrection;
        }
        // else if (block.offsetLeft<=0){
        //     step++
        // }
    
            block.style.left = block.offsetLeft + (step*dirrection) + 'px';
    }
}  

