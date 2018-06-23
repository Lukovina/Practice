var render = require('./render.js'),
    data = require('./data.js'),
    priceBtn = document.querySelector(".priceSort"),
    titleBtn = document.querySelector(".titleSort"),
    searchBtn = document.querySelector(".searchBtn"),
    searchHolder = document.querySelector(".searchHolder"),
    resetBtn = document.querySelector(".reset")  


data.load()
    .then(value=>render.renderGoods(value.list))

priceBtn.addEventListener("click", function(){
    data
        .load()
        .then(value=>render.renderGoods(data.sortByPrice(value.list)))
})  

titleBtn.addEventListener("click", function(){
    data
        .load()
        .then(value=>render.renderGoods(data.sortByTitle(value.list)))
})   

searchBtn.addEventListener("click", function(){

    data
        .load()
        .then(
            value=> render.renderGoods(data.search(value.list, searchHolder.value))
        )
})

resetBtn.addEventListener("click", function() {
    render.renderGoods(data.initialCondition())
})


    