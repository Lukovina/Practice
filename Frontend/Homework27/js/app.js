var dataService = require('./dataService.js');
var render = require('./render.js');

let tableItems = {
    repos: [],
    forks: []
}

dataService.load("GET", "https://api.github.com/orgs/hillel-front-end/repos")
    .then(val=> {
        tableItems.repos = val;  
        let list = val.map(item=>item.forks_url);
        return list;
    } ) 
    .then(list=>list.map(item=>dataService.load("GET", item)))
    .then(res=>Promise.all(res))
    .then(array=>array.forEach(arr=> {tableItems.forks.push(arr)}))
    .then(()=>render.render(tableItems))


const searchBtn = document.querySelector(".search-btn"),
      searchInput = document.querySelector(".search-input");
      searchBtn.addEventListener("click", search)

function search() {
    let searchModel = {
        repos: [],
        forks: []
    };

    for(let obj of tableItems.repos) {
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if( typeof(obj[key]) == "string" ){
                    if(obj[key].indexOf(searchInput.value) >= 0 ){
                       searchModel.repos.push(obj);
                       break;
                    }
                }
            }
        }
    }
    
    render.render(searchModel)
}      

