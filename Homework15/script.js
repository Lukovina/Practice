window.onload = function() {

	var hero = document.querySelector('.hero') 	
	document.addEventListener('keydown', chooseAction);


	var step = 5;
	var direction = 1;
	var buffer = 6;
	var h = 100;


	
	function chooseAction (e) {
		if(e.key == ' ' && !e.ctrlKey) {
			jumping(hero,e);
		}
		if(e.key == 'Control') {
			sit(hero,e);
		}else {
			moveTo(e.key, hero, e)
		}
	}


	function jumping(person,e) {
		
		person.style.top = person.offsetTop - h + 'px';
		setTimeout(function(){
		person.style.top = person.offsetTop + h + 'px';},200)
		}

	function sit(person, e) {
		if( person.clientHeight === 100) {
			person.classList.add('sit');
			person.style.top = person.offsetTop+40+ 'px';
		}
		
		document.addEventListener('keyup', getup);
		function getup(e) {
			if(e.key === 'Control') {
				person.style.top = person.offsetTop-40+ 'px';
				person.classList.remove('sit')
			}
		
		}
	}	


	function moveTo(direction, person, e) {
		if (direction === 'ArrowUp'&& !e.ctrlKey && person.offsetTop >= 0) {
            person.style.top = person.offsetTop - step + 'px';
        }else if (direction === 'ArrowDown'&& !e.ctrlKey && person.offsetTop + person.offsetHeight < window.innerHeight) {
            person.style.top = person.offsetTop + step + 'px';
        }else if (direction === 'ArrowLeft' &&  hero.offsetLeft >= 0) {
            person.style.left = person.offsetLeft - step + 'px';
        }else if (direction === 'ArrowRight' &&  person.offsetLeft + person.offsetWidth <= window.innerWidth) {
            person.style.left = person.offsetLeft + step + 'px';
		}
	}
}