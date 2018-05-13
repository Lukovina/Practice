window.onload = function() {

    var elems = document.querySelectorAll('.inp');
    var textarea = document.querySelector('#text');
    var i = 0;
    var step = 0;
    setInterval(function(){
     if(i==elems.length) {
         step--
     }else if (i==0) {
         step++
     }
        textarea.value+= elems[i].value+ ','
       
        i+=step
    }, 2000)
}