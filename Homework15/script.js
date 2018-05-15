window.onload = function() {

	var hero = document.querySelector('.hero') 	
	document.addEventListener('keydown', move);

	var step = 5;
	var direction = 1;
	var buffer = 6;
	var h = 100
	console.dir(hero)

	
	


	function move (e) {
		console.dir(hero)
		console.dir(document)
		console.dir(window)
		console.log(window.screenWidth)

		if(e.key == 'ArrowRight' &&  hero.offsetLeft + hero.offsetWidth <= window.innerWidth) {
			hero.style.left = hero.offsetLeft + step + 'px';
		}else if(e.key == 'ArrowLeft'&&  hero.offsetLeft >= 0) {
			hero.style.left = hero.offsetLeft - step + 'px' ;
		}
		else if(e.key == 'ArrowUp' && !e.ctrlKey&& hero.offsetTop >= 0) {
			hero.style.top = hero.offsetTop - step + 'px';
		}
		else if(e.key == 'ArrowDown'&& !e.ctrlKey && hero.offsetTop + hero.offsetHeight < window.innerHeight) {
			hero.style.top = hero.offsetTop + step + 'px';
		}else if(e.key == ' '&& !e.ctrlKey) {
			timer = setInterval(jumping,20)
		}else if(e.key == 'Control') {
			hero.style.height = hero.clientHeight*.6 + 'px';
			hero.style.width = hero.clientWidth*1.15 + 'px';
		}


		var m = hero.offsetTop -h
	    function jumping() {

			if((hero.offsetTop <= m)) {
				 direction = -direction;
			}

	        hero.style.top = hero.offsetTop - (step*direction) + 'px';
			
			if(hero.offsetTop == m+h && direction == -1) {
				 direction = -direction;
				clearInterval(timer)
			}

		}
	}
}