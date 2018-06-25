var dataService = require('./dataService.js');
var render = require('./render.js');

dataService.load("GET", "https://api.github.com/orgs/hillel-front-end/repos")
    .then(val=>val.map(item=>item.forks_url)) 
    .then(list=>list.map(item=>dataService.load("GET", item)))
    .then(res=>Promise.all(res))
    .then(array=>array.forEach(arr=>{
        console.log(arr)
    }))