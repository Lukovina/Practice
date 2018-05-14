window.onload = function(){
	var block = document.querySelector('.block');
	var step = 4;
	var direction = 1;
	var buffer = 5;
	console.dir(window)
	
     var timer = setInterval(runner,20)

	function runner(){
		if((block.offsetLeft >= window.innerWidth - block.offsetWidth - buffer) ||
			(block.offsetLeft <= 0 + buffer && direction == -1 )){
			direction = -direction;
		}

		block.style.left = block.offsetLeft + (step*direction) + 'px';
	}


	


	document.querySelector('#stop').addEventListener('click', function(){clearInterval(timer)})

	document.querySelector('#start').addEventListener('click', function(){timer = setInterval(runner,20)})


}