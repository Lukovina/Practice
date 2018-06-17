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

            resolve(JSON.parse(xhr.responseText));
        }
    });
}


function sortByTitle(arr){
    arr.sort()
}

module.exports = {
    load
};