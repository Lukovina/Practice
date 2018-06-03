// function doAjax(get , list) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(get , list);
//     xhr.send()

//     var promise = new Promise(function(resolve, reject){
//             xhr.onreadystatechange = function(){
//                     if (xhr.readyState != 4) {
//                         return;
//                     }
//                     resolve(xhr.responseText)
                
//                 }

//         });
//         return promise
// }

// doAjax("GET", "data.json").then(function(x){
//     console.log(x)
// })
// doAjax("GET", "data2.json").then(function(x){
//     console.log(x)
// })


// Promise.all([
//     doAjax("GET", "data.json"),
//     doAjax("GET", "data2.json")
// ])  .then(function(values) {
//     console.log(values)
// })

window.onload = function() {
    var menu = document.querySelector(".menu");
    


doAjax("GET", "/config.json").then(function(value){
    for(var key in value){
        var url = (value)[key] + ".json"
    }
    doAjax("GET" , url).then(function(value){
   
            renderMenu(value) 
    })
})   

var menu = document.querySelector(".menu");
function renderMenu(value) {
            for(var key in value){
                if(key == "menu"){       
                        value[key].forEach(function(item) {
                        var div = document.createElement('div');
                        div.classList.add('menuInner');
                        div.innerHTML = item.title;
                        menu.appendChild(div)
                        if(item.hasOwnProperty("submenu") ){
                            div.addEventListener("mouseover", function(){renderMenu(item)})
                        }
                        
                    
                    });     
                }else if(key =="submenu"){
                        var nav = document.createElement('nav');
                        nav.style.width = 300 + "px"
                        nav.style.top = event.target.offsetTop  + "px";
                        nav.style.left = event.target.offsetWidth + "px"
                        nav.classList.add('subMenu')
                        event.target.appendChild(nav)                      
                        var submenu = document.querySelector(".subMenu");
                        event.target.addEventListener("mouseout", function(){
                            submenu.remove()
                        })

                        value[key].forEach(function(item) {
                        var div = document.createElement('div');
                        div.classList.add('subMenuInner');
                        div.innerHTML = item.title;
                        submenu.appendChild(div);
                        
                })
            }
      
    }
}



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

