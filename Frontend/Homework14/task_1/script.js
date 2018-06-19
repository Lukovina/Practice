window.onload = function(){
	var range = document.querySelector('.range');
	var number = document.querySelector('.number')

	var block = document.querySelector('.block')
	var red = document.querySelector('.red')
	var green = document.querySelector('.green')
	var comission

	range.addEventListener('mousemove', putRange)
	number.addEventListener('click', putNumber)



	function putRange(){
	number.value  = range.value;
	green.style.height = range.value + 'px';
	red.style.height = comission(range.value) + 'px';
	red.style.bottom = green.style.height;

	}



	function putNumber() {
		if(number.value>100) {
			number.value=100
		}
		range.value = number.value
		green.style.height = number.value + 'px';
		red.style.height = comission(range.value) + 'px';
		red.style.bottom = green.style.height
	}
	

	function comission (range){
    if (range < 20) {
        return range*.02;
    }else if (range >= 20 && range < 50) {
        return range*.04;
    } else if (range >= 50 && range < 75) {
        return range*.06;
    } else if (range >= 75 && range <= 100) {
        return range*.08
    }

}
}