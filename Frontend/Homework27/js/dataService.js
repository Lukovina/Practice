function load(method, url) {
    return doAjax(method, url)
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
            resolve(response);
        }
    });
}






module.exports = { 

    load

};
