function func1() {
    jumping(hero)
}

function func2() {
    sit(hero)
}

function func3() {
    changeColor(hero)
}

window.onload = function(){


    var hero = document.querySelector('.hero')  
    document.addEventListener('keydown', chooseAction);
    window.hero = hero;

    var step = 5;
    var direction = 1;
    var buffer = 6;
    var h = 100;


    
    function chooseAction (e) {
        if(e.key == ' '&&!e.ctrlKey) {
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
        
    window.jumping = jumping;

    function sit(person) {
        if( person.clientHeight === 100) {
            person.classList.add('sit');
            person.style.top = person.offsetTop+40+ 'px';
        }
        
        document.addEventListener('keyup', getup);
        document.addEventListener('mouseup', getup);
        function getup() {
                if(person.clientHeight < 100 ){
                    person.style.top = person.offsetTop-40+ 'px';
                    person.classList.remove('sit')   
                }
         
        
        
        }
    }   
    window.sit = sit;


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

    function changeColor (person) {
    person.style.backgroundColor = "#"+(Math.floor(Math.random()*999))
    }

    window.changeColor = changeColor;

//CONTEXT_MENU//

var pkm = document.querySelector('.PKM') 

    document.addEventListener('contextmenu', generateMenu)

    function generateMenu(event) {
        event.preventDefault()
        pkm.classList.add('show')
        if(event.pageY+pkm.offsetHeight< window.innerHeight){
            pkm.style.top = event.pageY + 'px'
        }else{
            pkm.style.top = event.pageY - pkm.offsetHeight + 'px'
        }
        if(event.pageX+pkm.offsetWidth > window.innerWidth) {
            pkm.style.left = event.pageX - pkm.offsetWidth + 'px'
        }else{
            pkm.style.left = event.pageX + 'px';
        }
        document.addEventListener('mousedown', close);
    }

    function close() {
        pkm.classList.remove('show')
    }

   
    var contextmenu = {
        actions:[
            {
                title: "Jump",
                handler: 'func1'
            },
                {title: "Sit",
                handler: 'func2'
            },
            {
                title: "Change Color",
                handler: 'func3'
            }
        ]
    }


    var arr = contextmenu.actions;
    
for(i = 0; i<arr.length;i++) {
    var div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = arr[i].title;
    div.onmousedown = window[arr[i].handler];
    pkm.appendChild(div)
}


    

}