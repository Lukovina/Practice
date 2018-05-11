window.onload = function(){
	var range = document.querySelector('.range');
	var number = document.querySelector('.number')

	var block = document.querySelector('.block')
	var red = document.querySelector('.red')
	var green = document.querySelector('.green')


	range.addEventListener('mousemove', putRange)
	number.addEventListener('click', putNumber)



	function putRange(){
	if (range.value<20) {
		var comission = range.value * .02
	}else if(range.value >=20 && range.value<50) {
		comission = range.value * .04
	}else if(range.value >=50 && range.value<75) {
		comission = range.value * .06
	}else if(range.value >=75 && range.value<100) {
		comission = range.value * .08
	}


	number.value  = range.value;
	green.style.height = range.value + 'px';
	red.style.height = comission + 'px';
	red.style.bottom = green.style.height
	}



	function putNumber() {
		if (range.value<20) {
		var comission = range.value * .02
	}else if(range.value >=20 && range.value<50) {
		comission = range.value * .04
	}else if(range.value >=50 && range.value<75) {
		comission = range.value * .06
	}else if(range.value >=75 && range.value<100) {
		comission = range.value * .08
	}


		range.value = number.value
		green.style.height = number.value + 'px';
		red.style.height = comission + 'px';
		red.style.bottom = green.style.height
	}
}