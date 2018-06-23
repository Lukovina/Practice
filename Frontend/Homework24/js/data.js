var model = {}

function initialCondition(value) {
    if(arguments.length){
        model.origin = value
        return value
        }else{
        return model.origin
        }
}


function load() {

    return doAjax("GET", "goods.json")
} 


function doAjax(method, url){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    
    return new Promise(function(resolve, reject){
        xhr.send();

        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200) {
                reject(xhr);
            }

            var response = JSON.parse(xhr.responseText)

            if(!model.origin){
                initialCondition(response.list);
            }
            
            resolve(response);
        }
    });
}


function sortByPrice(itemA, itemB) {
    return itemA.price - itemB.price;
  }

function sortByTitle(itemA, itemB) {
  if (itemA.title > itemB.title) {
    return 1;
  }
  if (itemA.title < itemB.title) {
    return -1;
  }
  return 0;
};

function search (array, value) {

   return array.filter(item => {
       for(var key in item) {
           if(key != "img"){
            if(item[key].toString().indexOf(value) != -1 ) {
                return item
                }
            }
       }
   })
}


module.exports = {
    load,
    sortByPrice,
    sortByTitle,
    search,
    initialCondition
};