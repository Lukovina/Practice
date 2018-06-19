var render = require('./render.js'),
    data = require('./data.js'),
    priceBtn = document.querySelector(".priceSort"),
    titleBtn = document.querySelector(".titleSort")


data.load()
    .then(value=>render.renderGoods(value))

priceBtn.addEventListener("click", function(){
    data.load()
               .then(value=>render.renderGoods(value.list.sort(data.sortByPrice)))
})  

titleBtn.addEventListener("click", function(){
    data.load()
               .then(value=>render.renderGoods(value.list.sort(data.sortByTitle)))
})   


    