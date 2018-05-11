window.onload = function() {
 
     var elems = document.querySelectorAll('.inp');
     var textarea = document.querySelector('#text');
     var i = 0;


     arr = new Array(elems.length);
      


     setInterval(function(){
		if (i == elems.length){
			i=0;
		} 
        
		if(arr[i] !== elems[i].value) {
            arr[i] = elems[i].value
        }
			

        textarea.value = arr

		
         i++
     }, 1)
 } 