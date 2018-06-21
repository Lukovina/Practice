var model = {
    origin: []
}

function initialCondition(value) {
    if(arguments.length){
        model.origin = value
        return value
        }else{
            return model.origin
        }
}


function load() {

    return doAjax("GET", "./goods.json")
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

            initialCondition(response.list);
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

function findById (array, value) {
   return array.filter( item => item.id == value)
}


module.exports = {
    load,
    sortByPrice,
    sortByTitle,
    findById,
    initialCondition
    
};