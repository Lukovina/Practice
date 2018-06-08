
window.onload = function() {

doAjax("GET", "/config.json").then(function(value){
    for(var key in value){
        var url = (value)[key] + ".json"
    }
    doAjax("GET" , url).then(renderMenu)
})   

function renderMenu(value, target) {
    var list = value.menu || value.submenu;

                    var nav = document.createElement("nav");

                    if (!target) {
                        nav.classList.add('menu'); 
                        document.body.appendChild(nav);
                        var menu = document.querySelector(".menu"); 
                        menu.addEventListener("mouseover" , check)                          
                        } else {
                            target.appendChild(nav)
                            nav.classList.add('subMenu');   
                        }
                                                    
                        list.forEach(function(item) {
                        var div = document.createElement('div');

                        if (!target) {
                            div.classList.add('menuInner');
                            menu.appendChild(div)
                        } else {
                            div.classList.add('subMenuInner'); 
                            nav.style.left = target.clientWidth + 1 + 'px';
                            nav.style.top = target.clientTop -2 + 'px'
                            nav.appendChild(div)        
                        }
                        div.innerHTML = item.title;

                        if(item.hasOwnProperty("submenu")){
                        renderMenu(item, div)  
        }     
    })

}

    function check (event) {         
        if(event.target.className == "menuInner" && event.target.firstElementChild) {      
            var targetChild = event.target.querySelectorAll(".subMenu");    
            closeMenu()
             targetChild[0].style.display = "flex"; 
            }
    }

    function closeMenu () {
        var subm = document.querySelectorAll('.subMenu');
        subm.forEach(function(item) {
            item.style.display="none";
        })
    }

    document.addEventListener("mouseover", function() {
        
        if(event.target.className != "menuInner" && event.target.className != "subMenuInner") {
            closeMenu()
        }
    })
}




function doAjax(get , list) {
    var xhr = new XMLHttpRequest();
    xhr.open(get , list);
    xhr.send();

var promise = new Promise(function(resolve, reject){
         xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
                }
                resolve(JSON.parse(xhr.responseText))                               
                }
    
    })
    return promise
}

