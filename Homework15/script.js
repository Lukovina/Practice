window.onload = function() {

	var hero = document.querySelector('.hero') 	
	document.addEventListener('keydown', move);

	var step = 1;
	var direction = 1;
	var buffer = 6;
	var h = 100;
	var hh= hero.offsetHeight;
	var hw = hero.offsetWidth;
	var x; 
	
	function move (e) {

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
		}else if(e.key == ' ' && !e.ctrlKey) {
			timer = setInterval(jumping,10)
		}else if(e.key == 'Control') {

			hero.style.height = hero.offsetHeight*.6 + 'px';
			hero.style.width = hero.offsetWidth*1.15 + 'px';
			document.addEventListener('keyup', getup);
			function getup(){
				hero.style.height = hh+ 'px';
				hero.style.width = hw+ 'px';
			}
			
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