window.onload = function() {

    var elems = document.querySelectorAll('.inp');
    var textarea = document.querySelector('#text');
    var i = 0;

    setInterval(function(){
        if(i==elems.length){
            i=0
        }

        textarea.value += elems[i].value
       
        i++
    }, 400)
}